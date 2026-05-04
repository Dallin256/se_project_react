import Api from "./API.js";
import Auth from "./auth.js";
import APIWeather from "./APIWeather.js";
const apiKey = "abfc814a879d2e570f686dd7dd0fd6df";
const defaultCoord = {
  lon: -80.3871,
  lat: 33.8884,
};
const JSONUrl = "http://localhost:3001/";

const api = new Api(JSONUrl);
const auth = new Auth(JSONUrl);
const apiWeather = new APIWeather(apiKey, defaultCoord);

function fetchCurrentTemp() {
  return apiWeather.getTemp();
}

function fetchCurrentFeel() {
  return apiWeather.getFeel();
}

function fetchCurrentLoc() {
  return apiWeather.getLoc();
}

export {
  fetchCurrentFeel,
  fetchCurrentLoc,
  fetchCurrentTemp,
  api,
  apiWeather,
  JSONUrl,
  auth,
};
