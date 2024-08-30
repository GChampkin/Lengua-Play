const generatePhrase = document.getElementById("battle-button"); // create element to apply an event listener to
const outputElement = document.getElementById("random-sentence"); // create element for generating random phrase
const strikeButton = document.getElementById("strike-button"); // create element to apply event listener to
let input = document.querySelector("#answer");
let serPoints = document.getElementById("correct");
let estarPoints = document.getElementById("incorrect");

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
    ];
let correctValue = null; 
let incorrectValue = null; 
// creates event listener on click of "battle" button
generatePhrase.addEventListener("click", displayRandomPhrase)

/**generates random phrase in the html file from phrases array */
function displayRandomPhrase(event) {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * randomPhrases.length);
    outputElement.textContent = randomPhrases[randomIndex].phrase;
    console.log(randomPhrases[randomIndex]);
}

strikeButton.addEventListener("click", checkAnswer)


// if user input is equal to correctAnswer; displays correct and generates serPoints
// if user input is not equal to correctAnswer; displays incorrect and generates estarPoints
function checkAnswer(event) {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * randomPhrases.length);
    correctValue = randomPhrases[randomIndex].correctAnswer;
    incorrectValue = randomPhrases[randomIndex].incorrectAnswer;
    if (input.value.toLowerCase() === correctValue) {
        outputElement.textContent = "Muy bien";
        console.log("Muy bien")
    } else if (input.value.toLowerCase() === incorrectValue) {
        outputElement.textContent = "No es correcto";
        console.log("no es correcto")
    }
}

// function generatePoints: 
// deciphers if input is correct verb,
// generates random phrases upon successful user input of verbs,
// increases ser points if correct,
// increases estar points if incorrect

// when ser points = 100, produce "you won the battle" message and produce re-play button,
// if estar points reach 100, produce "you lost the battle" message and provide re-start button

//wait for DOM to be loaded before running the game

// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByClassName("button");

//     for (let button of buttons) {
//         button.addEventListener("click", function () {

//         })
//     }
// })



function findCorrectAnswer() {

}

function incrementSerPoints() {

}

function incrementEstarPoints() {

}
