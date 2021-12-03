// eslint-disable-next-line no-unused-vars
import View from "./View";

export default class Controller {
  /**
   * @param {View} view
   */
  constructor(view) {
    this.view = view;

    this.API_KEY = "0e53e87f32b3455f4c4a3fec3c04c53b";

    this.initialStateDone = false;
  }

  async submitCity(city) {
    if (city === this.lastCity) {
      return;
    }

    const responseObject = await this.fetchData(city);

    const obj = {
      city: responseObject.name,
      type: responseObject.weather[0].main,
      degree: responseObject.main.temp,
    };

    this.lastCity = obj.city;

    this.view.insertCard(obj);
  }

  async fetchData(cityName) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Problem in fetch in ${cityName}`);
    }

    // Return is already `await`ed
    return response.json();
  }

  initialState(cityName = "Ankara") {
    if (this.initialStateDone) {
      return;
    }

    this.submitCity(cityName);
    this.lastCity = cityName;
    this.initialStateDone = true;
  }
}
