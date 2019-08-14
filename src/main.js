const TASK_COUNT = 3;

import {createHeaderPanel} from './components/header-panel.js';
import {createSearchPanel} from './components/search-panel.js';
import {createFiltersPanel} from './components/filters-panel.js';
import {createSortingPanel} from './components/sorting-panel.js';
import {contentWrapper} from './components/content-wrapper.js';
import {createCardTask} from './components/task-element.js';
import {createLoadMoreElement} from './components/load-more-button.js';
import {getDataTask} from '../src/data.js';
import {allTasks} from '../src/data.js';
import {filters} from '../src/data.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const mainElement = document.querySelector(`.main`);
const headerElement = mainElement.querySelector(`.main__control`);

render(headerElement, createHeaderPanel(), `beforeend`);
render(mainElement, createSearchPanel(), `beforeend`);
render(mainElement, createFiltersPanel(), `beforeend`);
render(mainElement, contentWrapper(), `beforeend`);

const boardElement = mainElement.querySelector(`.board`);
const taskListElement = mainElement.querySelector(`.board__tasks`);

render(boardElement, createSortingPanel(), `afterbegin`);
render(boardElement, createLoadMoreElement(), `beforeend`);

// const createTask = (taskObject, createElement) => createElement(taskObject);
createCardTask(getDataTask());
const tasks = allTasks(8);
tasks.forEach(el => render(taskListElement, createCardTask(el), `beforeend`));
// render(taskListElement, createCardTask(tasks[0]), `beforeend`);

// console.log(createTask(getDataTask(), createCardTask));

// const renderTasks = (container, count) => {
//   // container.insertAdjacentHTML(`beforeend`, new Array(count).fill(``).map(getDataTask).map(createCardTask).join(``));
//   container.insertAdjacentHTML(`beforeend`, new Array(count).fill(``).map(getDataTask).filter(el => el.isFavorite).map(createCardTask).join(``));
//   // console.log('new Array(count).fill(``).map(getDataTask).map(createCardTask)',new Array(count).fill(``).map(getDataTask).map(createCardTask));
// }

// renderTasks(taskListElement, TASK_COUNT);
