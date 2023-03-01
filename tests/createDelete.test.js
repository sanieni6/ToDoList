/**
 * @jest-environment jsdom
 */

import * as crud from '../src/modules/crud.js';

describe('Create and delete test', () => {
  // Test add function
  describe('Create function', () => {
    test('It must be a value', () => {
      // Add a task to the array
      crud.add('do Homework');
      // Array length should increase from 0 to 1
      expect(crud.tasks.length).toBe(1);
    });
  });
  
  // Test delete function
  describe('Delete function', () => {
    test('The length of the array must be zero', () => {
        // Remove the previous task added from the array
        crud.removeTask(0);
        // Array length should decrease to 0
        expect(crud.tasks.length).toBe(0);
      });
  });
});
