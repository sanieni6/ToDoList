// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-unresolved
import _ from 'lodash';
import './style.css';

const list = document.querySelector('.list');

const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Read ten pages',
    completed: false,
    index: 1,

  },
  {
    description: 'do homework',
    completed: false,
    index: 2,
  },
  {
    description: 'finish the capstone project',
    completed: false,
    index: 3,
  },
];

tasks.forEach((element) => {
  list.insertAdjacentHTML('beforeend', `
    <li class="element">
                <input class="status" type="checkbox">
                <textarea name="task" id="task" maxlength="200">${element.description}</textarea>
                <span class="material-icons">more_vert</span>
            </li>
    `);
});