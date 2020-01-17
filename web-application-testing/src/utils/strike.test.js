import { strikeState } from './strike';

test('Adds one to strike state', () => {
    expect(strikeState(1)).toBe(2);
    expect(strikeState(1)).not.toBe(1);
    expect(strikeState(2)).toBe(3);
})