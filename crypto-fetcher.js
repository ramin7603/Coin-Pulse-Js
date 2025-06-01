const axios = require("axios");
const fs = require("fs");
const path = require("path");

const SYMBOLS = {
  bitcoin: "BTC",
  ethereum: "ETH",
  dogecoin: "DOGE",
  cardano: "ADA",
  ripple: "XRP",
  litecoin: "LTC",
  polkadot: "DOT",
};

const fetchCryptoPrices = async (cryptos) => {
  const url = "https://api.coingecko.com/api/v3/simple/price";
  try {
    const response = await axios.get(url, {
      params: {
        ids: cryptos.join(","),
        vs_currencies: "usd",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error for receive data :", error.message);
    return {};
  }
};

const saveForFrontend = (data, filename = "crypto_table_data.json") => {
  const today = new Date().toISOString().split("T")[0];

  const rows = Object.entries(data).map(([crypto, prices]) => ({
    name: crypto.charAt(0).toUpperCase() + crypto.slice(1),
    symbol: SYMBOLS[crypto] || crypto.slice(0, 3).toUpperCase(),
    price_usd: prices.usd || null,
    last_updated: new Date().toISOString(),
  }));

  let allData = {};
  const filePath = path.resolve(__dirname, filename);

  if (fs.existsSync(filePath)) {
    const previous = fs.readFileSync(filePath, "utf8");
    allData = JSON.parse(previous);
  }

  allData[today] = rows;

  fs.writeFileSync(filePath, JSON.stringify(allData, null, 2), "utf8");
  console.log(
    `The data for ${today} has been successfully saved to the file "${filename}" 😎.`
  );
};

(async () => {
  const cryptos = Object.keys(SYMBOLS);
  console.log("cryptos", cryptos);
  const prices = await fetchCryptoPrices(cryptos);
  if (Object.keys(prices).length > 0) {
    saveForFrontend(prices);
  }
})();
