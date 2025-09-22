import Api from "./API.js";
const apiKey = "abfc814a879d2e570f686dd7dd0fd6df";
const defaultCoord = {
  lon: -80.3871,
  lat: 33.8884,
};

import shorts from "../assets/shorts.png";
import shortShorts from "../assets/shortShorts.png";
import tankTop from "../assets/tankTop.png";
import sandals from "../assets/sandals.png";

const api = new Api(apiKey, defaultCoord);

function fetchCurrentTemp() {
  return api.getTemp();
}

function fetchCurrentFeel() {
  return api.getFeel();
}

function fetchCurrentLoc() {
  return api.getLoc();
}

function fetchCards() {
  return initialCards;
}

const initialCards = [
  {
    _id: "0",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
    name: "T-Shirt",
    tempType: "hot",
  },

  {
    _id: "1",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
    name: "Cap",
    tempType: "hot",
  },

  {
    _id: "2",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
    name: "Hoodie",
    tempType: "warm",
  },

  {
    _id: "3",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
    name: "Jacket",
    tempType: "chilly",
  },

  {
    _id: "4",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
    name: "Sneakers",
    tempType: "warm",
  },

  {
    _id: "5",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
    name: "Coat",
    tempType: "cold",
  },

  {
    _id: "6",
    url: tankTop,
    name: "Tank Top",
    tempType: "blistering",
  },

  {
    _id: "7",
    url: shortShorts,
    name: "Short Shorts",
    tempType: "blistering",
  },

  {
    _id: "8",
    url: sandals,
    name: "Sandals",
    tempType: "blistering",
  },

  {
    _id: "9",
    url: shorts,
    name: "Shorts",
    tempType: "hot",
  },
];

export {
  initialCards,
  fetchCurrentTemp,
  fetchCurrentLoc,
  fetchCurrentFeel,
  fetchCards,
};
