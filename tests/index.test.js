"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('world-currencies basic API', () => {
    test('getAllCurrencies returns an array with at least one entry', () => {
        const all = (0, index_1.getAllCurrencies)();
        expect(Array.isArray(all)).toBe(true);
        expect(all.length).toBeGreaterThan(0);
    });
    test('getCurrencyByCode finds USD (case-insensitive)', () => {
        const usd = (0, index_1.getCurrencyByCode)('USD');
        expect(usd).not.toBeNull();
        expect(usd && usd.code.toUpperCase()).toBe('USD');
    });
    test('getCurrencyByCountry finds Pakistan (case-insensitive)', () => {
        const p1 = (0, index_1.getCurrencyByCountry)('Pakistan');
        const p2 = (0, index_1.getCurrencyByCountry)('pakistan');
        expect(p1).not.toBeNull();
        expect(p2).not.toBeNull();
        expect(p1 && p1.country).toMatch(/Pakistan/i);
    });
    test('invalid inputs return null', () => {
        expect((0, index_1.getCurrencyByCode)('')).toBeNull();
        expect((0, index_1.getCurrencyByCountry)('')).toBeNull();
        // @ts-ignore - intentionally passing undefined
        expect((0, index_1.getCurrencyByCode)(undefined)).toBeNull();
    });
});
