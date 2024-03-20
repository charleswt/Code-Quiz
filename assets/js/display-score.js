const scores = document.querySelector("#scores");
const scoreSort = JSON.parse(localStorage.getItem("highScores")) || [];
const initialsInput = document.querySelector('#initialsInput');

scores.innerHTML = scoreSort
  .map(score => {
    return `<p class="scores">${score.name} - ${score.score}/10</p>`;
  })
  .join("");