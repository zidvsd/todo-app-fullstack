export const formattedDateToMMDDYY = (dateString) => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

export const firstLetterToUpperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
