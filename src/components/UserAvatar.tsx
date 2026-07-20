/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  AhmadAvatar, 
  FatimahAvatar, 
  YusufAvatar, 
  AisyahAvatar, 
  AliAvatar, 
  MaryamAvatar 
} from "./Avatars";

interface AvatarProps {
  className?: string;
  isActive?: boolean;
}

// Ustadz Ahmad (Tutor AI - Premium Inline SVG)
export function UstadzAhmadAvatar({ className = "w-12 h-12" }: AvatarProps) {
  return (
    <svg viewBox="0 0 120 120" className={`${className} animate-bounce-subtle`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="subtleGlowAhmad" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#D4A359" floodOpacity="0.5" />
        </filter>
        <clipPath id="circleClipAhmad">
          <circle cx="60" cy="60" r="54" />
        </clipPath>
      </defs>

      {/* Background Circle with glow and border */}
      <circle cx="60" cy="60" r="54" fill="#D4A359" stroke="#B8960C" strokeWidth="2" filter="url(#subtleGlowAhmad)" />

      {/* Character Group Clipped */}
      <g clipPath="url(#circleClipAhmad)">
        {/* Neck */}
        <path d="M 52 75 L 52 90 L 68 90 L 68 75 Z" fill="#B37857" />
        
        {/* Shoulders & Thobe */}
        <path d="M 25 120 C 25 90, 45 85, 52 85 L 68 85 C 75 85, 95 90, 95 120 Z" fill="#FFFFFF" />
        <path d="M 52 85 L 60 98 L 68 85" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="60" y1="98" x2="60" y2="120" stroke="#E5E7EB" strokeWidth="2" />
        <circle cx="60" cy="105" r="1.5" fill="#D1D5DB" />
        <circle cx="60" cy="113" r="1.5" fill="#D1D5DB" />

        {/* Ears */}
        <circle cx="36" cy="52" r="5" fill="#C8956C" />
        <circle cx="84" cy="52" r="5" fill="#C8956C" />
        
        {/* Face Base */}
        <path d="M 38 45 C 38 15, 82 15, 82 45 C 82 72, 70 82, 60 82 C 50 82, 38 72, 38 45 Z" fill="#C8956C" />
        
        {/* Kufi */}
        <path d="M 40 35 C 40 10, 80 10, 80 35 C 82 40, 38 40, 40 35 Z" fill="#FFFFFF" />
        <path d="M 40 35 Q 60 42 80 35" fill="none" stroke="#F3F4F6" strokeWidth="2" />
        <path d="M 45 25 L 55 15 M 55 25 L 65 15 M 65 25 L 75 15" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
        
        {/* Eyes (Looking slightly right toward the user) */}
        <ellipse cx="50" cy="48" rx="5" ry="3.5" fill="#FFFFFF" />
        <ellipse cx="72" cy="48" rx="5" ry="3.5" fill="#FFFFFF" />
        <circle cx="52" cy="48" r="2.5" fill="#1A2E26" />
        <circle cx="74" cy="48" r="2.5" fill="#1A2E26" />
        {/* Eye Highlights */}
        <circle cx="53" cy="47" r="1" fill="#FFFFFF" />
        <circle cx="75" cy="47" r="1" fill="#FFFFFF" />
        
        {/* Eyebrows (Friendly, wise) */}
        <path d="M 43 41 Q 48 38 53 41" fill="none" stroke="#1A2E26" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 67 42 Q 74 39 79 42" fill="none" stroke="#1A2E26" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Nose */}
        <path d="M 60 48 L 62 56 Q 62 58 60 58 Q 58 58 58 56" fill="none" stroke="#A87B64" strokeWidth="2" strokeLinecap="round" />
        
        {/* Beard & Mustache */}
        <path d="M 37 52 C 37 82, 48 90, 60 90 C 72 90, 83 82, 83 52 C 78 68, 68 70, 60 70 C 52 70, 42 68, 37 52 Z" fill="#1A2E26" />
        <path d="M 51 64 Q 60 60 69 64 Q 60 68 51 64 Z" fill="#1A2E26" />
        
        {/* Warm Smile */}
        <path d="M 55 69 Q 60 73 65 69" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Hand Unclipped (pops out slightly for dynamic depth) */}
      {/* Sleeve */}
      <path d="M 12 105 C 8 85, 12 70, 24 65 L 34 78 C 28 85, 30 100, 32 105 Z" fill="#FFFFFF" />
      <path d="M 24 65 L 34 78" stroke="#E5E7EB" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Hand (Encouraging Thumb Up) */}
      {/* Hand Base */}
      <path d="M 26 68 C 20 62, 22 55, 27 55 C 31 55, 34 58, 34 62 C 38 62, 40 66, 40 70 C 40 75, 36 78, 31 78 C 26 78, 25 72, 26 68 Z" fill="#C8956C" />
      {/* Thumb */}
      <path d="M 26 55 C 26 50, 30 50, 30 55 L 30 62" fill="none" stroke="#A87B64" strokeWidth="2" strokeLinecap="round" />
      {/* Folded Fingers */}
      <path d="M 34 62 L 38 62" fill="none" stroke="#A87B64" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 33 66 L 39 66" fill="none" stroke="#A87B64" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 32 70 L 37 70" fill="none" stroke="#A87B64" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Subtle sparkle accents near the hand */}
      <path d="M 15 50 L 18 45 M 22 47 L 26 42 M 10 58 L 15 55" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}


