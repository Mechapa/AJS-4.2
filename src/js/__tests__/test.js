import sortByHealth from '../app';


test('3 different health', () => {
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const sorted = sortByHealth(characters);

  expect(sorted).toEqual(expected);
});

test('3 different health', () => {
  const characters = [
    { name: 'мечник', health: 12 },
    { name: 'маг', health: 40 },
    { name: 'лучник', health: 3 },
  ];

  const expected = [
    { name: 'маг', health: 40 },
    { name: 'мечник', health: 12 },
    { name: 'лучник', health: 3 },
  ];

  const sorted = sortByHealth(characters);

  expect(sorted).toEqual(expected);
});

test('3 same health', () => {
  const characters = [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
  ];

  const expected = [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
  ];

  const sorted = sortByHealth(characters);

  expect(sorted).toEqual(expected);
});
