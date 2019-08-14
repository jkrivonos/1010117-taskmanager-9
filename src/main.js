import {createHeaderPanel} from './components/header-panel.js';
import {createSearchPanel} from './components/search-panel.js';
import {filtersWrapper} from './components/filters-wrapper.js';
import {createFiltersPanel} from './components/filters-panel.js';
import {createSortingPanel} from './components/sorting-panel.js';
import {contentWrapper} from './components/content-wrapper.js';
import {createCardTask} from './components/card-task.js';
import {createLoadMoreElement} from './components/load-more-button.js';
import {getDataTask} from '../src/data.js';
import {filters} from '../src/data.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const mainElement = document.querySelector(`.main`);
const headerElement = mainElement.querySelector(`.main__control`);
render(headerElement, createHeaderPanel(), `beforeend`);
render(mainElement, createSearchPanel(), `beforeend`);
render(mainElement, filtersWrapper(), `beforeend`);
const filterElement = mainElement.querySelector(`.main__filter`)
filters.forEach(el => render(filterElement, createFiltersPanel(el.title, el.count), `beforeend`));


render(mainElement, contentWrapper(), `beforeend`);

const boardElement = mainElement.querySelector(`.board`);
const taskListElement = mainElement.querySelector(`.board__tasks`);

render(boardElement, createSortingPanel(), `afterbegin`);
render(boardElement, createLoadMoreElement(), `beforeend`);

createCardTask(getDataTask());

const allTasks = (count) => new Array(count).fill(``).map(getDataTask);

const tasks = allTasks(8);

tasks.forEach(el => render(taskListElement, createCardTask(el), `beforeend`));

const filteredTasksLength = (flag) => tasks.filter((el) => el[flag]).length;
// console.log(`createFiltersPanel`, createFiltersPanel(`All`));

// createFiltersPanel(filters);
// render(taskListElement, createCardTask(tasks[0]), `beforeend`);

// console.log(createTask(getDataTask(), createCardTask));

// const renderTasks = (container, count) => {
//   // container.insertAdjacentHTML(`beforeend`, new Array(count).fill(``).map(getDataTask).map(createCardTask).join(``));
//   container.insertAdjacentHTML(`beforeend`, new Array(count).fill(``).map(getDataTask).filter(el => el.isFavorite).map(createCardTask).join(``));
//   // console.log('new Array(count).fill(``).map(getDataTask).map(createCardTask)',new Array(count).fill(``).map(getDataTask).map(createCardTask));
// }

// renderTasks(taskListElement, TASK_COUNT);
