const showScores = (scores) => {
  const scoresContainer = document.getElementById('Table1');
  scoresContainer.innerHTML = '';
  scores.forEach((score) => {
    const scoreList = `<li class="name-scores">${score.user}: ${score.score}</li>`;

    scoresContainer.innerHTML += scoreList;
  });
};

export default showScores;