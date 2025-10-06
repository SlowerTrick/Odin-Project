import { caesar } from "./caesar.js";

test('Simple test (abc, 1) => bcd', () => {
    expect(caesar('abc', 1)).toBe('bcd');
});

test('(Slower, 2) => Unqygt', () => {
    expect(caesar('Slower', 2)).toBe('Unqygt');
});

test('(SLOWER, 2) => Unqygt', () => {
    expect(caesar('SLOWER', 2)).toBe('UNQYGT');
});

test('(zzz, 1) => aaa', () => {
    expect(caesar('zzz', 1)).toBe('aaa');
});

test('(ZZZ, 1) => AAA', () => {
    expect(caesar('ZZZ', 1)).toBe('AAA');
});

test('(AaAZzZ, 1) => BbBAaA', () => {
    expect(caesar('AaAZzZ', 1)).toBe('BbBAaA');
});