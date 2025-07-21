import Api from "../util/API.js";
const apiKey = "abfc814a879d2e570f686dd7dd0fd6df";
const defaultCoord = {
  lon: -80.3,
  lat: 33.8,
};

const api = new Api(apiKey, defaultCoord);
let currentTemp = api.getTemp().then((fahrenheit) => {
  currentTemp = fahrenheit;
});

let currentLoc = api.getLoc().then((loc) => {
  currentLoc = loc;
});

export { currentTemp, currentLoc };
