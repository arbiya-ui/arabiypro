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
      // Improved regex to catch Arabic characters, harakat (tashkeel), and common Arabic punctuation
      // We also allow internal spaces to keep phrases together in one segment
      const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u060C\u061B\u061F]+(\s+[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u060C\u061B\u061F]+)*/g;
      
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
        
        // Priority voices matching
        const findVoice = (langCode: string) => {
          const langVoices = voices.filter(v => v.lang.toLowerCase().includes(langCode.toLowerCase()));
          if (langVoices.length === 0) return null;
          
          // Try to find a high-quality/natural voice first
          return langVoices.find(v => 
            v.name.includes('Google') || 
            v.name.includes('Natural') || 
            v.name.includes('Online')
          ) || langVoices[0];
        };

        if (segment.lang === 'ar') {
          utterance.lang = 'ar-SA';
          const arVoice = findVoice('ar');
          if (arVoice) utterance.voice = arVoice;
        } else {
          utterance.lang = 'id-ID';
          const idVoice = findVoice('id');
          if (idVoice) utterance.voice = idVoice;
        }

        utterance.onend = () => {
          currentSegmentIndex++;
          playNextSegment();
        };

        utterance.onerror = (e: any) => {
          // If it was interrupted by another speak call or manual stop, don't log as error
          if (e.error === 'interrupted' || e.error === 'canceled') {
            currentUtterance = null;
            if (onEnd) onEnd();
            resolve();
            return;
          }
          
          console.error(`Speech segment error (${segment.lang}):`, e.error);
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
