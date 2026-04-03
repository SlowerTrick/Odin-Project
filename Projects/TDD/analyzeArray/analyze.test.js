import { analyze } from "./analyze.js";

test('[1, 2, 3] => 2, 1, 3, 3', () => {
    expect(analyze([1, 2, 3])).toStrictEqual({avg: 2, min: 1, max: 3, length: 3});
});

test('[1, 2, 3, 4, 5] => 3, 1, 5, 5', () => {
    expect(analyze([1, 2, 3, 4, 5])).toStrictEqual({avg: 3, min: 1, max: 5, length: 5});
});

test('[1, 0, 4, 8, 5, 9, 6] => 4.71, 0, 9, 7', () => {
    expect(analyze([1, 0, 4, 8, 5, 9, 6])).toStrictEqual({avg: 4.71, min: 0, max: 9, length: 7});
});