import {createHeaderPanel} from './components/header-panel.js';
import {createSearchPanel} from './components/search-panel.js';
import {createFiltersPanel} from './components/filters-panel.js';
import {createSortingPanel} from './components/sorting-panel.js';
import {contentWrapper} from './components/content-wrapper.js';
import {taskElement} from './components/task-element.js';
import {createLoadMoreElement} from './components/load-more-button.js';


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

render(taskListElement, taskElement(`Example default task with default color.`, `23 September`, `11:15`, `card--blue`), `beforeend`);
render(taskListElement, taskElement(`Example default task with custom color.`, `23 September`, `11:15`, `card--yellow`), `beforeend`);
render(taskListElement, taskElement(`Example default task with custom color and without date.`), `beforeend`);

render(boardElement, createLoadMoreElement(), `beforeend`);
