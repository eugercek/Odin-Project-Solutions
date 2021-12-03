import View from "./View";

export default class Controller {
  /**
   * @param {View} view
   */
  constructor(view) {
    this.view = view;

    this.API_KEY = "0e53e87f32b3455f4c4a3fec3c04c53b";
  }

  submitCity(city) {
    console.log(this.fetchData(city));
  }

  fetchData(cityName) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Problem in fetch in ${cityName}`);
    }

    for (let i = 0; i < 10; i++) {
      console.log(i);
    }

    obj = await response.json();
  }
}
