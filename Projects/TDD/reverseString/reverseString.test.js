import { reverseString } from "./reverseString.js";

test('No lemon, no melon', () => {
    expect(reverseString('No lemon, no melon')).toBe('nolem on ,nomel oN');
})

test('Hello', () => {
    expect(reverseString('Hello')).toBe('olleH');
})