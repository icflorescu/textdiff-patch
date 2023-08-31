import fs from 'fs';
import { expect, test } from 'vitest';
import applyDelta from '..';

const v1 = fs.readFileSync(__dirname + '/v1.txt', 'utf8').slice(0, -2),
  v2 = fs.readFileSync(__dirname + '/v2.txt', 'utf8').slice(0, -2),
  deltas = {
    v1_to_v2: require('./delta-v1-to-v2.json'),
    v2_to_v1: require('./delta-v2-to-v1.json'),
    v1_to_v1: [[0, v1.length]],
    v1_to_empty: [[-1, v1.length]],
    empty_to_v1: [[1, v1]],
    empty_to_empty: [],
  };

test('v1 -> v2', function () {
  expect(applyDelta(v1, deltas.v1_to_v2)).toBe(v2);
});
test('v2 -> v1', function () {
  expect(applyDelta(v2, deltas.v2_to_v1)).toBe(v1);
});
test('v1 -> v1', function () {
  expect(applyDelta(v1, deltas.v1_to_v1)).toBe(v1);
});
test('v1 -> empty', function () {
  expect(applyDelta(v1, deltas.v1_to_empty)).toBe('');
});
test('empty -> v1', function () {
  expect(applyDelta('', deltas.empty_to_v1)).toBe(v1);
});
test('empty -> empty', function () {
  expect(applyDelta('', deltas.empty_to_empty)).toBe('');
});
