/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-unresolved
import _ from 'lodash';
import './style.css';
import * as crud from './modules/crud.js';

const textInput = document.querySelector('.text-input');

const form = document.querySelector('.forma');

window.onload = crud.create();

form.addEventListener('submit', (event) => {
  crud.add(textInput.value);
  crud.create();
  textInput.value = '';
  event.preventDefault();
});
