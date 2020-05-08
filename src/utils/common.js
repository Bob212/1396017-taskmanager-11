const castTimeFormat = (number) => {
  return number < 10 ? `0${number}` : String(number);
};

export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 24);
  const minutes = castTimeFormat(date.getMinutes());
  return `${hours} : ${minutes}`;
};
