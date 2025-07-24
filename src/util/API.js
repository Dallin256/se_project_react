export default class API {
  constructor(apiKey, defaultCoord) {
    this.apiKey = apiKey;
    this.defaultCoord = defaultCoord;
  }

  async getInfo() {
    {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.defaultCoord.lat}&lon=${this.defaultCoord.lon}&appid=${this.apiKey}`;
      return fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          return null;
        });
    }
  }

  async getTemp() {
    const data = await this.getInfo();
    const temp = data.main.temp;
    let fahrenheit = ((temp - 273.15) * 9) / 5 + 32;
    fahrenheit = fahrenheit.toFixed(1);
    return fahrenheit;
  }

  async getLoc() {
    const data = await this.getInfo();
    let loc = data.name;
    return loc;
  }

  async getFeel() {
    const temp = await this.getTemp();
    let tempFeel = "";
    if (temp <= 34.9) {
      tempFeel = "freezing";
    } else if (temp <= 55.9) {
      tempFeel = "cold";
    } else if (temp <= 68.9) {
      tempFeel = "chilly";
    } else if (temp <= 83.9) {
      tempFeel = "warm";
    } else if (temp <= 91.9) {
      tempFeel = "hot";
    } else if (temp >= 92) {
      tempFeel = "blistering";
    } else console.log(tempFeel, "error");

    return tempFeel;
  }
}
