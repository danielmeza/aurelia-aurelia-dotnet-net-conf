import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-dependency-injection';

@autoinject
export class Fetchdata {
    public forecasts: IWeatherForecast[];

    constructor(private http: HttpClient,private router:Router) {
        
       
    }
    create() {
        this.router.navigateToRoute('create-weather-forecast');
    }
    async activate() {
        let response = await this.http.fetch('api/SampleData');
        this.forecasts = await response.json();
    }

}


