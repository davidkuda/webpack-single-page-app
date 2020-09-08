// import { checkInput } from "../src/client/js/check-input"
import { checkInput } from "../check-input";

describe("Testing 'check input' function", () => {
    test("The function should return either true or false", () => {
        const input = 'www.davek.com';
        const output = true;
        expect(checkInput(input)).toEqual(output);
    })
});