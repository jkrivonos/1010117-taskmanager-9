const getDataTask = () => ({
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  repeatingDays: {
    'mo': false,
    'tu': false,
    'we': Boolean(Math.round(Math.random())),
    'th': false,
    'fr': false,
    'sa': false,
    'su': false
  },
  tags: new Set([`homework`, `theory`, `practice`, `intensive`]),
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ][Math.floor(Math.random() * 5)],
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random())),
  isOverdue: Boolean(Math.round(Math.random())),
  isToday: Boolean(Math.round(Math.random())),
  isRepeating: Boolean(Math.round(Math.random())),
  isTags: Boolean(Math.round(Math.random()))
});
const getCountType = (tasks, filterKey) => {
  return tasks.filter((el) => el[filterKey]).length;
};
const getOverdueTasks = (tasks) => {
  let date = new Date;
  let overdueTasks = tasks.filter(el => el.dueDate < date.getTime());
  return overdueTasks.length;
};
// TODO: переписать на reduce
const getTodayTasks = (tasks) => {
  let date = new Date;
  let todayTasks = tasks.filter(el => el.dueDate === date.getTime());
  return todayTasks.length;
};
// TODO: отразить в верстке волнистой полоской поторяющиеся таски
const getRepeatedTasks = (tasks) => {
  let repeatedTask = tasks.find(el => el === el);
  let repeatedTasks = [];
  repeatedTasks.push(repeatedTask);
  return repeatedTasks.length;
};
const getTagsTasks = (tasks) => {
  tasks.forEach(el => console.log(el.tags));
  const tagsTasks = tasks.filter(el => el.tags.size == 4);
  return tagsTasks.length;
};
const getFilters = (tasks) => {
  return [
    {
      title: `ALL`,
      get count() {
        return tasks.length;
      }
    },
    {
      title: `FAVORITES`,
      get count() {
        return getCountType(tasks, this.flagName);
      },
      flagName: `isFavorite`
    },
    {
      title: `OVERDUE`,
      get count() {
        return getOverdueTasks(tasks);
      },
      flagName: `isOverdue`
    },
    {
      title: `TODAY`,
      get count() {
        return getTodayTasks(tasks);
      },
      flagName: `isToday`
    },
    {
      title: `REPEATING`,
      get count() {
        return getRepeatedTasks(tasks);
      },
      flagName: `isRepeating`
    },
    {
      title: `TAGS`,
      get count() {
        return getTagsTasks(tasks);
      },
      flagName: `isTags`
    },
    {
      title: `ARCHIVE`,
      get count() {
        return getCountType(tasks, this.flagName);
      },
      flagName: `isArchive`
    }
  ];
};

export {getDataTask, getFilters};
