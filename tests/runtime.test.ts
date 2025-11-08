// tests/runtime.test.ts
// Verify the compiled runtime exports (dist) and the compatibility wrapper work

describe('runtime exports (compiled)', () => {
  test('require dist/index.js and call functions', () => {
    const pkg = require('../dist/index.js');
    expect(pkg).toBeDefined();
    const { getAllCurrencies, getCurrencyByCode, getCurrencyByCountry } = pkg;
    expect(typeof getAllCurrencies).toBe('function');
    const all = getAllCurrencies();
    expect(Array.isArray(all)).toBe(true);
    const usd = getCurrencyByCode('USD');
    expect(usd).not.toBeNull();
    const pak = getCurrencyByCountry('Pakistan');
    expect(pak).not.toBeNull();
  });

  test('require root index.js (compat wrapper) and call functions', () => {
    const wrapper = require('../index.js');
    expect(wrapper).toBeDefined();
    const { getAllCurrencies } = wrapper;
    expect(typeof getAllCurrencies).toBe('function');
    const all = getAllCurrencies();
    expect(all.length).toBeGreaterThan(0);
  });
});
