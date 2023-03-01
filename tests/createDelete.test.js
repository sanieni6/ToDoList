/**
 * @jest-environment jsdom
 */

import * as crud from '../src/modules/crud.js';

describe('Create and delete test', () => {
  describe('Create function', () => {
    test('It must be a value', () => {
      crud.add('do Homework');
      expect(crud.tasks.length).toBe(1);
    });
  });
  describe('Delete function', () => {
    test('The length of the array must be zero', () => {
      crud.removeTask(0);
      expect(crud.tasks.length).toBe(0);
    });
  });
});
