const randomPhrases = [
        {phrase: "Yo soy/estoy alto.", correctAnswer: "soy", incorrectAnswer: "estoy"}, 
        {phrase: "Tú eres/estás gracioso.",  correctAnswer: "eres", incorrectAnswer: "estás"},
        {phrase: "El perro es/está grande.", correctAnwer: "es", incorrectAnswer: "está"},
        {phrase: "Nosotros somos/estamos una familia.", correctAnswer: "somos", incorrectAnswer: "estamos"},
        {phrase: "Los museos son/están interesantes.", correctAnswer: "son", incorrectAnswer: "están"},
        {phrase: "Yo soy/estoy abogado.", correctAnswer: "soy", incorrectAnswer: "estoy"},
        {phrase: "Tu eres/estás profesor.", correctAnswer: "eres", incorrectAnswer: "estás"},
        {phrase: "Mi hermana es/está dentista.", correctAnswer: "es", incorrectAnswer: "está"},
        {phrase: "Mis padres son/están doctores.", correctAnswer: "son", incorrectAnswer: "están"},
        {phrase: "Yo soy/estoy una persona muy amable.", correctAnswer: "soy", incorrectAnswer: "estoy"},
        {phrase: "Mi madre es/está tán simpática.", correctAnswer: "es", incorrectAnswer: "está"},
        {phrase: "Vosotros sois/estáis guapos.", correctAnswer: "sois", incorrectAnswer: "estáis"},
        {phrase: "Tu eres/estás muy delgado.", correctAnswer: "eres", incorrectAnswer: "estás"},
        {phrase: "Mis abuelos son/están generosos.", correctAnswer: "son", incorrectAnswer: "están"},
        {phrase: "¿Qué hora son? - es/está la una de la tarde.", correctAnswer: "es", incorrectAnswer: "está"},
        {phrase: "¿Qué hora son? - son/están las diez de la noche.", correctAnswer: "son", incorrectAnswer: "están"},
        {phrase: "¿Qué hora son? - son/están las ocho de la mañana.", correctAnswer: "son", incorrectAnswer: "están"},
        {phrase: "Yo soy/estoy de Inglaterra.", correctAnswer: "soy", incorrectAnswer: "estoy"},
        {phrase: "Tú eres/estás de Venezuela.", correctAnswer: "eres", incorrectAnswer: "estás"},
        {phrase: "Esta falda es/está de México.", correctAnswer: "es", incorrectAnswer: "está"},
        {phrase: "Nostros somos/estamos de Francia.", correctAnswer: "somos", incorrectAnswer: "estamos"},
        {phrase: "Mis padres son/están de los Estados Unidos.", correctAnswer: "son", incorrectAnswer: "están"},
        {phrase: "Yo soy/estoy tu amigo.", correctAnswer: "soy", incorrectAnswer: "estoy"},
        {phrase: "Él es/está mi hermano.", correctAnswer: "es", incorrectAnswer: "está"},
        {phrase: "Nosotros somos/estamos una familia",correctAnswer: "somos", incorrectAnswer: "estamos"},
        {phrase: "Ellos son/están mis padres.", correctAnswer: "son", incorrectAnswer: "están"},
        {phrase: "La farmácia es/está cerca.", correctAnswer: "está", incorrectAnswer: "es"},
        {phrase: "El banco es/está en frente del gimnasio.", correctAnswer: "está", incorrectAnswer: "es"},
        {phrase: "Soy/estoy detrás de la mesa.", correctAnswer: "estoy", incorrectAnswer: "soy"},
        {phrase: "Mis gafas son/están debajo de la silla.", correctAnswer: "están", incorrectAnswer: "son"},
        {phrase: "Yo soy/estoy en el sur de Inglaterra.", correctAnswer: "estoy", incorrectAnswer: "soy"},
        {phrase: "Mi profe es/está en el colegio.", correctAnswer: "está", incorrectAnswer: "es"},
        {phrase: "Mi madre es/está en el pueblo.", correctAnswer: "está", incorrectAnswer: "es"},
        {phrase: "¿Sois/estáis en la fiesta?", correctAnswer: "estáis", incorrectAnswer: "sois"},
        {phrase: "Mis amigos son/están de vacaciones.", correctAnswer: "están", incorrectAnswer: "son"},
        {phrase: "Yo soy/estoy hablando con mi amiga.", correctAnswer: "estoy", incorrectAnswer: "soy"},
        {phrase: "¿Eres/estás comiendo con nosotros?", correctAnswer: "estás", incorrectAnswer: "eres"},
        {phrase: "Mi padre es/está trabajando ahora.", correctAnswer: "está", incorrectAnswer: "es"},
        {phrase: "Mis amigos y yo somos/estamos dando un paseo.", correctAnswer: "estamos", incorrectAnswer: "somos"},
        {phrase: "Mis padres son/están aprendiendo español.", correctAnswer: "están", incorrectAnswer: "son"},
        {phrase: "Soy/estoy muy cansado.", correctAnswer: "estoy", incorrectAnswer: "soy"},
        {phrase: "Es/está un poco enfermo.", correctAnswer: "está", incorrectAnswer: "es"},
        {phrase: "Somos/estamos llenos de energia.", correctAnswer: "estamos", incorrectAnswer: "somos"},
        {phrase: "Mis perros son/están durmiendo.", correctAnswer: "están", incorrectAnswer: "son"},
        {phrase: "Hoy, soy/estoy muy contenta.", correctAnswer: "estoy", incorrectAnswer: "soy"},
        {phrase: "Mi hermano es/está triste.", correctAnswer: "está", incorrectAnswer: "es"},
        {phrase: "Por qué sois/estáis enfedados?", correctAnswer: "estáis", incorrectAnswer: "sois"},
        {phrase: "Los niños son/están emocionantes.", correctAnswer: "están", incorrectAnswer: "son"} 
]

