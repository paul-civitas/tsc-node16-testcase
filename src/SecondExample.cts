export default class Example {
    thing: string

    constructor() {
        this.thing = "Test thing"
    }

    async getThing() {
        console.log(this.thing)
    }
}
