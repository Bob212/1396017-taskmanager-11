const castTimeFormat = (number) => {
  return number < 10 ? `0${number}` : String(number);
};

export const formatTime = (date) => {
  const hours = castTimeFormat( date.getHours() % 12 );
  const minutes = castTimeFormat( date.getMinutes() );
  return `${hours} : ${minutes}`;
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.children[0];
};

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const render = (container, element, place = `beforeend`) => {
  // console.log(element)
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};
