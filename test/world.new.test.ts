import Bump from '../src/index';

describe('World (new tests)', () => {
  it('should properly evaluate next position if moving through obstacles', () => {
    const world = Bump.newWorld(64);

    const a = world.add('a', 0, 4, 2, 2);
    const b = world.add('b', 2, 4, 2, 2);

    const nextPosition = world.move(a, 4, 4, () => 'slide');

    expect(nextPosition.x).toEqual(0);
    expect(nextPosition.y).toEqual(4);
  });

  it('should survive edge cases', () => {
    const world = Bump.newWorld(64);

    const a = world.add('a', 4, 4, 4, 4);
    const b = world.add('b', 8, 4, 4, 4);
    const c = world.add('c', 4, 8, 4, 4);
    const d = world.add('d', 8, 8, 4, 4);

    const nextPosition = world.move(a, 10, 4, () => 'slide');
    expect(nextPosition.x).toEqual(4);
    expect(nextPosition.y).toEqual(4);
    expect(nextPosition.collisions.length).toEqual(1);

    const nextPosition2 = world.move(a, 10, 5, () => 'slide');
    expect(nextPosition2.x).toEqual(4);
    expect(nextPosition2.y).toEqual(4);
    expect(nextPosition2.collisions.length).toEqual(2);
  });
});
