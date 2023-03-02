/**
 * @jest-environment jsdom
 */
import * as crud from '../src/modules/crud.js';
import * as interactive from '../src/modules/interactive.js';

const update = require('../__mocks__/updatemock.js');
const newLS = require('../__mocks__/mockLocalStorage.js');

global.localStorage = newLS;

crud.add('Lunch break');

describe('Create and delete test', () => {
  // Test add function
  describe('Create function', () => {
    test('It must be a value', () => {
      // Add a task to the array
      crud.add('do Homework');
      // Array length should increase from 1 to 2
      expect(crud.tasks.length).toBe(2);
    });
  });

  // Test delete function
  describe('Delete function', () => {
    test('The length of the array must be zero', () => {
      // Remove the previous task added from the array
      crud.removeTask(0);
      // Array length should decrease to 1
      expect(crud.tasks.length).toBe(1);
    });
  });
});

describe('Edit, update and clear test', () => {
  // Test edit function
  describe('Edit function', () => {
    test('The task description should change', () => {
      const input = document.createElement('input');
      input.value = 'Do testing';
      // Edit description of the first task of the array with input value
      crud.edit(input, 0);
      // First array object description should be 'Do testing'
      expect(crud.tasks[0].description).toBe('Do testing');
    });

    describe('Update function', () => {
      test('The task completed property should change to completed', () => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        crud.tasks = update(crud.tasks, checkbox, 0);
        expect(crud.tasks[0].completed).toBe(true);
        // ckeckboxState function
      });
    });

    describe('Clear completed function', () => {
      test('All the completed tasks should be deleted from the array', () => {
        // deleteChecked function
        crud.add('do Homework');
        crud.add('wash the dishes');
        crud.tasks.forEach((element) => {
          element.completed = true;
        });
        crud.tasks = interactive.deleteChecked(crud.tasks);
        expect(crud.tasks.length).toBe(0);
      });
    });
  });
});