// src/index.ts
// TypeScript entrypoint for world-currencies dataset

import rawCurrencies from "../currencies.json";

export interface Currency {
  country: string;
  currency: string;
  symbol: string;
  code: string;
}

const currencies = rawCurrencies as Currency[];

/**
 * Returns the full list of world currencies.
 */
export function getAllCurrencies(): Currency[] {
  return currencies;
}

/**
 * Finds currency data by country name (case-insensitive).
 */
export function getCurrencyByCountry(country?: string): Currency | null {
  if (!country) return null;
  const found = currencies.find(
    (c) => c.country.toLowerCase() === country.toLowerCase()
  );
  return found || null;
}

/**
 * Finds currency data by ISO code (case-insensitive).
 */
export function getCurrencyByCode(code?: string): Currency | null {
  if (!code) return null;
  const found = currencies.find(
    (c) => (c.code || "").toLowerCase() === code.toLowerCase()
  );
  return found || null;
}
