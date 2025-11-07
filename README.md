# 🌍 world-currencies

[![npm version](https://img.shields.io/npm/v/world-currencies.svg?style=flat&color=blue)](https://www.npmjs.com/package/world-currencies)
[![license](https://img.shields.io/npm/l/world-currencies.svg?style=flat&color=green)](https://github.com/mfaeezshabbir/world-currencies/blob/main/LICENSE)
[![downloads](https://img.shields.io/npm/dt/world-currencies.svg?style=flat&color=orange)](https://www.npmjs.com/package/world-currencies)
[![GitHub stars](https://img.shields.io/github/stars/mfaeezshabbir/world-currencies.svg?style=flat&color=yellow)](https://github.com/mfaeezshabbir/world-currencies/stargazers)

A lightweight and accurate dataset of **world currencies**, including **country**, **currency name**, **symbol**, and **ISO 4217 code**.  
Perfect for **global apps**, **fintech projects**, and **currency converters**.

---

## 📦 Installation

```bash
npm install world-currencies
````

or using yarn

```bash
yarn add world-currencies
```

---

## 🚀 Usage

```js
const { getAllCurrencies, getCurrencyByCountry, getCurrencyByCode } = require("world-currencies");

// Get all currencies
console.log(getAllCurrencies());

// Get currency by country
console.log(getCurrencyByCountry("Pakistan"));
// → { country: "Pakistan", currency: "Pakistani rupee", symbol: "₨", code: "PKR" }

// Get currency by ISO code
console.log(getCurrencyByCode("USD"));
// → { country: "United States", currency: "United States dollar", symbol: "$", code: "USD" }
```

---

## 📚 Data Format

Each record in the dataset follows this structure:

```json
{
  "country": "Japan",
  "currency": "Japanese yen",
  "symbol": "¥",
  "code": "JPY"
}
```

---

## 🧩 Methods

| Method                          | Description                                          |
| ------------------------------- | ---------------------------------------------------- |
| `getAllCurrencies()`            | Returns the full list of currencies                  |
| `getCurrencyByCountry(country)` | Finds a currency by country name (case-insensitive)  |
| `getCurrencyByCode(code)`       | Finds a currency by ISO 4217 code (case-insensitive) |

---

## ⚖️ License

Licensed under the **MIT License**.

---

## 👨‍💻 Author

Built with ❤️ by [**mfaeezshabbir**](https://github.com/mfaeezshabbir)

---

## 🌟 Contribute

Have suggestions or want to improve data accuracy?
Open an issue or submit a pull request on [GitHub](https://github.com/mfaeezshabbir/world-currencies).

---

### ⭐ If you find this package helpful, please give it a star on GitHub!