// Ustadzah Fatimah (Tutor AI - Premium Inline SVG)
export function UstadzahFatimahAvatar({ className = "w-12 h-12" }: AvatarProps) {
  return (
    <svg viewBox="0 0 120 120" className={`${className} animate-bounce-subtle`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="subtleGlowFatimah" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#D4A359" floodOpacity="0.5" />
        </filter>
        <clipPath id="circleClipFatimah">
          <circle cx="60" cy="60" r="54" />
        </clipPath>
      </defs>

      {/* Background Circle with glow and border */}
      <circle cx="60" cy="60" r="54" fill="#D4A359" stroke="#B8960C" strokeWidth="2" filter="url(#subtleGlowFatimah)" />

      {/* Character Group Clipped */}
      <g clipPath="url(#circleClipFatimah)">
        {/* Abaya/Gamis Base */}
        <path d="M 20 120 C 20 90, 35 85, 50 85 L 70 85 C 85 85, 100 90, 100 120 Z" fill="#587A5D" />
        
        {/* Inner Hijab / Undercap */}
        <path d="M 40 40 C 40 25, 80 25, 80 40 C 80 50, 40 50, 40 40 Z" fill="#4A694F" />

        {/* Hijab Drape (Sage Green) */}
        <path d="M 32 50 C 30 20, 90 20, 88 50 C 86 85, 75 105, 60 105 C 45 105, 34 85, 32 50 Z" fill="#6B8F71" />
        <path d="M 60 105 C 75 105, 85 90, 95 120 L 25 120 C 35 90, 45 105, 60 105 Z" fill="#6B8F71" />
        
        {/* Hijab Folds / Highlights */}
        <path d="M 38 45 C 34 60, 40 85, 50 95" fill="none" stroke="#7BA382" strokeWidth="2" strokeLinecap="round" />
        <path d="M 82 45 C 86 60, 80 85, 70 95" fill="none" stroke="#587A5D" strokeWidth="2" strokeLinecap="round" />
        <path d="M 60 105 C 55 110, 50 120, 48 120" fill="none" stroke="#587A5D" strokeWidth="2" strokeLinecap="round" />

        {/* Face Base */}
        <path d="M 42 48 C 42 28, 78 28, 78 48 C 78 72, 68 80, 60 80 C 52 80, 42 72, 42 48 Z" fill="#C8956C" />
        
        {/* Eyes (Looking slightly right toward the user) */}
        <ellipse cx="51" cy="52" rx="4.5" ry="3.5" fill="#FFFFFF" />
        <ellipse cx="71" cy="52" rx="4.5" ry="3.5" fill="#FFFFFF" />
        <circle cx="52.5" cy="52" r="2.2" fill="#1A2E26" />
        <circle cx="72.5" cy="52" r="2.2" fill="#1A2E26" />
        {/* Eye Highlights */}
        <circle cx="53.5" cy="51" r="1" fill="#FFFFFF" />
        <circle cx="73.5" cy="51" r="1" fill="#FFFFFF" />
        
        {/* Eyelashes */}
        <path d="M 46 51 Q 51 47 56 52" fill="none" stroke="#1A2E26" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 66 51 Q 71 47 76 52" fill="none" stroke="#1A2E26" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Eyebrows (Gentle, soft) */}
        <path d="M 46 45 Q 51 43 55 46" fill="none" stroke="#4A3424" strokeWidth="2" strokeLinecap="round" />
        <path d="M 65 46 Q 69 43 74 45" fill="none" stroke="#4A3424" strokeWidth="2" strokeLinecap="round" />
        
        {/* Nose */}
        <path d="M 61 54 L 62 60 Q 62 61 60 61 Q 59 61 59 60" fill="none" stroke="#A87B64" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Blush */}
        <ellipse cx="48" cy="60" rx="3.5" ry="2" fill="#F472B6" opacity="0.4" />
        <ellipse cx="74" cy="60" rx="3.5" ry="2" fill="#F472B6" opacity="0.4" />

        {/* Warm, sincere smile */}
        <path d="M 55 68 Q 60 73 66 68" fill="none" stroke="#831843" strokeWidth="2" strokeLinecap="round" />
        <path d="M 57 70 Q 60 74 64 70" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Hand Unclipped (pops out slightly for dynamic depth) */}
      {/* Sleeve */}
      <path d="M 12 105 C 8 85, 12 70, 24 65 L 34 78 C 28 85, 30 100, 32 105 Z" fill="#6B8F71" />
      <path d="M 24 65 L 34 78" stroke="#587A5D" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Hand (Teaching/Explaining Gesture - open palm facing up/forward) */}
      <path d="M 22 66 C 18 60, 22 52, 27 52 C 32 52, 36 56, 36 62 C 39 62, 42 66, 42 70 C 42 76, 37 80, 31 80 C 25 80, 21 72, 22 66 Z" fill="#C8956C" />
      {/* Fingers detailed */}
      <path d="M 22 66 C 18 60, 22 52, 27 52" fill="none" stroke="#A87B64" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 27 55 L 34 62" fill="none" stroke="#A87B64" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 29 58 L 36 65" fill="none" stroke="#A87B64" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 31 61 L 38 68" fill="none" stroke="#A87B64" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 33 65 L 40 72" fill="none" stroke="#A87B64" strokeWidth="1.5" strokeLinecap="round" />

      {/* Subtle sparkle accents near the hand */}
      <path d="M 15 50 L 18 45 M 22 47 L 26 42 M 10 58 L 15 55" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Master component to resolve/render ANY user avatar string or ID
