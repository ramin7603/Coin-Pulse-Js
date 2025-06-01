
---

# Coin-Pulse-Js

A simple Node.js script that fetches the latest cryptocurrency prices from the CoinGecko API and saves the data to a JSON file for frontend use.

---

## Features

* Fetches real-time prices for popular cryptocurrencies including Bitcoin, Ethereum, Dogecoin, and more.
* Saves daily price data with timestamp into a JSON file (`crypto_table_data.json`).
* Easy to extend with more cryptocurrencies.
* Uses `axios` for HTTP requests and native Node.js modules for file handling.

---

## Technologies Used

* JavaScript (Node.js)
* Axios (HTTP client)
* File System (fs)
* Path module

---

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed.

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/Coin-Pulse-Js.git
   cd Coin-Pulse-Js
   ```

2. Install dependencies:

   ```bash
   npm install axios
   ```

---

## Usage

Run the script to fetch the latest cryptocurrency prices and save them to `crypto_table_data.json`:

```bash
node crypto-fetcher.js
```

The data will be saved in the same directory with the current date as the key.

---

## How it Works

* The script uses the CoinGecko API to get current prices of predefined cryptocurrencies.
* The response data is transformed into an array of objects with keys: `name`, `symbol`, `price_usd`, and `last_updated`.
* It reads any existing JSON data from the output file and appends the new data under today's date.
* The updated JSON file is saved back to disk.

---

## Customize

* You can add or remove cryptocurrencies by editing the `SYMBOLS` object in `crypto-fetcher.js`.
* Change the output filename by passing a different filename to the `saveForFrontend` function.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

If you have any questions or suggestions, feel free to open an issue or contact me.

---