let serPoints = parseInt(document.getElementById('correct').innerText);
let estarPoints = parseInt(document.getElementById('incorrect').innerText);

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * randomPhrases.length);
    return randomPhrases[randomIndex];
}

function displayPhrase() {
    const selectedPhrase = getRandomPhrase();
    document.getElementById('phrase').textContent = selectedPhrase.phrase;
    document.getElementById('phrase').dataset.correctAnswer = selectedPhrase.correctAnswer;
}

function checkUserAnswer() {
    const userInput = document.getElementById('userInput').value;
    const correctAnswer = document.getElementById('phrase').dataset.correctAnswer;
    const resultDiv = document.getElementById('result');
    if (userInput === correctAnswer) {
        resultDiv.textContent = 'muy bien';
        incrementSerPoints();
    } else {
        resultDiv.textContent = `Aiiii, you answered ${userInput}, the correct answer was ${correctAnswer}!`;
        incrementEstarPoints();
    }
    displayPhrase();
    gameStatus();
}

function incrementSerPoints() {
    document.getElementById('correct').innerText = serPoints +=10;
}

function incrementEstarPoints() {
    document.getElementById('incorrect').innerText = estarPoints +=10;
}

function gameStatus() {
    let phraseDiv = document.getElementById('phrase');
    if (serPoints >= 20) {
        phraseDiv.textContent = "Felicidades! You won the battle!";
    } else if (estarPoints >= 20) {
        phraseDiv.textContent = "Qué pena! You lost the battle! :(";
        console.log(gameLost)
    }
}

function restartGame() {
    document.getElementById('correct').textContent = 0;
    document.getElementById('incorrect').textContent = 0;
    document.getElementById('result').textContent = '';
    displayPhrase();
    document.getElementById('userInput').value = '';
}

const audio = document.getElementById('audio-player');
const playPauseIcon = document.getElementById('playPauseIcon');

playPauseIcon.addEventListener('click', () => {
    if (audio.paused) {
    audio.play();
    } else {
        audio.pause();
    }
});

// Load a random phrase when the page loads
window.onload = displayPhrase;