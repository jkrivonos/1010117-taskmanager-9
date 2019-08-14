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

// const filters = [
//   {
//     title: `All`,
//     count: 0
//   },
//   {
//     title: `Favorites`,
//     get count() {return {tasks.filter((el) => el[this.flag]).length}},
//     flag: `isFavorite`
//   }
// ]

const filters = [
  {
    title: `ALL`,
    count: 0
  },
  {
    title: `FAVORITES`,
    count: 0,
    flag: `isFavorite`
  },
  {
    title: `OVERDUE`,
    count: 0,
    flag: `isOverdue`
  },
  {
    title: `TODAY`,
    count: 0,
    flag: `isToday`
  },
  {
    title: `REPEATING`,
    count: 0,
    flag: `isRepeating`
  },
  {
    title: `TAGS`,
    count: 0,
    flag: `isTags`
  },{
    title: `ARCHIVE`,
    count: 0,
    flag: `isArchive`
  }

]

export {getDataTask, filters};
