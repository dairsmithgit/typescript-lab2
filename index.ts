import { Greeter } from "./greeter";
import { JavaScriptGreeter } from "./jsgreeter";
import { LoudGreeter } from "./loudgreeter";
import { HtmlGreeter } from "./htmlgreeter";

console.log(new Greeter("hello"));
console.log(new JavaScriptGreeter("henlo"));
console.log(new LoudGreeter("hello"));
console.log(new HtmlGreeter("hello", "h2"));