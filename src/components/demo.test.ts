
/**
 * @jest-environment jsdom
*/

     document.body.innerHTML =
        '<div>' +
        '  <div id="root" />' +
        '</div>';

import { Demo } from "./demo";

describe("Demo", () => {
    it("should return a div element", () => {
        const root = document.getElementById('root');
        const text = "hello root";
        const element = Demo(root, text);
        expect(element.tagName).toBe('DIV');
        expect(element.innerHTML).toBe(text);
    });
})