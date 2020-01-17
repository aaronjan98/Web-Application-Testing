import { ballState } from './ball';

test('Adds to the ball state by adding 1', () => {
    expect(ballState(1)).toBe(2);
    expect(ballState(1)).not.toBe(1);
    expect(ballState(2)).toBe(3);
})