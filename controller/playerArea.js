document.getElementById('setSize').addEventListener('click', () => {
    const width = document.getElementById('width').value + 'px';
    const height = document.getElementById('height').value + 'px';
    const gameArea = document.getElementById('gameArea');
    gameArea.style.width = width;
    gameArea.style.height = height;
});


let gameInterval;
let score = 0;

document.getElementById('startGame').addEventListener('click', () => {
    const time = parseInt(document.getElementById('gameTime').value) * 1000;
    document.getElementById('gameStatus').textContent = 'Estat: En marxa';

    gameInterval = setInterval(() => {
        score++;
        console.log('Puntuació: ', score);
    }, 1000);

    setTimeout(() => {
        clearInterval(gameInterval);
        document.getElementById('gameStatus').textContent = 'Estat: Aturat';
        alert('Fi del temps!');
    }, time);
});
document.getElementById('setRules').addEventListener('click', () => {
    const time = document.getElementById('gameTime').value;
    const maxScore = document.getElementById('maxScore').value;
    document.getElementById('gameRules').textContent =
        `Temps màxim: ${time} segons, Puntuació màxima: ${maxScore}`;
});

document.getElementById('stopGame').addEventListener('click', () => {
    clearInterval(gameInterval);
    document.getElementById('gameStatus').textContent = 'Estat: Aturat';
    alert('Joc aturat manualment!');
});
