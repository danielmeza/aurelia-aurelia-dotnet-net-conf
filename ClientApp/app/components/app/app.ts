import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.map([{
            route: ['', 'home'],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../home/home'),
            nav: true,
            title: 'Home'
        }, {
            route: 'counter',
            name: 'counter',
            settings: { icon: 'education', id: 'counter' },
            moduleId: PLATFORM.moduleName('../counter/counter'),
            nav: true,
            title: 'Counter'
        }, {
            route: 'weahter-forecast',
            name: 'weather-forecast',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../weather-forecast/forecast-list'),
            nav: true,
            title: 'Weather forecast'
        }, {
            route: 'create-weather-forecast',
            name: 'create-weather-forecast',
            moduleId: PLATFORM.moduleName('../weather-forecast/create-forecast'),
            title: 'Create Weather forecast'
        }]);

        this.router = router;
    }
}
