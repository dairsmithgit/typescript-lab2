import { Greeter } from "./greeter";

export class JavaScriptGreeter extends Greeter {

    constructor(greeting: string) {
        super(greeting);
    }

    greet(name: string) {
        return "console.log(" + super.greet(name) + ")";
    }
}