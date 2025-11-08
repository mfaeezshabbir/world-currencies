import { getAllCurrencies, getCurrencyByCode, getCurrencyByCountry } from '../src/index';

describe('world-currencies basic API', () => {
  test('getAllCurrencies returns an array with at least one entry', () => {
    const all = getAllCurrencies();
    expect(Array.isArray(all)).toBe(true);
    expect(all.length).toBeGreaterThan(0);
  });

  test('getCurrencyByCode finds USD (case-insensitive)', () => {
    const usd = getCurrencyByCode('USD');
    expect(usd).not.toBeNull();
    expect(usd && usd.code.toUpperCase()).toBe('USD');
  });

  test('getCurrencyByCountry finds Pakistan (case-insensitive)', () => {
    const p1 = getCurrencyByCountry('Pakistan');
    const p2 = getCurrencyByCountry('pakistan');
    expect(p1).not.toBeNull();
    expect(p2).not.toBeNull();
    expect(p1 && p1.country).toMatch(/Pakistan/i);
  });

  test('invalid inputs return null', () => {
    expect(getCurrencyByCode('')).toBeNull();
    expect(getCurrencyByCountry('')).toBeNull();
    // @ts-ignore - intentionally passing undefined
    expect(getCurrencyByCode(undefined)).toBeNull();
  });
});
