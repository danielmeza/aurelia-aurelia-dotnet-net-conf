import { Router } from "aurelia-router";
import { bindable } from "aurelia-framework";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { CounterMessage } from "../../messages";
import { autoinject } from "aurelia-dependency-injection";

@autoinject
export class Navmenu {
    counterCount: number = 0;

    private subscritpions: Subscription[] = [];

    @bindable
    router: Router;
    constructor(private ev: EventAggregator) {

    }

    bind() {
        this.subscritpions.push(this.ev.subscribe(CounterMessage, (message: CounterMessage) => {
            this.counterCount = message.content;
        }));
    }

    unbind() {
        for (var subscription of this.subscritpions) {
            subscription.dispose();
        }
    }

}