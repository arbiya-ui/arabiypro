/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { 
  LayoutDashboard, 
  BookOpen, 
  Dumbbell, 
  MessageSquare, 
  Gamepad2, 
  BookMarked, 
  BarChart3, 
  User, 
  Crown, 
  Flame, 
  LogOut,
  Menu,
  X,
  Moon,
  Sun
} from "lucide-react";
import { UserProfile, UserLevelType } from "../types";
import UserAvatar from "./UserAvatar";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userProfile: UserProfile;
  isOpenMobile: boolean;
  setIsOpenMobile: (open: boolean) => void;
  onLogout: () => void;
  isDarkMode?: boolean;
  toggleTheme?: () => void;
  forceDrawer?: boolean;
}

export default function Sidebar({
  activeTab,
  setActiveTab,
  userProfile,
  isOpenMobile,
  setIsOpenMobile,
  onLogout,
  isDarkMode = false,
  toggleTheme = () => {},
  forceDrawer = false
}: SidebarProps) {
  
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Ambil status dari localStorage
  const ownerMode = localStorage.getItem('ownerMode') === 'true';
  const isPremium = localStorage.getItem('premiumStatus') === 'active';
  const trialStart = localStorage.getItem('trialStartDate');

  let trialDaysLeft = 0;
  if (trialStart) {
    const start = new Date(trialStart);
    const now = new Date();
    const diff = Math.floor(
      (now.getTime() - start.getTime()) 
      / (1000 * 60 * 60 * 24)
    );
    trialDaysLeft = Math.max(0, 7 - diff);
  }

  const trialActive = trialDaysLeft > 0;

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "learn", label: "Kurikulum", icon: BookOpen },
    { id: "practice", label: "Latihan & Drill", icon: Dumbbell },
    { id: "conversation", label: "AI Tutor Chat", icon: MessageSquare, isAi: true },
    { id: "games", label: "Mastery Arena", icon: Gamepad2 },
    { id: "dictionary", label: "Kamus Saku", icon: BookMarked },
    { id: "progress", label: "Analitik Progress", icon: BarChart3 },
    { id: "profile", label: "Profil & Setelan", icon: User },
  ];

  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpenMobile(false);
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpenMobile && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpenMobile(false)}
        />
      )}

      {/* DESKTOP SIDEBAR / MOBILE DRAWER */}
      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-premium-navy-dark border-r-2 border-accent/30 flex flex-col z-50 transition-transform duration-300 shadow-2xl glass
        ${forceDrawer 
          ? (isOpenMobile ? "translate-x-0" : "-translate-x-full")
          : "md:translate-x-0 md:relative md:h-screen " + (isOpenMobile ? "translate-x-0" : "-translate-x-full md:translate-x-0")
        }
      `}>
        {/* LOGO SECTION */}
        <div className="h-16 border-b border-accent/20 flex items-center px-4 justify-between shrink-0 bg-primary/40 glass">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-secondary border-2 border-accent flex items-center justify-center text-white shadow-lg shadow-black/20 glass">
              <span className="text-xl">🕌</span>
            </div>
            <div>
              <span className="text-sm font-black tracking-tight text-white uppercase">
                Arabiy<span className="text-accent drop-shadow-[0_0_8px_rgba(201,168,76,0.5)]">Pro</span>
              </span>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                <span className="text-[8px] block text-accent/80 tracking-widest font-black uppercase">PREMIUM ACCESS</span>
              </div>
            </div>
          </div>
          <button 
            className="md:hidden text-white/40 hover:text-white p-1 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsOpenMobile(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* USER STATS CONDENSED CARD */}
        <div className="px-3 py-4 shrink-0">
          <div className="p-4 bg-secondary/30 border-2 border-accent/30 rounded-[1.5rem] relative overflow-hidden group shadow-xl glass">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/10 rounded-full blur-xl pointer-events-none group-hover:bg-accent/20 transition-all duration-700" />
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <div className="w-10 h-10 rounded-full border-2 border-accent/50 p-0.5 bg-secondary glass">
                  <UserAvatar avatar={userProfile.avatar} className="w-full h-full rounded-full" isActive={true} />
                </div>
                {(userProfile.isPremium || isPremium) && (
                  <div className="absolute -bottom-1 -right-1 bg-accent text-primary p-0.5 rounded-full border-2 border-primary shadow-sm">
                    <Crown className="w-2.5 h-2.5" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-black text-xs text-white block truncate tracking-tight">{userProfile.name}</span>
                  {(ownerMode || userProfile.isOwner) && (
                    <span className="px-1.5 py-0.5 rounded-full bg-accent text-primary text-[8px] font-extrabold tracking-wider uppercase shrink-0">
                      OWNER
                    </span>
                  )}
                </div>
                <span className="text-[9px] text-accent block font-black mt-0.5 tracking-widest uppercase">{userProfile.level}</span>
              </div>
              <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded-lg text-[10px] text-accent font-black border border-accent/30 shrink-0 shadow-inner">
                🔥 {userProfile.streak}
              </div>
            </div>

            {/* EXP Progress Bar Tiny */}
            <div className="mt-3 pt-2 border-t border-white/5 space-y-1.5">
              <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-white/40">
                <span>Experience</span>
                <span>{userProfile.xp % 100}%</span>
              </div>
              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden border border-accent/20">
                <div 
                  className="h-full bg-accent shadow-[0_0_10px_rgba(201,168,76,0.5)] transition-all duration-1000"
                  style={{ width: `${userProfile.xp % 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* OWNER BADGE INDICATOR */}
        {userProfile.isOwner && (
          <div className="px-3 pb-2.5 shrink-0">
            <div className="p-2.5 bg-accent/10 border border-accent/30 rounded-[14px] flex items-center gap-3 relative overflow-hidden group glass">
              <div className="absolute top-0 right-0 w-12 h-12 bg-accent/10 rounded-full blur-xl pointer-events-none" />
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-primary shadow-lg shadow-accent/30 shrink-0">
                <Crown className="w-5 h-5 fill-current" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-black text-accent tracking-[0.2em] uppercase block">OWNER</span>
                <span className="text-[8px] text-accent/60 font-bold uppercase block tracking-wider mt-0.5">ADMIN PRIVILEGES</span>
              </div>
            </div>
          </div>
        )}

        {/* NAVIGATION MENUS */}
        <nav className="flex-1 overflow-y-auto px-2.5 space-y-1 py-3 scrollbar-none">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            // Check if this tab is premium
            const isPremiumTab = ["practice", "conversation", "games", "progress"].includes(item.id);
            
            // Access logic
            const isAccessible = !isPremiumTab || ownerMode || isPremium || trialActive;
            
            // Color logic for text
            let textClass = "";
            let textStyle = {};
            if (isActive) {
              textClass = "text-accent font-black";
            } else if (!isAccessible) {
              textClass = "";
              textStyle = { color: "#9CA3AF" };
            } else {
              textClass = "text-white/60 hover:text-white font-bold";
            }

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (!isAccessible) {
                    setShowUpgradeModal(true);
                  } else {
                    handleNav(item.id);
                  }
                }}
                style={textStyle}
                className={`
                  w-full px-4 py-3 rounded-2xl flex items-center justify-between text-left transition-all duration-300 cursor-pointer group/nav
                  ${isActive 
                    ? "bg-accent/15 border-l-4 border-l-accent shadow-lg shadow-black/20" 
                    : "hover:bg-white/5"
                  }
                  ${isActive ? "text-accent font-black" : textClass}
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? "bg-secondary text-accent border border-accent/40 shadow-lg" : "bg-white/5 text-white/20 group-hover/nav:text-white group-hover/nav:bg-white/10"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.1em]">{item.label}</span>
                </div>
                
                {/* Badges and lock indicators */}
                <div className="flex items-center gap-1.5">
                  {item.id === "dictionary" && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-white font-black tracking-widest border border-accent/30">
                      GRATIS
                    </span>
                  )}
                  {isPremiumTab && !ownerMode && !isPremium && (
                    trialActive ? (
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-accent text-primary font-black tracking-widest uppercase">
                        TRIAL
                      </span>
                    ) : (
                      <span className="text-sm select-none" style={{ color: "#9CA3AF" }}>🔒</span>
                    )
                  )}
                  {item.isAi && isAccessible && (
                    <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-accent text-primary font-black tracking-widest animate-pulse shadow-sm">
                      AI
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        {/* FOOTER BUTTONS & PREMIUM UPGRADE */}
        <div className="p-4 shrink-0 space-y-3 bg-primary/40 border-t border-accent/10 glass">
          {!userProfile.isPremium && (
            <div className="p-4 bg-secondary border-2 border-accent/40 rounded-[1.5rem] text-white flex flex-col justify-between relative overflow-hidden group shadow-2xl glass">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-accent animate-float" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">Upgrade Pro</span>
                </div>
              </div>
              <button 
                onClick={() => handleNav("premium")}
                className="w-full py-2.5 bg-accent hover:brightness-110 text-primary font-black rounded-xl text-[10px] uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg shadow-accent/20 text-center border border-accent/50"
              >
                Akses Semua
              </button>
            </div>
          )}
          
          <button
            onClick={onLogout}
            className="w-full px-4 py-3 rounded-xl border border-white/5 text-white/25 hover:text-ruby hover:bg-ruby/5 hover:border-ruby/20 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer group"
          >
            <LogOut className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            Logout
          </button>
        </div>
      </aside>

      {/* MOBILE BACKDROP */}
      {isOpenMobile && (
        <div 
          onClick={() => setIsOpenMobile(false)}
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* POPUP MODAL UPGRADE */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4">
          <div className="bg-primary border-2 border-accent rounded-[2.5rem] max-w-md w-full p-8 text-center shadow-2xl relative overflow-hidden glass-dark">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent/30 animate-pulse">
              <span className="text-4xl">👑</span>
            </div>

            <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide">Akses Premium Terkunci</h3>
            <p className="text-sm text-white/60 mb-8 leading-relaxed font-semibold">
              Masa trial 7 hari gratis Anda telah berakhir. Silakan lakukan upgrade ke Premium untuk terus mengakses ribuan latihan interaktif, AI Tutor Chat, game edukasi, dan statistik kemajuan lengkap Anda!
            </p>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowUpgradeModal(false);
                  handleNav("premium");
                }}
                className="w-full py-4 bg-accent hover:brightness-110 text-primary font-black text-xs tracking-widest uppercase rounded-2xl shadow-xl active:scale-95 transition-all cursor-pointer border border-accent/50"
              >
                Upgrade Sekarang ✨
              </button>
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="w-full py-3 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white font-bold text-xs tracking-widest uppercase rounded-2xl transition-all cursor-pointer border border-white/5"
              >
                Nanti Saja
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
