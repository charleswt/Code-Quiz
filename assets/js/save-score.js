const scoreSort = JSON.parse(localStorage.getItem("highScores")) || [];
const initialsInput = document.querySelector('#initialsInput');
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const recentScore = localStorage.getItem('recentScore');
const MAX_HIGH_SCORES = 10;

initialsInput.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !initialsInput.value;
});

const saveHighScore = () => {
  console.log("clicked the save button!")

  const score = {
    score: recentScore,
    name: initialsInput.value
  };
  scoreSort.push(score);
  scoreSort.sort((a, b) => b.score - a.score);
  scoreSort.splice(MAX_HIGH_SCORES);

  localStorage.setItem("highScores", JSON.stringify(scoreSort));
  window.location.assign("index.html");
};

saveScoreBtn.addEventListener('click', saveHighScore);