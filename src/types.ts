/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum UserLevelType {
  MUBTADI = "Mubtadi", // Pemula Mutlak
  MUTAWASSIT = "Mutawassit", // Dasar
  MUTAQADDIM = "Mutaqaddim", // Menengah
  MAHIR = "Mahir", // Mahir
  ULAMA = "Ulama", // Guru/Ahli
}

export interface UserProfile {
  name: string;
  avatar: string; // ID avatar atau URL
  level: UserLevelType;
  xp: number;
  streak: number;
  lastActiveDate: string; // ISO string
  badges: string[]; // ID badge
  targetMinutes: number; // target harian: 10, 20, 30 menit
  isPremium: boolean;
  coins: number;
  masteredWordsCount: number;
  minutesLearned: number;
  accuracy: number; // persentase akurasi jawaban (0-100)
  phone?: string;
  isDevMode?: boolean;
  isOwner?: boolean;
  premiumCode?: string;
  premiumExpires?: string | null;
  completedLessons?: string[];
  trialStartDate?: string;
  trialStatus?: "active" | "expired" | "none";
  trialDaysLeft?: number;
}

export interface LessonContent {
  introduction: string;
  intro?: string; // Alternatif jika introduction tidak ada
  introTitle?: string;
  introVerse?: {
    ar: string;
    translation?: string;
    meaning?: string;
  };
  introBadges?: { icon: string; text: string }[];
  totalSentencesDisplay?: string;
  introductionAr?: string;
  tips?: { title: string; content: string }[];
  cards: LessonCardItem[];
  words?: LessonCardItem[]; // Alternatif jika cards tidak ada
  quiz: QuizQuestion[];
  grammarSection?: any;
  grammar?: any; // Alternatif
  readingSection?: any;
  reading?: any; // Alternatif
  dialogueSection?: any;
  dialog?: any; // Alternatif
  navigationButton?: {
    text: string;
    targetId: string;
    className: string;
  };
}

export interface Lesson {
  id: string;
  level?: number;
  bab?: number;
  title: string;
  titleAr: string;
  description: string;
  xpReward: number;
  isCompleted: boolean;
  isLocked: boolean;
  type:
    | "hijaiyah"
    | "grammar"
    | "vocabulary"
    | "conversation"
    | "quran"
    | "comprehensive";
  content: LessonContent;
}

export interface LessonCardItem {
  id: string;
  wordAr?: string;
  arabic?: string;
  transliteration?: string;
  trans?: string; // Alias
  translation: string;
  meaning?: string; // Alias
  description?: string;
  note?: string;
  category?: string;
  gender?: string;
  exampleAr?: string;
  exampleTrans?: string;
  exampleTranslation?: string;
  example2Ar?: string;
  example2Trans?: string;
  example2Translation?: string;
  logicBox?: string;
  examples?: {
    ar?: string;
    arabic?: string;
    trans?: string;
    transliteration?: string;
    translation?: string;
    meaning?: string; // Alias
    analysis?: string;
    logicExplanation?: string; // Alias
    grammarNote?: string;
  }[];
  audioKey?: string; // Untuk playback TTS
  audioWord?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionAr?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  type: "multiple-choice" | "translate" | "listening" | "fill-blank";
  audioKey?: string;
  points?: number;
  difficulty?: "basic" | "medium" | "hard";
}

export interface CurriculumLevel {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  lessons: Lesson[];
  isHidden?: boolean;
  isComingSoon?: boolean;
  comingSoonMessage?: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  category: "streak" | "lessons" | "games" | "premium" | "perfect";
}

export interface ChatMessage {
  id: string;
  sender: "ai" | "user";
  text: string;
  transliteration?: string;
  translation?: string;
  correction?: string;
  praise?: string;
  timestamp: string;
}

export interface Flashcard {
  id: string;
  front: string; // Arab
  frontTrans?: string; // Transliterasi
  back: string; // Terjemahan Indonesia
  example?: string;
  interval: number; // Hari untuk SRS
  easeFactor: number;
  repetitions: number;
  dueDate: string; // ISO date
}

export interface LeaderboardEntry {
  name: string;
  avatar: string;
  xp: number;
  isPremium: boolean;
  level: UserLevelType;
}

export interface DailyHadits {
  textAr: string;
  textId: string;
  narrator: string;
  theme: string;
}

export interface PaymentProof {
  id: string;
  userName: string;
  phone: string;
  package: "monthly" | "annual";
  nominal: number;
  timestamp: string;
  photoBase64: string;
  status: "pending" | "confirmed" | "rejected";
  rejectionReason?: string;
}

export interface PremiumToken {
  tokenCode: string; // AA-XXXX-XXXX
  userName: string;
  package: "monthly" | "annual";
  durationDays: number;
  activeDate?: string;
  expiryDate?: string;
  status: "active" | "used" | "expired";
}
