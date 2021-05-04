import { Greeter } from "./greeter";

export class LoudGreeter extends Greeter {

    constructor(greeting: string, private extra: string = "!") {
        super(greeting);
        this.extra = extra;
    }

    addVolume(): void {
        this.extra += "!";
    }
    greet(name: string) {
        return super.greet(name) + this.extra;
    }
}