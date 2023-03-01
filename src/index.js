/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-unresolved
import _ from 'lodash';
import './style.css';
import * as crud from './modules/crud.js';

const textInput = document.querySelector('.text-input');

const form = document.querySelector('.forma');
const index = 0;

export const add = (description) => {
  const task = {};
  task.description = description;
  task.completed = false;
  task.index = index;
  crud.tasks.push();
  crud.updateIndexes();
  crud.saveLocalStorage();
};

window.onload = crud.create();

form.addEventListener('submit', (event) => {
  add(textInput.value);
  crud.create();
  textInput.value = '';
  event.preventDefault();
});
