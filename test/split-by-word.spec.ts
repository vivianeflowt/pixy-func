import splitByWord from '../src/lib/split-by-word';

const str = 'Aatches even if Received contains Additional Elements';

test('splitByWord', () => {
  expect(splitByWord(str)).toEqual([
    'Aatches',
    'even',
    'if',
    'Received',
    'contains',
    'Additional',
    'Elements',
  ]);
});
