export default class APIWeather {
  constructor(apiKey, defaultCoord) {
    this.apiKey = apiKey;
    this.defaultCoord = defaultCoord;
  }

  async getWeather() {
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
    const data = await this.getWeather();
    const temp = data.main.temp;
    let fahrenheit = ((temp - 273.15) * 9) / 5 + 32;
    let celsius = temp - 273.15;
    celsius = celsius.toFixed(1);
    fahrenheit = fahrenheit.toFixed(1);
    return [fahrenheit, celsius];
  }

  async getLoc() {
    const data = await this.getWeather();
    let loc = data.name;
    return loc;
  }

  async getFeel() {
    const [fahrenheit, celsius] = await this.getTemp();
    let temp = fahrenheit;
    let tempFeel = "";
    if (temp <= 60) {
      tempFeel = "cold";
    } else if (temp <= 79.9) {
      tempFeel = "warm";
    } else if (temp >= 80) {
      tempFeel = "hot";
    } else console.log(tempFeel, "error");

    return tempFeel;
  }
}
