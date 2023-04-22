const url = 'https://your-api-url.com/game/scores';

const refreshScores = async () => {
  const response = await fetch(url);
  const scores = await response.json();
  
  const scoresList = document.querySelector('#scores-list');
  scoresList.innerHTML = '';
  
  scores.forEach(score => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.user}: ${score.score}`;
    scoresList.appendChild(listItem);
  });
};

const refreshButton = document.querySelector('#refresh-btn');
refreshButton.addEventListener('click', refreshScores);

// Call the function initially to load the scores
refreshScores();
