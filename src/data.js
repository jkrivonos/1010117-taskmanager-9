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
  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`
  ]),
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ][Math.floor(Math.random() * 5)],
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random()))
});
const getCountType = (tasks, filterKey) => {
  return tasks.filter((el) => el[filterKey]).length;
};
const getFilters = (tasks) => {
  return [
    {
      title: `ALL`,
      get count(){
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
        return getCountType(tasks, this.flagName);
      },
      flagName: `isOverdue`
    },
    {
      title: `TODAY`,
      count: 0,
      flagName: `isToday`
    },
    {
      title: `REPEATING`,
      count: 0,
      flagName: `isRepeating`
    },
    {
      title: `TAGS`,
      count: 0,
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
