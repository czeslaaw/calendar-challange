import { chunk } from './utils';

describe('chunk', () => {
    test('should return array split in equal chunks', () => {
        expect(chunk([0, 1, 2, 3], 2))
            .toEqual([[0, 1], [2, 3]]);
    });

    test('should put remaining elements in last chunk', () => {
        expect(chunk([0, 1, 2, 3, 4], 2))
            .toEqual([[0, 1], [2, 3], [4]]);
    });
});