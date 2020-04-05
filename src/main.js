import { createBoardTemplate } from "./components/board.js";
import { createFilterTemplate } from "./components/filter.js";
import { createLoadMoreButtonTemplate } from "./components/load-more-button.js";
import { createSiteMenuTemplate } from "./components/site-menu.js";
import { createTaskTemplate } from "./components/task-create.js";
import { createTaskEditTemplate } from "./components/task-edit.js";

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createTaskEditTemplate());

for (let i = 0; i < 3; i++) {
  render(taskListElement, createTaskTemplate());
}

render(boardElement, createLoadMoreButtonTemplate());
