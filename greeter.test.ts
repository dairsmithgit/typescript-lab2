import { Greeter } from "./greeter";

describe("Greeter", function() {

    test("greeting works with name", () => {
        let greeting: Greeter = new Greeter("Hello");
        let result: string = greeting.greet("Dair");
        expect(result).toBe('Hello, Dair!');
    });

    test("greeting works with no name", () => {
        let greeting: Greeter = new Greeter("Hello");
        let result: string = greeting.greet("");
        expect(result).toBe('Hello, !'); //kind of weird but whatever
    });

    test("different greeting", () => {
        let greeting: Greeter = new Greeter("Buongiorno");
        let result: string = greeting.greet("Dair");
        expect(result).toBe('Buongiorno, Dair!');
    });
});