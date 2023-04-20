import { movies } from './movies.js';

const popUpSection = document.querySelector('.popup-section');

const popUp = async () => {
  const res = await fetch(movies);
  const data = await res.json();
  const commentBtn = document.querySelectorAll('.comments-button');

  commentBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      popUpSection.innerHTML = `
  <div class="overlay">
    <div class="popup-container">
     <span class="close-btn">&times;</span>
       <div class="popup-img-container">
          <img src=${data[i].image.medium} alt=${data[i].name} class="popup-img" />
        </div>
        <h3 class="popup-title">${data[i].name}</h3>
        <div class="popup-info">
          <p class="popup-genre"><strong>Genre:</strong> ${data[i].genres}</p>
          <p class="popup-language"><strong>Language:</strong> ${data[i].language}</p>
          <p class="popup-rating"><strong>Rating:</strong> ${data[i].rating.average}</p>
          <p class="popup-premiered"><strong>Premiered:</strong> ${data[i].premiered}</p>
        </div>
        <div class="popup-description">
          <p class="popup-summary">${data[i].summary}</p>
       </div>
        <div class="popup-comments">
          <ul class="comments-list">

          </ul>
        </div>
        <form class="form">
          <input
            type="text"
            name="fname"
            class="popup-name"
            placeholder="Your name"
            required
          />
        <textarea name="insights" cols="30" rows="10" class="popup-insight" placeholder="Your insights"></textarea>
        </form>

    </div>
  </div>
    `;
    });
  });
};

document.addEventListener('click', (e) => {
  const target = e.target.closest('.close-btn');
  const section = e.target.parentElement.parentElement;
  if (!target) return;
  section.classList.add('hide');
});

// const submitComment = async () => {
//   const form = document.querySelector('.popup-name');
//   console.log(form);
// };

// submitComment();
export default popUp;