export default function UserAvatar({ avatar, className = "w-10 h-10", isActive = false }: { avatar: string; className?: string; isActive?: boolean }) {
  const norm = (avatar || "").trim();

  // 1. Ahmad
  if (norm === "🧔" || norm === "avatar_1" || norm.toLowerCase() === "ahmad") {
    return <AhmadAvatar className={className} isActive={isActive} />;
  }
  // 2. Fatimah
  if (norm === "👩‍🦱" || norm === "avatar_2" || norm.toLowerCase() === "fatimah") {
    return <FatimahAvatar className={className} isActive={isActive} />;
  }
  // 3. Yusuf
  if (norm === "👨‍💼" || norm === "avatar_3" || norm.toLowerCase() === "yusuf") {
    return <YusufAvatar className={className} isActive={isActive} />;
  }
  if (norm === "UstadzAhmad") {
    return <UstadzAhmadAvatar className={className} isActive={isActive} />;
  }
  if (norm === "UstadzahFatimah") {
    return <UstadzahFatimahAvatar className={className} isActive={isActive} />;
  }
  // 4. Aisyah
  if (norm === "🧕" || norm === "avatar_4" || norm.toLowerCase() === "aisyah") {
    return <AisyahAvatar className={className} isActive={isActive} />;
  }
  // 5. Ali
  if (norm === "🧑‍🎓" || norm === "avatar_5" || norm.toLowerCase() === "ali") {
    return <AliAvatar className={className} isActive={isActive} />;
  }
  // 6. Maryam
  if (norm === "👩‍🏫" || norm === "avatar_6" || norm.toLowerCase() === "maryam") {
    return <MaryamAvatar className={className} isActive={isActive} />;
  }

  // Fallback
  return <AliAvatar className={className} isActive={isActive} />;
}
