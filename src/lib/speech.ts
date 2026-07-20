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

    // Clean text: remove quotes, brackets, and extra symbols that shouldn't be read
    const cleanText = String(text)
      .replace(/["'""'«»]/g, '')
      .replace(/[()\[\]{}]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText) {
      resolve();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    currentUtterance = utterance;
    
    // Set language first
    utterance.lang = 'ar-SA';
    utterance.rate = speed || getAudioSpeed();
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Simplified voice selection to improve compatibility
    const voices = window.speechSynthesis.getVoices();
    const arVoices = voices.filter(v => v.lang.startsWith('ar'));
    if (arVoices.length > 0) {
      utterance.voice = arVoices[0];
    }

    utterance.onend = () => {
      currentUtterance = null;
      if (onEnd) onEnd();
      resolve();
    };

    utterance.onerror = (e) => {
      console.error('Speech error:', e);
      currentUtterance = null;
      resolve();
    };

    window.speechSynthesis.speak(utterance);
  });
};

export const isSpeaking = () => {
  return window.speechSynthesis.speaking;
};
