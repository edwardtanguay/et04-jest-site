import { expect } from '@jest/globals';
import { sentencize } from './qstr';

test('sentencize() is correctly implemented', () => {
    expect(sentencize('test')).toBe('Test.');
    expect(sentencize('test!')).toBe('Test!');
    expect(sentencize('Test!')).toBe('Test!');
    expect(sentencize('...')).toBe('...');
    expect(sentencize('nn')).toBe('Nn.');
});