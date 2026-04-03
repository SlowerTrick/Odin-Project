import { calculator } from "./calculator.js";

test('1 + 1 = 2', () => {
    expect(calculator.add(1, 1)).toBe(2);
})

test('1 - 1 = 0', () => {
    expect(calculator.sub(1, 1)).toBe(0);
})

test('2 * 3 = 6', () => {
    expect(calculator.mul(2, 3)).toBe(6);
})

test('5 / 2 = 2.5', () => {
    expect(calculator.div(5, 2)).toBe(2.5);
})

test('-5 / -2 = 2.5', () => {
    expect(calculator.div(-5, -2)).toBe(2.5);
})

test('2 / 0 = undefined', () => {
    expect(calculator.div(2, 0)).toBeUndefined();
})