/**
 * SPDX-License-Identifier: Apache-2.0
 */

export const getAudioSpeed = (): number => {
  const saved = localStorage.getItem("audioSpeed");
  if (saved) return parseFloat(saved);
  return 1.0;
};

export const setAudioSpeed = (speed: number) => {
  localStorage.setItem("audioSpeed", speed.toString());
};

let currentUtterance: SpeechSynthesisUtterance | null = null;

export const stopSpeech = () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
};

export const speakArabic = (text: string, speed?: number, gender: 'male' | 'female' = 'male', onEnd?: () => void): Promise<void> => {
  return new Promise((resolve) => {
    if (!window.speechSynthesis) {
      resolve();
      return;
    }

    // Always stop existing speech
    stopSpeech();

    if (!text) {
      resolve();
      return;
    }

    // Clean text: remove quotes, markdown, brackets, and extra symbols that shouldn't be read
    const cleanText = String(text)
      .replace(/[*_#~`>]/g, '') // Remove Markdown symbols
      .replace(/["'«»“”‘’]/g, '') // Remove various quotes
      .replace(/[()\[\]{}]/g, ' ') // Replace brackets with space
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText) {
      resolve();
      return;
    }

    // Helper to split text into language segments
    const splitTextByLanguage = (input: string) => {
      const segments: { text: string; lang: 'ar' | 'id' }[] = [];
      // This regex identifies Arabic blocks including basic punctuation
      const arabicRegex = /[\u0600-\u06FF\u060C\u061B\u061F]+/g;
      
      let lastIndex = 0;
      let match;
      
      while ((match = arabicRegex.exec(input)) !== null) {
        if (match.index > lastIndex) {
          const before = input.substring(lastIndex, match.index).trim();
          if (before) segments.push({ text: before, lang: 'id' });
        }
        segments.push({ text: match[0], lang: 'ar' });
        lastIndex = arabicRegex.lastIndex;
      }
      
      if (lastIndex < input.length) {
        const after = input.substring(lastIndex).trim();
        if (after) segments.push({ text: after, lang: 'id' });
      }
      
      return segments;
    };

    const segments = splitTextByLanguage(cleanText);
    if (segments.length === 0) {
      resolve();
      return;
    }

    let currentSegmentIndex = 0;

    const playNextSegment = () => {
      if (currentSegmentIndex >= segments.length) {
        currentUtterance = null;
        if (onEnd) onEnd();
        resolve();
        return;
      }

      const segment = segments[currentSegmentIndex];
      // Final sanitization: ensure there's actually something to say
      if (!segment.text.replace(/[^\w\u0600-\u06FF]/g, '').trim()) {
        currentSegmentIndex++;
        playNextSegment();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(segment.text);
      currentUtterance = utterance;

      utterance.rate = speed || getAudioSpeed();
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      const loadVoicesAndSpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        if (segment.lang === 'ar') {
          utterance.lang = 'ar-SA';
          const arVoices = voices.filter(v => v.lang.toLowerCase().includes('ar'));
          if (arVoices.length > 0) {
            utterance.voice = arVoices.find(v => v.name.includes('Google') || v.name.includes('Natural')) || arVoices[0];
          }
        } else {
          utterance.lang = 'id-ID';
          const idVoices = voices.filter(v => v.lang.toLowerCase().includes('id'));
          if (idVoices.length > 0) {
            utterance.voice = idVoices.find(v => v.name.includes('Google') || v.name.includes('Natural')) || idVoices[0];
          }
        }

        utterance.onend = () => {
          currentSegmentIndex++;
          playNextSegment();
        };

        utterance.onerror = (e: any) => {
          console.error(`Speech segment error (${segment.lang}):`, e.error, e);
          // If it was interrupted by another speak call, don't continue the queue
          if (e.error === 'interrupted' || e.error === 'canceled') {
            currentUtterance = null;
            resolve();
            return;
          }
          currentSegmentIndex++;
          playNextSegment();
        };

        window.speechSynthesis.speak(utterance);
      };

      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
          window.speechSynthesis.onvoiceschanged = null;
          loadVoicesAndSpeak();
        };
      } else {
        loadVoicesAndSpeak();
      }
    };

    playNextSegment();
  });
};

export const isSpeaking = () => {
  return window.speechSynthesis.speaking;
};
