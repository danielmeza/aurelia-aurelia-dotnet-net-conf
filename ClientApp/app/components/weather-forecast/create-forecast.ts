import { computedFrom, autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { Router } from "aurelia-router";
import { Endpoint, Rest, Config } from 'aurelia-api';
@autoinject
export class CreateForecast {
    http: Rest;
    datePicker: HTMLInputElement;
    weatherForecast: IWeatherForecast = {} as any;
    constructor(private httpFactory: Config, private router: Router) {
        this.http = httpFactory.getEndpoint('api');
    }

    @computedFrom('weatherForecast.dateFormatted', 'weatherForecast.temperatureC', 'weatherForecast.temperatureF', 'weatherForecast.summary')
    get canSave() {
        return this.weatherForecast.dateFormatted && this.weatherForecast.temperatureC > -250 && this.weatherForecast.temperatureF >= 0 && this.weatherForecast.summary;
    }
    async save() {
        let response = await this.http.create('SampleData', this.weatherForecast);
        let result = confirm('Weahter forecast created. Do to wish to create another?');
        if (!result) {
            await this.router.navigateToRoute('weather-forecast');
        } else {
            this.weatherForecast = {} as any;
        }
    }
    back() {
        this.router.navigateToRoute('weather-forecast');
    }
    attached() {
        //$(this.datePicker).
    }


}
