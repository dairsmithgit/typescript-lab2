import { HtmlGreeter } from "./htmlgreeter";

describe("HtmlGreeter", () => {

    test("defaults to h1", () => {
        let htmlGreeting: HtmlGreeter = new HtmlGreeter("Good evening");
        let result: string = htmlGreeting.greet("Charles");
        expect(result).toBe("<h1>Good evening, Charles!</h1>");
    });

    test("works with second parameter", () => {
        let htmlGreeting: HtmlGreeter = new HtmlGreeter("Good evening", "li");
        let result: string = htmlGreeting.greet("Charles");
        expect(result).toBe("<li>Good evening, Charles!</li>");
    });

    test("trying another tagname", () => {
        let htmlGreeting: HtmlGreeter = new HtmlGreeter("Good evening", "section");
        let result: string = htmlGreeting.greet("Charles");
        expect(result).toBe("<section>Good evening, Charles!</section>");
    });
});