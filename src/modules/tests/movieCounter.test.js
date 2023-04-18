import { movieCounter } from "../movieCounter.js";

test('movieCounter function should count and display the number of movies correctly', () => {
  // Create a fake DOM with a counter element
  document.body.innerHTML = `
      <div>
        <span id="counter"></span>
      </div>
    `;

  // Call the movieCounter function with a count of 3
  const count = movieCounter(3);

  // Check that the counter displays the correct count
  expect(document.getElementById('counter').innerText).toBe('3');

  // Check that the function returns the correct count
  expect(count).toBe(3);
});
