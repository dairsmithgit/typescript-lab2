import { JavaScriptGreeter } from "./jsgreeter";
import { Greeter } from "./greeter";

describe("Javascript Greeter",  () => {

    test("greeting js sub class", () => {
        let greeting: JavaScriptGreeter = new JavaScriptGreeter("Hello");
        let result: string = greeting.greet("Dair");
        expect(result).toBe("console.log(Hello, Dair!)");
    });

    test("greeting js sub class", () => {
        let greeting: JavaScriptGreeter = new JavaScriptGreeter("Hola");
        let result: string = greeting.greet("Jess");
        expect(result).toBe("console.log(Hola, Jess!)");
    });
});