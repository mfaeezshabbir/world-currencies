# 🌍 @mfaeezshabbir/world-currencies

[![npm version](https://img.shields.io/npm/v/@mfaeezshabbir/world-currencies.svg?style=flat&color=blue)](https://www.npmjs.com/package/@mfaeezshabbir/world-currencies)
[![license](https://img.shields.io/npm/l/@mfaeezshabbir/world-currencies.svg?style=flat&color=green)](https://github.com/mfaeezshabbir/world-currencies/blob/main/LICENSE)
[![downloads](https://img.shields.io/npm/dt/@mfaeezshabbir/world-currencies.svg?style=flat&color=orange)](https://www.npmjs.com/package/@mfaeezshabbir/world-currencies)
[![GitHub stars](https://img.shields.io/github/stars/mfaeezshabbir/world-currencies.svg?style=flat&color=yellow)](https://github.com/mfaeezshabbir/world-currencies/stargazers)

A lightweight and accurate dataset of **world currencies**, including **country**, **currency name**, **symbol**, and **ISO 4217 code**.  
Perfect for **global apps**, **fintech projects**, and **currency converters**.

---

## 📦 Installation

Install directly from npm:
```bash
npm install @mfaeezshabbir/world-currencies
````

or with yarn:

```bash
yarn add @mfaeezshabbir/world-currencies
```

If your npm is misconfigured to use GitHub Packages, you can force the install from npmjs.org:

```bash
npm install @mfaeezshabbir/world-currencies --registry=https://registry.npmjs.org
```

---

## 🚀 Usage

You can import this package in TypeScript or modern bundlers. The package is TypeScript-first and ships `.d.ts` declarations.

ESM / TypeScript:

```ts
import { getAllCurrencies, getCurrencyByCountry, getCurrencyByCode } from "@mfaeezshabbir/world-currencies";

console.log(getAllCurrencies());
console.log(getCurrencyByCountry("Pakistan"));
console.log(getCurrencyByCode("USD"));
```

CommonJS consumers can still import via `require` (Node will resolve `dist/index.js`):

```js
const { getAllCurrencies } = require("@mfaeezshabbir/world-currencies");
console.log(getAllCurrencies());
```

---

### TypeScript

This package ships TypeScript declarations. You can import named exports in TypeScript or modern bundlers:

```ts
import { getAllCurrencies, getCurrencyByCode } from "@mfaeezshabbir/world-currencies";

const all = getAllCurrencies();
```

The project also includes a `tsconfig.json` and a `src/` entry so you can run `npm run build` to generate `dist/` artifacts and `.d.ts` files.


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

## ⚙️ Registry Tip

If you ever see a 404 when installing, make sure your `.npmrc` file doesn’t contain:

```
@mfaeezshabbir:registry=https://npm.pkg.github.com/
```

If it does, remove that line.
This package is published on **npmjs.org**, not GitHub Packages.

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