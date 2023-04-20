const movieCounter = (count) => {
  const counter = document.getElementById('counter');
  counter.innerText = count;
  return count;
};

/* eslint-disable import/prefer-default-export */
export { movieCounter };