/**
 * @jest-environment jsdom
 */

import * as crud from '../src/modules/crud.js';
import add from '../src/index.js';

describe('Create and delete test', () => {
  describe('Create function', () => {
    test('It must be a value', () => {
      add('do Homework');
      expect(crud.tasks.length).toBe(1);
    });
  });
  describe('Delete function', () => {

  });
});
