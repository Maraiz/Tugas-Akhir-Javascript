import { sum } from './index.js';
import test from 'node:test';
import assert from 'node:assert';

test(' TES 1 : fungsi sum harus mengembalikan nilai/hasil yang benar', () => {
  const hasil = sum(1, 2);
  assert.strictEqual(hasil, 3);
});

