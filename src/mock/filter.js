const getOverdueTasks = (tasks) => {
  return tasks.filter((task) => {
    return task.dueDate instanceof Date && task.dueDate < Date.now();
  }).length;
};

const getTodayTasks = (tasks) => {
  return tasks.filter((task) => {
    const currentDate = new Date();

    return task.dueDate instanceof Date &&
      task.dueDate.getMonth() === currentDate.getMonth() &&
      task.dueDate.getFullYear() === currentDate.getFullYear() &&
      task.dueDate.getDate() === currentDate.getDate();
  }).length;
};

const getFavouriteTasks = (tasks) => {
  return tasks.filter((task) => {
    return task.isFavourite;
  }).length;
};

const getRepeatingTasks = (tasks) => {
  return tasks.filter((task) => {
    return Object.values(task.repeatingDays).some(Boolean);
  }).length;
};

const getArchiveTasks = (tasks) => {
  return tasks.filter((task) => {
    return task.isArchive;
  }).length;
};

const generateFilters = (tasks) => {
  return [
    {
      name: `all`,
      count: tasks.length,
    }, {
      name: `overdue`,
      count: getOverdueTasks(tasks),
    }, {
      name: `today`,
      count: getTodayTasks(tasks),
    }, {
      name: `favourites`,
      count: getFavouriteTasks(tasks),
    }, {
      name: `repeating`,
      count: getRepeatingTasks(tasks),
    }, {
      name: `archive`,
      count: getArchiveTasks(tasks),
    }
  ];
};

export {generateFilters};
