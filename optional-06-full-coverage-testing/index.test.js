import assert from 'node:assert';
import test from 'node:test';
import sum from './index.js'

test('menjumlahkan dua angka positif', () => {
    assert.strictEqual(sum(3, 4), 7);
  });
  
  test('menangani input yang bukan angka', () => {
    assert.strictEqual(sum('3', 4), 0); 
    assert.strictEqual(sum({}, 4), 0); 
    assert.strictEqual(sum(3, []), 0); 
  });
  
  test('menangani input negatif', () => {
    assert.strictEqual(sum(-3, 4), 0); 
  });
  
  test('menangani input angka nol', () => {
    assert.strictEqual(sum(0, 0), 0); 
    assert.strictEqual(sum(0, 5), 5); 
  });