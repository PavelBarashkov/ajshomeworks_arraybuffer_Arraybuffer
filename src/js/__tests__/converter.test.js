/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import ArrayBufferConverter from '../app';
import getBuffer from '../getBuffer';

test('converter test', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const str = converter.toString();
  const result = { data: { user: { id: 1, name: 'Hitman', level: 10 } } };
  expect(JSON.stringify(result)).toEqual(str);
});
