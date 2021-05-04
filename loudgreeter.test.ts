import { LoudGreeter } from "./loudgreeter";

describe("LoudGreeter", () => {

    test("starts with 2 volume", () => {
        let loudGreeting: LoudGreeter = new LoudGreeter("Buenas Dias");
        let result: string = loudGreeting.greet("Mandy");
        expect(result).toBe("Buenas Dias, Mandy!!");
    });

    test("calling volume makes 3", () => {
        let loudGreeting: LoudGreeter = new LoudGreeter("Buenas Dias");
        let result: string = loudGreeting.greet("Mandy");
        loudGreeting.addVolume();
        loudGreeting.addVolume();
        loudGreeting.addVolume();
        expect(result).toBe("Buenas Dias, Mandy!!!");
    });
});