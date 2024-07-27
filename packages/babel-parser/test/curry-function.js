import { parse } from "../lib/index.js";
import generate from "../../babel-generator/lib/index.js";

describe("curry function syntax", function () {
  it("should parse", function () {
    const code = `fun foo(){}`;
    const ast = parse(code);
    const result = (generate.default || generate)(ast, {}, code);
    console.log(result);
  });
  it("should parse2", function () {
    const code = `function foo(){}`;
    const ast = parse(code);
    const result = (generate.default || generate)(ast, {}, code);
    console.log(result);
  });
});
