export const ckeckboxState = (tasks, remove, element, index) => {
  if (element.checked) {
    tasks[index].completed = true;
    remove[index].style.textDecoration = 'line-through';
    return tasks;
  }
  tasks[index].completed = false;
  remove[index].style.textDecoration = 'none';
  return tasks;
};

export const deleteChecked = (tasks) => {
  tasks = tasks.filter((task) => !task.completed);
  return tasks;
};
