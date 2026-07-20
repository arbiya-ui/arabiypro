/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserProfile } from "../types";

export const TRIAL_DURATION_DAYS = 7;

/**
 * Checks and updates trial status based on the start date
 */
export function checkTrialStatus(profile: UserProfile): Partial<UserProfile> {
  // If already premium or owner, trial doesn't apply
  if (profile.isPremium || profile.isOwner) {
    return { trialStatus: "none", trialDaysLeft: 0 };
  }

  let startDateStr = localStorage.getItem("trialStartDate") || profile.trialStartDate;
  
  // If no trial started yet, start it now
  if (!startDateStr) {
    const now = new Date().toISOString();
    localStorage.setItem("trialStartDate", now);
    localStorage.setItem("trialStatus", "active");
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
  
  localStorage.setItem("trialStatus", status);
  
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
