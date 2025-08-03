# 💰 Cash Register App

A simple and interactive web-based cash register application that calculates and displays the change due for a transaction. Built using HTML, CSS, and JavaScript. Ideal for learning DOM manipulation and cash logic simulation.

## 🚀 Features

- 🧾 Takes customer's cash input

- 💵 Calculates exact change

- 🔁 Handles different denominations: PENNY to ONE HUNDRED

- 📦 Updates cash-in-drawer after every transaction

- 🚫 Handles insufficient funds & exact payments gracefully

- 🎨 Responsive and styled with a custom retro aesthetic

## 🧠 How It Works

1. The customer enters their cash amount.

2. The app checks against a set price ($3.26).

3. Change is calculated based on available denominations.

4. Displays:

   - ✅ Status: OPEN with the change breakdown

   - 🧾 Status: CLOSED when drawer is empty after transaction

   - ❌ Status: INSUFFICIENT_FUNDS if the drawer can't return enough change

## 📁 Project Structure

```sh
cash-register/
├── index.html             # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css     # Stylesheet
│   └── js/
│       └── script.js      # JavaScript logic
```

## 🛠 Tech Stack

- HTML5 🧱

- CSS3 🎨

- Vanilla JavaScript ⚙️

## 🔄 Future Improvements

- 🧪 Unit testing for logic validation

- 📱 Mobile layout optimizations

- 💾 Persistent cash drawer using localStorage

- 🌐 Currency and language localization

## 🌟 Acknowledgement

- Cash accumulation icons created<a href="https://www.flaticon.com/free-icons/cash-accumulation" title="cash accumulation icons">by Zulkifly Suradin - Flaticon</a>
