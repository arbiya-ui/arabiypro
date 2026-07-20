import React from "react";

export interface AvatarProps {
  className?: string;
  isActive?: boolean;
}

const getAvatarClasses = (className: string = "", isActive: boolean = false) => {
  const baseClasses = "transition-transform duration-300 hover:scale-105";
  const activeClasses = isActive ? "ring-4 ring-[#D4A359] ring-offset-2 shadow-[0_0_15px_rgba(212,175,55,0.6)] rounded-full" : "";
  return `${baseClasses} ${activeClasses} ${className}`.trim();
};

// 1. Ahmad (pria dewasa tampan)
export function AhmadAvatar({ className, isActive }: AvatarProps) {
  return (
    <svg viewBox="0 0 80 80" className={getAvatarClasses(className, isActive)} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Circle */}
      <circle cx="40" cy="40" r="38" fill="#D4A359" />
      
      {/* Character Group */}
      <g clipPath="url(#clipAhmad)">
        <clipPath id="clipAhmad">
          <circle cx="40" cy="40" r="38" />
        </clipPath>
        
        {/* Jubah Putih Kerah Hijau */}
        <path d="M 15 80 C 15 60, 30 55, 40 55 C 50 55, 65 60, 65 80 Z" fill="#FFFFFF" />
        <path d="M 30 55 L 40 68 L 50 55" fill="none" stroke="#0A3B29" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Wajah */}
        <path d="M 28 40 C 28 20, 52 20, 52 40 C 52 58, 45 65, 40 65 C 35 65, 28 58, 28 40 Z" fill="#8B6355" />
        
        {/* Janggut Hitam Pendek Rapi */}
        <path d="M 28 40 C 28 65, 35 70, 40 70 C 45 70, 52 65, 52 40 C 48 55, 32 55, 28 40 Z" fill="#1A2E26" />
        <path d="M 35 50 Q 40 48 45 50 Q 40 54 35 50 Z" fill="#1A2E26" />
        
        {/* Sorban Putih Lilitan */}
        <path d="M 26 28 C 26 12, 54 12, 54 28 C 55 35, 25 35, 26 28 Z" fill="#FFFFFF" />
        <path d="M 26 28 Q 40 34 54 28" fill="none" stroke="#E5E7EB" strokeWidth="2.5" />
        <path d="M 30 20 L 38 12 M 38 22 L 46 12 M 46 22 L 52 14" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
        
        {/* Mata */}
        <ellipse cx="35" cy="38" rx="3.5" ry="2.5" fill="#1A2E26" />
        <ellipse cx="45" cy="38" rx="3.5" ry="2.5" fill="#1A2E26" />
        <circle cx="36" cy="37" r="1" fill="#FFFFFF" />
        <circle cx="46" cy="37" r="1" fill="#FFFFFF" />
        
        {/* Alis */}
        <path d="M 31 33 Q 35 31 38 33" fill="none" stroke="#1A2E26" strokeWidth="2" strokeLinecap="round" />
        <path d="M 42 33 Q 45 31 49 33" fill="none" stroke="#1A2E26" strokeWidth="2" strokeLinecap="round" />
        
        {/* Hidung */}
        <path d="M 40 40 L 41.5 46 Q 41.5 48 40 48 Q 38.5 48 38.5 46" fill="none" stroke="#5E4034" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Senyum */}
        <path d="M 36 55 Q 40 58 44 55" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 2. Fatimah (wanita dewasa anggun)
