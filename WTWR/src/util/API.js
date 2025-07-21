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
          console.log(data);
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
}
