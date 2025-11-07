// index.js
// world-currencies dataset by mfaeezshabbir

const currencies = require("./currencies.json");

/**
 * Returns the full list of world currencies.
 * @returns {Array} Array of currency objects { country, currency, symbol, code }
 */
function getAllCurrencies() {
  return currencies;
}

/**
 * Finds currency data by country name (case-insensitive).
 * @param {string} country
 * @returns {Object|null}
 */
function getCurrencyByCountry(country) {
  if (!country) return null;
  return (
    currencies.find((c) => c.country.toLowerCase() === country.toLowerCase()) ||
    null
  );
}

/**
 * Finds currency data by ISO code (case-insensitive).
 * @param {string} code
 * @returns {Object|null}
 */
function getCurrencyByCode(code) {
  if (!code) return null;
  return (
    currencies.find((c) => c.code.toLowerCase() === code.toLowerCase()) || null
  );
}

module.exports = {
  getAllCurrencies,
  getCurrencyByCountry,
  getCurrencyByCode,
};
