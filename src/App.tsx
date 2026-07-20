/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import { Moon, Sun, Menu, Flame, LayoutDashboard, BookOpen, Dumbbell, MessageSquare, Gamepad2, User, Smartphone, Monitor } from "lucide-react";
import { UserProfile, UserLevelType } from "./types";
import { CURRICULUM_DATA } from "./data/curriculum";
import { checkTrialStatus } from "./lib/trial";

// Lazy loaded UI subcomponents
const LandingPage = lazy(() => import("./components/LandingPage"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const LessonMap = lazy(() => import("./components/LessonMap.tsx"));
const LessonView = lazy(() => import("./components/LessonView"));
const PracticeHub = lazy(() => import("./components/PracticeHub"));
const AIChat = lazy(() => import("./components/AIChat"));
const GamesHub = lazy(() => import("./components/GamesHub"));
const Dictionary = lazy(() => import("./components/Dictionary"));
const Analytics = lazy(() => import("./components/Analytics"));
const ProfileSettings = lazy(() => import("./components/ProfileSettings"));
const AdminPanel = lazy(() => import("./components/AdminPanel"));
const PremiumUpgrade = lazy(() => import("./components/PremiumUpgrade"));
const Tajwid = lazy(() => import("./components/Tajwid"));
const Certificate = lazy(() => import("./components/Certificate"));

const PageLoader = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-background bg-geometric-dark gap-6">
    <div className="w-20 h-20 bg-accent/10 rounded-3xl border border-accent/30 flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(201,168,76,0.15)]">
      <div className="text-4xl">🕌</div>
    </div>
    <div className="text-2xl font-black text-white tracking-tight">
      Arabiy<span className="text-accent">Pro</span>
    </div>
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" />
    </div>
    <div className="text-[10px] font-black text-accent/40 uppercase tracking-[0.3em]">
      Menyiapkan Kurikulum...
    </div>
  </div>
);

// Navigation tabs literal enum definition
type AppTab = 
  | "landing" 
  | "dashboard" 
  | "learn" 
  | "practice" 
  | "conversation" 
  | "games" 
  | "dictionary" 
  | "progress" 
  | "profile" 
  | "premium"
  | "tajwid"
  | "certificate";

export default function App() {
  const [currentTab, setCurrentTab] = useState<AppTab>("landing");
  const [tabParams, setTabParams] = useState<any>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Default Dark mode as requested
  const [showAdmin, setShowAdmin] = useState(false);
  const [isMobileFirstView, setIsMobileFirstView] = useState<boolean>(true); // Default true for mobile first presentation

  // Core User Profile state using UserLevelType enum values
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "Sahabat",
    level: UserLevelType.MUBTADI,
    avatar: "avatar_1",
    xp: 0,
    coins: 10,
    streak: 1,
    lastActiveDate: new Date().toISOString(),
    badges: [],
    targetMinutes: 15,
    minutesLearned: 0,
    accuracy: 0,
    isPremium: false,
    masteredWordsCount: 0,
    trialStatus: "active",
    trialDaysLeft: 7
  });

  // Global Admin Access (Keyboard shortcut & Hash)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setShowAdmin(true);
      }
    };

    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setShowAdmin(true);
        // Clear hash to allow re-triggering if needed
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash
    handleHashChange();

    const handleNavigatePremium = () => {
      setCurrentTab("premium");
          };
    window.addEventListener('navigate-to-premium', handleNavigatePremium);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('navigate-to-premium', handleNavigatePremium);
    };
  }, []);

  // Global Owner Mode Logic
  useEffect(() => {
    const isOwner = localStorage.getItem("ownerMode") === "true";
    if (isOwner && !userProfile.isOwner) {
      const unlockAll = localStorage.getItem("owner_unlockAll") === "true";
      const bypassLock = localStorage.getItem("owner_bypassLock") === "true";
      const allPremium = localStorage.getItem("owner_allPremium") === "true";
      
      setUserProfile(prev => ({
        ...prev,
        isOwner: true,
        isPremium: allPremium ? true : prev.isPremium,
        isDevMode: unlockAll || bypassLock ? true : prev.isDevMode
      }));
    }
  }, [userProfile.isOwner]);

  // Completed Lessons list state
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // Mapping level IDs to UserLevelType enum helper
  const getLevelIdFromEnum = (lvlEnum: UserLevelType): string => {
    if (lvlEnum === UserLevelType.MUTAWASSIT) return "level_2";
    if (lvlEnum === UserLevelType.MUTAQADDIM) return "level_3";
    if (lvlEnum === UserLevelType.MAHIR) return "level_4";
    return "level_1";
  };

  // On initial mount, load from localStorage
  useEffect(() => {
    let finalProfile = { ...userProfile };
    const savedProfile = localStorage.getItem("arabiyPro_profile");
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        finalProfile = { ...finalProfile, ...parsed };
      } catch (e) {
        console.error("Error parsing user profile:", e);
      }
    }

    // Bidirectional sync for userName/Sapaan
    const savedUserName = localStorage.getItem("userName");
    if (savedUserName && savedUserName.trim()) {
      finalProfile.name = savedUserName;
    } else {
      localStorage.setItem("userName", finalProfile.name || "Sahabat");
    }

    const savedAvatar = localStorage.getItem("userAvatar");
    if (savedAvatar) {
      finalProfile.avatar = savedAvatar;
    }

    finalProfile = { ...finalProfile, ...checkTrialStatus(finalProfile) };

    // PREMIUM EXPIRY CHECK
    if (finalProfile.isPremium && finalProfile.premiumExpires) {
      const now = new Date();
      const expiry = new Date(finalProfile.premiumExpires);
      if (now > expiry) {
        finalProfile.isPremium = false;
        finalProfile.trialStatus = "expired"; // Re-lock content
        localStorage.setItem("premium_expired_notif", "true");
      }
    }

    setUserProfile(finalProfile);
    if (savedProfile || savedUserName) {
      // If a profile or username exists, bypass the landing page and start directly in the dashboard
      setCurrentTab("dashboard");
      window.history.replaceState({ tab: "dashboard", lessonId: null }, "");
    } else {
      window.history.replaceState({ tab: "landing", lessonId: null }, "");
    }

    const savedCompleted = localStorage.getItem("arabiyPro_completedLessons");
    if (savedCompleted) {
      try {
        setCompletedLessons(JSON.parse(savedCompleted));
      } catch (e) {
        console.error("Error parsing completed lessons:", e);
      }
    }
    
    const savedTheme = localStorage.getItem("arabiyPro_theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const nextTheme = !prev;
      if (nextTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem("arabiyPro_theme", "dark");
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("arabiyPro_theme", "light");
      }
      return nextTheme;
    });
  };

  // Save profile helper
  const saveProfileToStorage = (updated: UserProfile) => {
    setUserProfile(updated);
    localStorage.setItem("arabiyPro_profile", JSON.stringify(updated));
    if (updated.name && updated.name.trim()) {
      localStorage.setItem("userName", updated.name);
    }
  };

  // Profile modification callback
  const handleUpdateProfile = (updatedFields: Partial<UserProfile>) => {
    if (updatedFields.completedLessons !== undefined) {
      setCompletedLessons(updatedFields.completedLessons);
      localStorage.setItem("arabiyPro_completedLessons", JSON.stringify(updatedFields.completedLessons));
    }
    const updated = { ...userProfile, ...updatedFields };
    saveProfileToStorage(updated);
  };

  const handleUpdateXp = (amount: number) => {
    const updated = { ...userProfile, xp: userProfile.xp + amount };
    saveProfileToStorage(updated);
  };

  const handleUpdateCoins = (amount: number) => {
    const updated = { ...userProfile, coins: userProfile.coins + amount };
    saveProfileToStorage(updated);
  };

  // Complete a lesson logic
  const handleCompleteLesson = (lessonId: string, xpGained: number, coinsGained: number, accuracyRatio: number) => {
    const newCompleted = [...completedLessons];
    if (!newCompleted.includes(lessonId)) {
      newCompleted.push(lessonId);
    }
    
    setCompletedLessons(newCompleted);
    localStorage.setItem("arabiyPro_completedLessons", JSON.stringify(newCompleted));

    // Update profile metrics
    const newXp = userProfile.xp + xpGained;
    const newCoins = userProfile.coins + coinsGained;
    
    // Average accuracy updates
    const currentCount = completedLessons.length || 1;
    const newAccuracy = Math.round(((userProfile.accuracy * (currentCount - 1)) + accuracyRatio) / currentCount);

    const updatedProfile: UserProfile = {
      ...userProfile,
      xp: newXp,
      coins: newCoins,
      accuracy: newAccuracy || 90,
      minutesLearned: userProfile.minutesLearned + 10, // Assume 10 min per lesson
    };

    // Auto level upgrade logic if levels completed
    const currentLevelId = getLevelIdFromEnum(userProfile.level);
    const currentLevelLessons = CURRICULUM_DATA.find(l => l.id === currentLevelId)?.lessons || [];
    const isLevelFinished = currentLevelLessons.every(l => newCompleted.includes(l.id));
    
    if (isLevelFinished) {
      if (userProfile.level === UserLevelType.MUBTADI) updatedProfile.level = UserLevelType.MUTAWASSIT;
      else if (userProfile.level === UserLevelType.MUTAWASSIT) updatedProfile.level = UserLevelType.MUTAQADDIM;
      else if (userProfile.level === UserLevelType.MUTAQADDIM && userProfile.isPremium) updatedProfile.level = UserLevelType.MAHIR;
    }

    saveProfileToStorage(updatedProfile);
    setActiveLessonId(null);
    setCurrentTab("learn"); // Go back to lessons timeline
      };

  const handleStartLearning = (username: string) => {
    const savedName = localStorage.getItem("userName");
    const finalName = savedName && savedName.trim() ? savedName : (username && username !== "Siswa Arabiy" ? username : "Sahabat");
    const initialProfile: UserProfile = {
      name: finalName,
      level: UserLevelType.MUBTADI,
      avatar: "avatar_1",
      xp: 25, // Initial welcome bonus
      coins: 10,
      streak: 1,
      lastActiveDate: new Date().toISOString(),
      badges: [],
      targetMinutes: 15,
      minutesLearned: 5,
      accuracy: 100,
      isPremium: false,
      masteredWordsCount: 0
    };
    saveProfileToStorage(initialProfile);
    setCurrentTab("dashboard");
      };

  const handleLogout = () => {
    if (confirm("Apakah Anda yakin ingin menyetel ulang kemajuan belajar Anda?")) {
      localStorage.clear();
      localStorage.setItem("userName", "Sahabat");
      setUserProfile({
        name: "Sahabat",
        level: UserLevelType.MUBTADI,
        avatar: "avatar_1",
        xp: 0,
        coins: 10,
        streak: 1,
        lastActiveDate: new Date().toISOString(),
        badges: [],
        targetMinutes: 15,
        minutesLearned: 0,
        accuracy: 0,
        isPremium: false,
        masteredWordsCount: 0
      });
      setCompletedLessons([]);
      setCurrentTab("landing");
          }
  };

  const handleNavigate = (tabId: AppTab, params?: any) => {
    setActiveLessonId(null);
    setTabParams(params || null);
    setCurrentTab(tabId);
      };

  

  // TAMBAHAN — SCROLL TO TOP
  useEffect(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  }, [currentTab, activeLessonId]);

  // Locate active lesson data
  const currentActiveLesson = CURRICULUM_DATA
    .flatMap(lvl => lvl.lessons)
    .find(l => l.id === activeLessonId);

  // RENDER ELEMENT SWITCHER BASED ON TAB
  const renderContent = () => {
    // If inside a lesson, display the focused full player
    if (activeLessonId && currentActiveLesson) {
      return (
        <LessonView
          lesson={currentActiveLesson}
          userProfile={userProfile}
          onBack={() => {
            setActiveLessonId(null);
                      }}
          onCompleteLesson={handleCompleteLesson}
        />
      );
    }

    switch (currentTab) {
      case "dashboard":
        return (
          <Dashboard 
            userProfile={userProfile} 
            completedLessons={completedLessons}
            onNavigate={handleNavigate}
            onUpdateProfile={saveProfileToStorage}
          />
        );
      case "learn":
        return (
          <LessonMap
            userProfile={userProfile}
            completedLessons={completedLessons}
            onSelectLesson={(lessonId) => {
              setActiveLessonId(lessonId);
                          }}
            onBack={() => {
              setCurrentTab('dashboard');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
          />
        );
      case "practice":
        return (
          <PracticeHub
            userProfile={userProfile}
            onUpdateCoins={handleUpdateCoins}
            onUpdateXp={handleUpdateXp}
            onNavigate={handleNavigate}
            initialSubTab={tabParams?.subTab}
          />
        );
      case "conversation":
        return (
          <AIChat
            userProfile={userProfile}
            onUpdateXp={handleUpdateXp}
            initialScenarioId={tabParams?.scenarioId}
            onNavigate={handleNavigate}
          />
        );
      case "games":
        return (
          <GamesHub
            userProfile={userProfile}
            onUpdateXp={handleUpdateXp}
            onUpdateCoins={handleUpdateCoins}
            initialGame={tabParams?.game}
            onNavigate={handleNavigate}
          />
        );
      case "tajwid":
        return (
          <Tajwid
            onBack={() => setCurrentTab("dashboard")}
          />
        );
      case "certificate":
        return (
          <Certificate
            userProfile={userProfile}
            completedLessons={completedLessons}
            onBack={() => setCurrentTab("dashboard")}
          />
        );
      case "dictionary":
        return <Dictionary />;
      case "progress":
        return <Analytics userProfile={userProfile} onNavigate={handleNavigate} />;
      case "profile":
        return (
          <ProfileSettings
            userProfile={userProfile}
            onUpdateProfile={handleUpdateProfile}
          />
        );
      case "premium":
        return (
          <PremiumUpgrade
            userProfile={userProfile}
            isAlreadyPremium={userProfile.isPremium}
            onSuccessUpgrade={() => handleUpdateProfile({ isPremium: true })}
          />
        );
      default:
        return (
          <Dashboard 
            userProfile={userProfile} 
            completedLessons={completedLessons}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  // FULL VIEW IMMERSIVE RENDERING FOR LANDING
  if (currentTab === "landing") {
    return (
      <Suspense fallback={<PageLoader />}>
        <LandingPage onEnterApp={() => handleStartLearning(localStorage.getItem("userName") || "Sahabat")} />
      </Suspense>
    );
  }

  const isPremiumActive = userProfile.isPremium || localStorage.getItem('premiumStatus') === 'active';
  const ownerMode = localStorage.getItem('ownerMode') === 'true';
  const trialStart = localStorage.getItem('trialStartDate');
  let trialDaysLeft = 0;
  if (trialStart) {
    const start = new Date(trialStart);
    const now = new Date();
    const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    trialDaysLeft = Math.max(0, 7 - diff);
  }
  const trialActive = trialDaysLeft > 0;

  const bottomNavItems = [
    { id: "dashboard", label: "Beranda", icon: LayoutDashboard },
    { id: "learn", label: "Belajar", icon: BookOpen },
    { id: "conversation", label: "Tanya AI", icon: MessageSquare, isAi: true },
    { id: "practice", label: "Latihan", icon: Dumbbell },
    { id: "games", label: "Games", icon: Gamepad2 }
  ];

  const handleBottomTabClick = (tabId: string) => {
    const isPremiumTab = ["practice", "conversation", "games"].includes(tabId);
    const isAccessible = !isPremiumTab || ownerMode || isPremiumActive || trialActive;
    if (!isAccessible) {
      setCurrentTab("premium");
    } else {
      handleNavigate(tabId as AppTab);
    }
  };

  return (
    <Suspense fallback={<PageLoader />}>
      {isMobileFirstView ? (
        /* ==================== MOBILE-FIRST VIEW WRAPPER ==================== */
        <div className="min-h-[100dvh] bg-background text-app-text-main font-sans antialiased flex flex-col md:flex-row items-start md:items-center justify-center p-0 md:p-6 relative overflow-hidden bg-geometric-dark">
          
          {/* Ambient Decorative Backdrops (Desktop only) */}
          <div className="hidden md:block absolute -top-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="hidden md:block absolute -bottom-40 -right-40 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Islamic Geometric Decorative Art (Desktop only) */}
          <div className="hidden lg:flex flex-col max-w-xs text-left mr-8 shrink-0 z-10 select-none">
            <div className="w-16 h-16 bg-accent/10 rounded-3xl border border-accent/20 flex items-center justify-center text-3xl mb-4 shadow-xl">
              🕌
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight uppercase">
              Arabiy<span className="text-accent">Pro</span>
            </h1>
            <p className="text-xs text-accent/40 font-black tracking-widest uppercase mt-1 mb-4">
              Kuasai Bahasa Al-Qur'an
            </p>
            <div className="p-4 glass-dark rounded-2xl space-y-3 shadow-2xl">
              <span className="text-[10px] font-black text-accent tracking-[0.2em] uppercase block">Tampilan Ponsel Aktif</span>
              <p className="text-xs text-white/50 leading-relaxed">
                Anda sedang melihat versi <strong>Mobile First</strong>. Desain ini dioptimalkan khusus untuk kenyamanan belajar mandiri yang terfokus, persis seperti aplikasi ponsel premium.
              </p>
              <button
                onClick={() => setIsMobileFirstView(false)}
                className="w-full py-2 bg-accent/10 hover:bg-accent border border-accent/30 hover:border-accent text-accent hover:text-white rounded-xl text-[10px] font-black tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Monitor className="w-3.5 h-3.5" />
                Mode Layar Penuh
              </button>
            </div>
          </div>

          {/* Smartphone Frame Container */}
          <div className="w-full h-[100dvh] md:h-[840px] md:max-h-[95vh] md:w-[420px] md:border-[12px] md:border-[#1e1e2e] md:rounded-[3.5rem] md:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9),0_0_0_2px_rgba(201,168,76,0.3)] flex flex-col relative overflow-hidden bg-app-background md:ring-1 md:ring-white/10 shrink-0 z-10 transition-all duration-500 ease-in-out shadow-accent/5">
            
            {/* Simulated Speaker Notch (Desktop only) */}
            <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-[#1e1e2e] rounded-b-3xl z-[100] items-center justify-center shadow-lg border-x border-b border-white/5">
              <div className="w-10 h-1 bg-zinc-800 rounded-full" />
              <div className="w-2 h-2 bg-zinc-900 rounded-full border border-white/5 absolute right-4" />
            </div>

            {/* APP HEADER */}
            <header className="flex items-center justify-between px-4 h-14 !bg-[#1A1A2E] text-white shrink-0 z-[60] border-b border-white/20 relative shadow-2xl">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsOpenMobile(true)}
                  className="p-1 -ml-1 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
                >
                  <Menu className="w-6 h-6 text-white" />
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🕌</span>
                  <span className="font-black text-base tracking-tight text-white">Arabiy<span className="text-accent font-black">Pro</span></span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full border border-white/30">
                  <Flame className="w-3.5 h-3.5 text-ruby animate-pulse" />
                  <span className="text-xs font-bold text-white">{userProfile.streak}</span>
                </div>
                <button
                  onClick={toggleTheme}
                  className="p-1.5 rounded-lg bg-white/20 border border-white/30 text-white hover:text-accent transition-all cursor-pointer"
                  title="Ganti Tema"
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </header>

            {/* SCROLLABLE MAIN BODY CONTAINER */}
            <main className="flex-1 overflow-y-auto relative min-w-0 pb-24 pt-1 bg-geometric-dark">
              <div className="p-3 sm:p-4">
                {renderContent()}
              </div>
            </main>

            {/* MOBILE BOTTOM NAVIGATION BAR */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-primary/90 backdrop-blur-xl border-t border-white/10 flex items-center justify-around px-2 z-40 pb-safe shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
              {bottomNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleBottomTabClick(item.id)}
                    className={`flex flex-col items-center justify-center flex-1 h-full py-1 relative transition-all duration-300 cursor-pointer ${
                      isActive ? "text-accent" : "text-white/40 hover:text-white"
                    }`}
                  >
                    <div className={`p-1.5 rounded-xl transition-all duration-300 ${
                      isActive ? "bg-accent/20 scale-110 text-accent shadow-[0_0_15px_rgba(201,168,76,0.2)]" : ""
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[8px] font-black mt-1 tracking-widest uppercase ${isActive ? "opacity-100" : "opacity-60"}`}>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-1 w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#C9A84C]" />
                    )}
                    {item.isAi && (
                      <span className="absolute top-1 right-2 text-[7px] px-1 bg-teal text-white font-black rounded-full scale-90 border border-white/10">
                        AI
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* SIDEBAR AS MODAL DRAWER INSIDE SMARTPHONE */}
            <Sidebar
              activeTab={currentTab}
              setActiveTab={(tab: any) => {
                handleNavigate(tab);
              }}
              userProfile={userProfile}
              isOpenMobile={isOpenMobile}
              setIsOpenMobile={setIsOpenMobile}
              onLogout={handleLogout}
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
              forceDrawer={false}
            />

          </div>

          {/* Quick Toggle Button on Desktop right bottom corner */}
          <div className="hidden md:flex fixed bottom-6 right-6 z-50">
            <button
              onClick={() => setIsMobileFirstView(false)}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-xs uppercase tracking-widest transition-all shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <Monitor className="w-4 h-4" />
              Tampilan Penuh
            </button>
          </div>

        </div>
      ) : (
        /* ==================== WIDESCREEN RESPONSIVE VIEW ==================== */
        <div id="app-root-shell" className="h-screen bg-app-background text-app-text-main flex flex-col md:flex-row font-sans relative antialiased overflow-hidden">
          
          {/* MOBILE HEADER FOR FALLBACK */}
          <header className="md:hidden flex items-center justify-between px-4 h-14 bg-app-primary text-white shrink-0 z-40 border-b border-white/10">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsOpenMobile(true)}
                className="p-1 -ml-1"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xl">🕌</span>
                <span className="font-bold text-lg tracking-tight">ArabiyPro</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                <span className="text-xs font-bold">{userProfile.streak}</span>
              </div>
            </div>
          </header>

          {/* SIDEBAR NAVIGATION COLUMN */}
          <Sidebar
            activeTab={currentTab}
            setActiveTab={(tab: any) => {
              handleNavigate(tab);
            }}
            userProfile={userProfile}
            isOpenMobile={isOpenMobile}
            setIsOpenMobile={setIsOpenMobile}
            onLogout={handleLogout}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />

          {/* RIGHT SIDE MAIN SCROLLABLE WRAPPER */}
          <main className="flex-1 overflow-y-auto h-full relative min-w-0">
            <div className="max-w-7xl mx-auto p-3 sm:p-6 md:p-8 relative">
              <div className="hidden md:flex absolute top-4 right-4 sm:top-6 sm:right-6 gap-2 z-50">
                <button
                  onClick={() => setIsMobileFirstView(true)}
                  className="flex items-center gap-1.5 p-2 px-3 rounded-xl bg-app-surface border border-app-border text-[#C9A84C] font-bold text-xs hover:bg-app-border transition-all shadow-sm cursor-pointer"
                  title="Ganti ke Tampilan Ponsel"
                >
                  <Smartphone className="w-4 h-4" />
                  Format Ponsel
                </button>
                <button
                  onClick={toggleTheme}
                  className="flex p-2 rounded-xl bg-app-surface border border-app-border text-app-text-main-muted hover:text-app-text-main hover:bg-app-border transition-all shadow-sm"
                  title="Toggle Theme"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
              {renderContent()}
            </div>
          </main>

        </div>
      )}

      {/* ADMIN PANEL - HIDDEN ACCESS */}
      {showAdmin && (
        <AdminPanel 
          onClose={() => setShowAdmin(false)} 
          userProfile={userProfile} 
          onUpdateProfile={handleUpdateProfile}
        />
      )}
    </Suspense>
  );
}
