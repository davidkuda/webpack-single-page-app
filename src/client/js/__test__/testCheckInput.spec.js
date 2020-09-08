// import { checkInput } from "../src/client/js/check-input"
import { checkInput } from "../check-input";

describe("Testing 'check input' function", () => {
    test("The function should return either true or false", () => {
        const input = [
            'www.davek.com',
            'davek'
            // { id: 1, url: "https://www.url1.dev" },
            // { id: 2, url: "https://www.url2.dev" },
            // { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [
            false
            // { id: 3, url: "https://www.link3.dev" }
        ];


        expect(checkInput(input)).toEqual(output);
    })
});