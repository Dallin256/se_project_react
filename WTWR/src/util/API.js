export default class API {
  constructor(apiKey, defaultCoord) {
    this.apiKey = apiKey;
    this.defaultCoord = defaultCoord;
  }

  getInfo() {
    {
      console.log("hey");

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.defaultCoord.lat}&lon=${this.defaultCoord.lon}&appid=${this.apiKey}`;
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          this.dataSet = data;
          console.log(data);
          this.getTemp(this.dataSet);
        })
        .finally(() => {
          return this.dataSet;
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
  }

  getTemp(data) {
    const temp = data.main.temp;
    console.log(temp);
    let fahrenheit = ((temp - 273.15) * 9) / 5 + 32;
    fahrenheit = fahrenheit.toFixed(1);
    return fahrenheit;
  }
}
