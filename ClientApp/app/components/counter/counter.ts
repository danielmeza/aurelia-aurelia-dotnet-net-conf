import { computedFrom, autoinject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { CounterMessage } from "../../messages";

@autoinject
export class Counter {
    isEnabled = true;
    isVisible: boolean = true;
    public currentCount = 0;
    constructor(private ev: EventAggregator) {
        
    }
    public incrementCounter() {
        this.currentCount++;
        this.ev.publish(new CounterMessage(this.currentCount));
    }
    public showCounter() {
        this.isVisible = !this.isVisible;
    }
    enableButton() {
        this.isEnabled = !this.isEnabled;
    }
    @computedFrom('isEnabled','isVisible')
    get canIncrement() {
        return this.isEnabled && this.isVisible;
    }
}
