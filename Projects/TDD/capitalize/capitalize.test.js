import { capitalize } from "./capitalize.js";

test('Already capitalized', () => {
    expect(capitalize("HELLO")).toBe("HELLO");
});

test('Lower case', () => {
    expect(capitalize("hello")).toBe("HELLO");
});

test('Only numbers', () => {
    expect(capitalize("123")).toBe("123");
});

test('Has numbers', () => {
    expect(capitalize("Hello 123")).toBe("HELLO 123");
});

test('Has ponctuation', () => {
    expect(capitalize("Hello!")).toBe("HELLO!");
});