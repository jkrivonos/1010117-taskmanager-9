import {createHeaderPanel} from './components/header-panel.js';
import {createSearchPanel} from './components/search-panel.js';
import {filtersWrapper} from './components/filters-wrapper.js';
import {createFiltersPanel} from './components/filters-panel.js';
import {createSortingPanel} from './components/sorting-panel.js';
import {contentWrapper} from './components/content-wrapper.js';
import {editedTask} from './components/edit-task.js';
import {createCardTask} from './components/card-task.js';
import {createLoadMoreElement} from './components/load-more-button.js';
import {getDataTask} from '../src/data.js';
import {getFilters} from '../src/data.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const mainElement = document.querySelector(`.main`);
const headerElement = mainElement.querySelector(`.main__control`);
render(headerElement, createHeaderPanel(), `beforeend`);
render(mainElement, createSearchPanel(), `beforeend`);
render(mainElement, filtersWrapper(), `beforeend`);
const filterElement = mainElement.querySelector(`.main__filter`);
render(mainElement, contentWrapper(), `beforeend`);
const boardElement = mainElement.querySelector(`.board`);


const taskListElement = mainElement.querySelector(`.board__tasks`);
render(taskListElement, editedTask(getDataTask()), `beforeend`);
render(boardElement, createSortingPanel(), `afterbegin`);
render(boardElement, createLoadMoreElement(), `beforeend`);

createCardTask(getDataTask());

const allTasks = (count) => new Array(count).fill(``).map(getDataTask);
const tasks = allTasks(10);

const partlyTasks = (count) => new Array(count).fill(``).map(getDataTask);
const showingTasks = partlyTasks(8);


const loadTasksHandler = () => {
  const restTasks = tasks.length - showingTasks.length;
  const restTasksRender = partlyTasks(restTasks);
  restTasksRender.forEach((el) => render(taskListElement, createCardTask(el), `beforeend`));
};
document.querySelector(`.load-more`).addEventListener(`click`, loadTasksHandler);

const filters = getFilters(tasks);
filters.forEach((el) => render(filterElement, createFiltersPanel(el.title, el.count), `beforeend`));
showingTasks.forEach((el) => render(taskListElement, createCardTask(el), `beforeend`));
