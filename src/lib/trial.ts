/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserProfile } from "../types";
import { supabase, isSupabaseConfigured } from "./supabase";

export const TRIAL_DURATION_DAYS = 7;

/**
 * Fetches user profile from Supabase or initializes it if not found
 */
export async function getSupabaseProfile(userId: string): Promise<Partial<UserProfile> | null> {
  if (!isSupabaseConfigured) return null;

  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error && error.code === 'PGRST116') {
      // User profile not found, create one
      const now = new Date().toISOString();
      const newProfile = {
        id: userId,
        trial_start_date: now,
        trial_status: 'active',
        is_premium: false
      };

      const { data: createdData, error: createError } = await supabase
        .from('user_profiles')
        .insert(newProfile)
        .select()
        .single();

      if (createError) throw createError;
      
      return {
        trialStartDate: createdData.trial_start_date,
        trialStatus: createdData.trial_status,
        isPremium: createdData.is_premium,
        premiumExpires: createdData.premium_expires_at
      };
    }

    if (error) throw error;

    return {
      trialStartDate: data.trial_start_date,
      trialStatus: data.trial_status,
      isPremium: data.is_premium,
      premiumExpires: data.premium_expires_at
    };
  } catch (err) {
    console.error('Error in getSupabaseProfile:', err);
    return null;
  }
}

/**
 * Updates premium status in Supabase
 */
export async function updateSupabasePremium(userId: string, isPremium: boolean, expiresAt?: string): Promise<boolean> {
  if (!isSupabaseConfigured) return false;

  try {
    const { error } = await supabase
      .from('user_profiles')
      .update({
        is_premium: isPremium,
        premium_expires_at: expiresAt || null,
        trial_status: isPremium ? 'none' : undefined
      })
      .eq('id', userId);

    if (error) throw error;
    return true;
  } catch (err) {
    console.error('Error updating premium in Supabase:', err);
    return false;
  }
}

/**
 * Syncs user profile data to Supabase
 */
export async function syncUserProfileToSupabase(userId: string, profile: Partial<UserProfile>): Promise<boolean> {
  if (!isSupabaseConfigured) return false;

  try {
    const { error } = await supabase
      .from('user_profiles')
      .update({
        xp: profile.xp,
        level: profile.level,
        streak: profile.streak,
        coins: profile.coins,
        completed_lessons: profile.completedLessons,
        is_premium: profile.isPremium,
        premium_expires_at: profile.premiumExpires,
        trial_status: profile.trialStatus,
        trial_start_date: profile.trialStartDate
      })
      .eq('id', userId);

    if (error) throw error;
    return true;
  } catch (err) {
    console.error('Error syncing profile to Supabase:', err);
    return false;
  }
}

/**
 * Checks and updates trial status based on the start date
 */
export function checkTrialStatus(profile: UserProfile): Partial<UserProfile> {
  // If already premium or owner, trial doesn't apply
  if (profile.isPremium || profile.isOwner) {
    return { trialStatus: "none", trialDaysLeft: 0 };
  }

  // Priority: profile.trialStartDate (might be from Supabase) then localStorage
  let startDateStr = profile.trialStartDate || localStorage.getItem("trialStartDate");
  
  // If no trial started yet, start it now
  if (!startDateStr) {
    const now = new Date().toISOString();
    // Only set localStorage if guest
    if (!profile.id) {
      localStorage.setItem("trialStartDate", now);
      localStorage.setItem("trialStatus", "active");
    }
    return {
      trialStartDate: now,
      trialStatus: "active",
      trialDaysLeft: TRIAL_DURATION_DAYS
    };
  }

  const startDate = new Date(startDateStr);
  const now = new Date();
  
  // Calculate difference in days
  const diffTime = now.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  const daysLeft = Math.max(0, TRIAL_DURATION_DAYS - diffDays);
  const status = daysLeft > 0 ? "active" : "expired";
  
  // Only update localStorage if we are in guest mode
  if (!profile.id) {
    localStorage.setItem("trialStatus", status);
  }
  
  return {
    trialStartDate: startDateStr,
    trialStatus: status as "active" | "expired",
    trialDaysLeft: daysLeft
  };
}

/**
 * Resets the trial for testing purposes
 */
export function resetTrial(): Partial<UserProfile> {
  const now = new Date().toISOString();
  localStorage.setItem("trialStartDate", now);
  localStorage.setItem("trialStatus", "active");
  return {
    trialStartDate: now,
    trialStatus: "active",
    trialDaysLeft: TRIAL_DURATION_DAYS
  };
}

/**
 * Simulates an expired trial
 */
export function simulateExpiredTrial(): Partial<UserProfile> {
  const eightDaysAgo = new Date();
  eightDaysAgo.setDate(eightDaysAgo.getDate() - 8);
  const startDateStr = eightDaysAgo.toISOString();
  
  localStorage.setItem("trialStartDate", startDateStr);
  localStorage.setItem("trialStatus", "expired");
  
  return {
    trialStartDate: startDateStr,
    trialStatus: "expired",
    trialDaysLeft: 0
  };
}