export function FatimahAvatar({ className, isActive }: AvatarProps) {
  return (
    <svg viewBox="0 0 80 80" className={getAvatarClasses(className, isActive)} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#D1FAE5" />
      
      <g clipPath="url(#clipFatimah)">
        <clipPath id="clipFatimah">
          <circle cx="40" cy="40" r="38" />
        </clipPath>
        
        {/* Abaya Tosca */}
        <path d="M 15 80 C 15 60, 25 55, 40 55 C 55 55, 65 60, 65 80 Z" fill="#0D9488" />
        
        {/* Hijab Tosca */}
        <path d="M 22 35 C 20 15, 60 15, 58 35 C 56 65, 48 75, 40 75 C 32 75, 24 65, 22 35 Z" fill="#0F766E" />
        <path d="M 40 75 C 50 75, 58 65, 62 80 L 18 80 C 22 65, 30 75, 40 75 Z" fill="#0F766E" />
        <path d="M 28 35 C 24 45, 28 65, 35 70" fill="none" stroke="#115E59" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 52 35 C 56 45, 52 65, 45 70" fill="none" stroke="#115E59" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Wajah */}
        <path d="M 28 38 C 28 20, 52 20, 52 38 C 52 58, 45 60, 40 60 C 35 60, 28 58, 28 38 Z" fill="#C8956C" />
        
        {/* Mata Lentik */}
        <ellipse cx="35" cy="40" rx="3.5" ry="2.5" fill="#1A2E26" />
        <ellipse cx="45" cy="40" rx="3.5" ry="2.5" fill="#1A2E26" />
        <circle cx="36" cy="39" r="1" fill="#FFFFFF" />
        <circle cx="46" cy="39" r="1" fill="#FFFFFF" />
        
        <path d="M 31 39 Q 35 36 39 40" fill="none" stroke="#1A2E26" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 49 39 Q 45 36 41 40" fill="none" stroke="#1A2E26" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Alis */}
        <path d="M 32 35 Q 35 33 38 35" fill="none" stroke="#5C3A21" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 48 35 Q 45 33 42 35" fill="none" stroke="#5C3A21" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Hidung */}
        <path d="M 40 42 L 41 47 Q 41 48 40 48 Q 39 48 39 47" fill="none" stroke="#A87B64" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Pipi Merona */}
        <ellipse cx="33" cy="47" rx="3" ry="2" fill="#F472B6" opacity="0.4" />
        <ellipse cx="47" cy="47" rx="3" ry="2" fill="#F472B6" opacity="0.4" />
        
        {/* Senyum */}
        <path d="M 36 53 Q 40 56 44 53" fill="none" stroke="#831843" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 3. Yusuf (pria muda energik)
export function YusufAvatar({ className, isActive }: AvatarProps) {
  return (
    <svg viewBox="0 0 80 80" className={getAvatarClasses(className, isActive)} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#DBEAFE" />
      
      <g clipPath="url(#clipYusuf)">
        <clipPath id="clipYusuf">
          <circle cx="40" cy="40" r="38" />
        </clipPath>
        
        {/* Kemeja Putih Kerah Rapi */}
        <path d="M 15 80 C 15 60, 30 55, 40 55 C 50 55, 65 60, 65 80 Z" fill="#FFFFFF" />
        <path d="M 28 55 L 40 68 L 52 55" fill="none" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Wajah */}
        <path d="M 28 40 C 28 20, 52 20, 52 40 C 52 58, 45 62, 40 62 C 35 62, 28 58, 28 40 Z" fill="#C8956C" />
        
        {/* Peci Hitam Modern */}
        <path d="M 26 28 C 26 15, 54 15, 54 28 C 55 31, 25 31, 26 28 Z" fill="#1F2937" />
        <path d="M 25 28 Q 40 32 55 28" fill="none" stroke="#111827" strokeWidth="2.5" />
        
        {/* Mata */}
        <ellipse cx="35" cy="40" rx="3.5" ry="3.5" fill="#1A2E26" />
        <ellipse cx="45" cy="40" rx="3.5" ry="3.5" fill="#1A2E26" />
        <circle cx="36" cy="39" r="1.5" fill="#FFFFFF" />
        <circle cx="46" cy="39" r="1.5" fill="#FFFFFF" />
        
        {/* Alis Tipis */}
        <path d="M 32 35 Q 35 33 38 35" fill="none" stroke="#1A2E26" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 48 35 Q 45 33 42 35" fill="none" stroke="#1A2E26" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Hidung */}
        <path d="M 40 42 L 41 48 Q 41 49 40 49 Q 39 49 39 48" fill="none" stroke="#A87B64" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Senyum Ceria */}
        <path d="M 35 55 Q 40 59 45 55" fill="none" stroke="#4A1E0D" strokeWidth="2" strokeLinecap="round" />
        <path d="M 36 56 Q 40 60 44 56" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 4. Aisyah (wanita muda ceria)
export function AisyahAvatar({ className, isActive }: AvatarProps) {
  return (
    <svg viewBox="0 0 80 80" className={getAvatarClasses(className, isActive)} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#FCE7F3" />
      
      <g clipPath="url(#clipAisyah)">
        <clipPath id="clipAisyah">
          <circle cx="40" cy="40" r="38" />
        </clipPath>
        
        {/* Baju Pink Muda */}
        <path d="M 15 80 C 15 60, 25 55, 40 55 C 55 55, 65 60, 65 80 Z" fill="#FBCFE8" />
        
        {/* Hijab Pink */}
        <path d="M 22 35 C 20 15, 60 15, 58 35 C 56 65, 48 75, 40 75 C 32 75, 24 65, 22 35 Z" fill="#EC4899" />
        <path d="M 40 75 C 50 75, 58 65, 62 80 L 18 80 C 22 65, 30 75, 40 75 Z" fill="#EC4899" />
        <path d="M 28 35 C 24 45, 28 65, 35 70" fill="none" stroke="#BE185D" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 52 35 C 56 45, 52 65, 45 70" fill="none" stroke="#BE185D" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Wajah Kuning Langsat Cerah */}
        <path d="M 28 38 C 28 20, 52 20, 52 38 C 52 58, 45 60, 40 60 C 35 60, 28 58, 28 38 Z" fill="#F7D1BA" />
        
        {/* Mata Bercahaya & Bulu Mata */}
        <ellipse cx="35" cy="40" rx="3.5" ry="3.5" fill="#1A2E26" />
        <ellipse cx="45" cy="40" rx="3.5" ry="3.5" fill="#1A2E26" />
        <circle cx="36" cy="39" r="1.5" fill="#FFFFFF" />
        <circle cx="46" cy="39" r="1.5" fill="#FFFFFF" />
        
        <path d="M 30 39 Q 35 35 40 39" fill="none" stroke="#1A2E26" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 50 39 Q 45 35 40 39" fill="none" stroke="#1A2E26" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Alis */}
        <path d="M 32 34 Q 35 32 38 34" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 48 34 Q 45 32 42 34" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Hidung */}
        <path d="M 40 42 L 41 47 Q 41 48 40 48 Q 39 48 39 47" fill="none" stroke="#D1A792" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Pipi Merona */}
        <ellipse cx="32" cy="47" rx="3.5" ry="2.5" fill="#F472B6" opacity="0.6" />
        <ellipse cx="48" cy="47" rx="3.5" ry="2.5" fill="#F472B6" opacity="0.6" />
        
        {/* Senyum Manis Ceria */}
        <path d="M 35 53 Q 40 58 45 53" fill="none" stroke="#9D174D" strokeWidth="2" strokeLinecap="round" />
        <path d="M 37 54 Q 40 57 43 54" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 5. Ali (pria muda bersemangat)
export function AliAvatar({ className, isActive }: AvatarProps) {
  return (
    <svg viewBox="0 0 80 80" className={getAvatarClasses(className, isActive)} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#D1FAE5" />
      
      <g clipPath="url(#clipAli)">
        <clipPath id="clipAli">
          <circle cx="40" cy="40" r="38" />
        </clipPath>
        
        {/* Kemeja Hijau Sage */}
        <path d="M 15 80 C 15 60, 30 55, 40 55 C 50 55, 65 60, 65 80 Z" fill="#6B8F71" />
        <path d="M 28 55 L 40 68 L 52 55" fill="none" stroke="#4A694F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Wajah */}
        <path d="M 28 40 C 28 20, 52 20, 52 40 C 52 58, 45 62, 40 62 C 35 62, 28 58, 28 40 Z" fill="#8B6355" />
        
        {/* Peci Hijau Modern */}
        <path d="M 26 28 C 26 15, 54 15, 54 28 C 55 31, 25 31, 26 28 Z" fill="#0A3B29" />
        <path d="M 25 28 Q 40 32 55 28" fill="none" stroke="#06241B" strokeWidth="2.5" />
        
        {/* Mata */}
        <ellipse cx="35" cy="40" rx="3.5" ry="3.5" fill="#1A2E26" />
        <ellipse cx="45" cy="40" rx="3.5" ry="3.5" fill="#1A2E26" />
        <circle cx="36" cy="39" r="1.5" fill="#FFFFFF" />
        <circle cx="46" cy="39" r="1.5" fill="#FFFFFF" />
        
        {/* Alis Tipis */}
        <path d="M 32 35 Q 35 33 38 35" fill="none" stroke="#1A2E26" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 48 35 Q 45 33 42 35" fill="none" stroke="#1A2E26" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Hidung */}
        <path d="M 40 42 L 41 48 Q 41 49 40 49 Q 39 49 39 48" fill="none" stroke="#5E4034" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Senyum Ceria */}
        <path d="M 35 55 Q 40 59 45 55" fill="none" stroke="#4A1E0D" strokeWidth="2" strokeLinecap="round" />
        <path d="M 36 56 Q 40 60 44 56" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 6. Maryam (wanita dewasa elegan)
export function MaryamAvatar({ className, isActive }: AvatarProps) {
  return (
    <svg viewBox="0 0 80 80" className={getAvatarClasses(className, isActive)} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#EDE9FE" />
      
      <g clipPath="url(#clipMaryam)">
        <clipPath id="clipMaryam">
          <circle cx="40" cy="40" r="38" />
        </clipPath>
        
        {/* Abaya Ungu Muda */}
        <path d="M 15 80 C 15 60, 25 55, 40 55 C 55 55, 65 60, 65 80 Z" fill="#C4B5FD" />
        
        {/* Hijab Ungu */}
        <path d="M 22 35 C 20 15, 60 15, 58 35 C 56 65, 48 75, 40 75 C 32 75, 24 65, 22 35 Z" fill="#7C3AED" />
        <path d="M 40 75 C 50 75, 58 65, 62 80 L 18 80 C 22 65, 30 75, 40 75 Z" fill="#7C3AED" />
        <path d="M 28 35 C 24 45, 28 65, 35 70" fill="none" stroke="#5B21B6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 52 35 C 56 45, 52 65, 45 70" fill="none" stroke="#5B21B6" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Wajah Langsat */}
        <path d="M 28 38 C 28 20, 52 20, 52 38 C 52 58, 45 60, 40 60 C 35 60, 28 58, 28 38 Z" fill="#C8956C" />
        
        {/* Mata Lentik */}
        <ellipse cx="35" cy="40" rx="3.5" ry="2.5" fill="#1A2E26" />
        <ellipse cx="45" cy="40" rx="3.5" ry="2.5" fill="#1A2E26" />
        <circle cx="36" cy="39" r="1" fill="#FFFFFF" />
        <circle cx="46" cy="39" r="1" fill="#FFFFFF" />
        
        <path d="M 31 39 Q 35 36 39 40" fill="none" stroke="#1A2E26" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 49 39 Q 45 36 41 40" fill="none" stroke="#1A2E26" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Alis */}
        <path d="M 32 35 Q 35 33 38 35" fill="none" stroke="#5C3A21" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 48 35 Q 45 33 42 35" fill="none" stroke="#5C3A21" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Hidung */}
        <path d="M 40 42 L 41 47 Q 41 48 40 48 Q 39 48 39 47" fill="none" stroke="#A87B64" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Pipi Merona */}
        <ellipse cx="33" cy="47" rx="3" ry="2" fill="#F472B6" opacity="0.3" />
        <ellipse cx="47" cy="47" rx="3" ry="2" fill="#F472B6" opacity="0.3" />
        
        {/* Senyum Anggun */}
        <path d="M 36 53 Q 40 55 44 53" fill="none" stroke="#831843" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
