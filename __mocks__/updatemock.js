const ckeckboxState = (tasks, element, index) => {
  if (element.checked) {
    tasks[index].completed = true;
    return tasks;
  }
  tasks[index].completed = false;
  return tasks;
};

module.exports = ckeckboxState;