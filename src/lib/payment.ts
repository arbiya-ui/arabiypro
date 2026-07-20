/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PremiumToken } from "../types";

/**
 * Generates a random 8-digit token in format AA-XXXX-XXXX
 */
export function generatePremiumToken(userName: string, pkg: "monthly" | "annual"): PremiumToken {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // No I, O, 1, 0 for clarity
  let part1 = "";
  let part2 = "";
  
  for (let i = 0; i < 4; i++) {
    part1 += chars.charAt(Math.floor(Math.random() * chars.length));
    part2 += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  const tokenCode = `AA-${part1}-${part2}`;
  const durationDays = pkg === "monthly" ? 30 : 365;
  
  return {
    tokenCode,
    userName,
    package: pkg,
    durationDays,
    status: "active"
  };
}

/**
 * Checks if a token is valid in the storage
 */
export function validateToken(tokenCode: string): { valid: boolean; error?: string; token?: PremiumToken } {
  const tokensJson = localStorage.getItem("premiumTokens");
  if (!tokensJson) return { valid: false, error: "not_found" };
  
  const tokens: PremiumToken[] = JSON.parse(tokensJson);
  const token = tokens.find(t => t.tokenCode === tokenCode);
  
  if (!token) return { valid: false, error: "not_found" };
  if (token.status === "used") return { valid: false, error: "already_used" };
  if (token.status === "expired") return { valid: false, error: "expired" };
  
  return { valid: true, token };
}

/**
 * Formats a date to a readable Indonesian string
 */
export function formatIndoDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
