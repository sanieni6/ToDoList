import * as interactive from './interactive.js';

const list = document.querySelector('.list');
const LOCAL_STORAGE_KEY = 'items';
let outlined;
let checkBoxesArr;
const getItems = () => {
  const savedTasks = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedTasks ? JSON.parse(savedTasks) : [];
};

// eslint-disable-next-line import/no-mutable-exports
export let tasks = getItems();

export const saveLocalStorage = () => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};

const removeTask = (index) => {
  tasks = tasks.filter((task, id) => index !== id);
};

export const updateIndexes = () => {
  tasks.forEach((element, id) => {
    element.index = id;
  });
};

export const updateCheckBoxes = () => {
  tasks.forEach((element, index) => {
    if (element.completed === true) {
      outlined[index].style.textDecoration = 'line-through';
      checkBoxesArr[index].checked = true;
    } else {
      outlined[index].style.textDecoration = 'none';
      checkBoxesArr[index].checked = false;
    }
  });
};

const edit = (element, index) => {
  if (tasks[index].description !== element.value) {
    tasks[index].description = element.value;
    saveLocalStorage();
    return true;
  }
  return false;
};

export const create = () => {
  list.innerHTML = '';
  tasks.forEach((element) => {
    list.insertAdjacentHTML('beforeend', `
          <li class="element">
                      <input class="status" type="checkbox">
                      <textarea name="task" id="task" maxlength="200">${element.description}</textarea>
                      <button class="delete" type="button">
                      <span class="material-icons">more_vert</span>
                      <svg class = "trash hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"/></svg>
                      </button>
                  </li>
          `);
  });
  const remove = Array.from(document.querySelectorAll('#task'));
  const liElement = Array.from(document.querySelectorAll('.element'));
  const trash = Array.from(document.querySelectorAll('.trash'));
  const deleteButton = Array.from(document.querySelectorAll('.delete'));
  const dots = Array.from(document.querySelectorAll('.material-icons'));
  const checkboxes = document.querySelectorAll('.status');
  const deleteAll = document.querySelector('.clear-button');
  outlined = remove;
  checkBoxesArr = checkboxes;
  updateCheckBoxes();
  remove.forEach((element, index) => element.addEventListener('focus', () => {
    liElement[index].style.background = '#fff59e';
    element.style.background = '#fff59e';
    element.style.textDecoration = 'none';
    deleteButton[index].style.background = '#fff59e';
    dots[index].classList.add('hidden');
    trash[index].classList.remove('hidden');
    deleteButton[index].addEventListener('click', () => {
      removeTask(index);
      updateIndexes();
      saveLocalStorage();
      create();
    });
  }));
  remove.forEach((element, index) => element.addEventListener('blur', () => {
    updateCheckBoxes();
    liElement[index].style.background = '#fff';
    element.style.background = '#fff';
    deleteButton[index].style.background = '#fff';
    trash[index].classList.add('hidden');
    dots[index].classList.remove('hidden');
    if (edit(element, index)) { create(); }
  }));

  checkboxes.forEach((element, index) => element.addEventListener('change', () => {
    tasks = interactive.ckeckboxState(tasks, remove, element, index);
    saveLocalStorage();
  }));

  deleteAll.addEventListener('click', () => {
    tasks = interactive.deleteChecked(tasks);
    saveLocalStorage();
    updateIndexes();
    create();
  });
};
