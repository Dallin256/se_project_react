import Api from "./API.js";
const apiKey = "abfc814a879d2e570f686dd7dd0fd6df";
const defaultCoord = {
  lon: -80.3871,
  lat: 33.8884,
};
const JSONUrl = "http://localhost:3001/items";

const api = new Api(apiKey, defaultCoord, JSONUrl);

function fetchCurrentTemp() {
  return api.getTemp();
}

function fetchCurrentFeel() {
  return api.getFeel();
}

function fetchCurrentLoc() {
  return api.getLoc();
}

async function fetchCards() {
  const resp = await fetch(JSONUrl);
  if (!resp.ok) {
    console.error("Card Fetching Error!!!!!");
  }
  return resp.json();
}

export { fetchCards, fetchCurrentFeel, fetchCurrentLoc, fetchCurrentTemp, api };
