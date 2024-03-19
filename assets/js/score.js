const scores = document.querySelector("scores");
const scoreSort = JSON.parse(localStorage.getItem("scoreSort")) || [];
const initialsInput = document.querySelector('#initialsInput');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore')
const recentScore = localStorage.getItem('recentScore');
const MAX_HIGH_SCORES = 10;

scores.innerHTML = scoreSort
.map(score => {
    return `<p class="scores">${score.name} - ${score.score}/10</p>`;
})
.join("");

finalScore.innerText = recentScore;
initialsInput.addEventListener("keyup", () => {
   saveScoreBtn.disabled = !initialsInput.value;
});


const saveHighScore = event => {
   console.log("clicked the save button!")
   event.preventDefault();

const score = {
   score: recentScore,
   name: initialsInput.value
};
scoreSort.push(score);
scoreSort.sort( (a,b) =>  b.score - a.score)
scoreSort.splice(5);

localStorage.setItem("scoreSort", JSON.stringify(scoreSort));
window.location.assign("index.html");
};

document.querySelector('#saveScoreBtn').addEventListener('click', saveHighScore)