export class Message<T> {
    constructor(public content: T) {

    }
}

export class CounterMessage extends Message<number> {
    
}