let randomPhrases = [
    serPhrases: [
        "Yo soy/estoy alto.", 
        "Tú eres/estás gracioso.", 
        "El perro es/está grande.", 
        "Nosotros somos/estamos una familia.",
        "Los museos son/están interesantes.",
        "Yo soy/estoy abogado.",
        "Tu eres/estás profesor.",
        "Mi hermana es/está dentista.",
        "Mis padres son/están doctores.",
        "Yo soy/estoy una persona muy amable."
        "Mi madre es/está tán simpática.",
        "Vosotros sois/estáis guapos.",
        "Tu eres/estás muy delgado.",
        "Mis abuelos son/están generosos.",
        "¿Qué hora son? - es/está la una de la tarde.",
        "¿Qué hora son? - son/están las diez de la noche."
        "¿Qué hora son? - son/están las ocho de la mañana.",
        "Yo soy/estoy de Inglaterra.",
        "Tú eres/estás de Venezuela.",
        "Esta falda es/está de México.",
        "Nostros somos/estamos de Francia.",
        "Mis padres son/están de los Estados Unidos.",
        "Yo soy/estoy tu amigo.",
        "Él es/está mi hermano.",
        "Nosotros somos/estamos una familia",
        "Ellos son/están mis padres."
    ]
    estarPhrases: [
        "La farmácia es/está cerca.",
        "El banco es/está en frente del gimnasio.",
        "Soy/estoy detrás de la mesa.",
        "Mis gafas son/están debajo de la silla.",
        "Yo soy/estoy en el sur de Inglaterra.",
        "Mi profe es/está en el colegio.",
        "Mi madre es/está en el pueblo.",
        "¿Sois/estáis en la fiesta?",
        "Mis amigos son/están de vacaciones.",
        "Yo soy/estoy hablando con mi amiga.",
        "¿Eres/estás comiendo con nosotros?",
        "Mi padre es/está trabajando ahora.",
        "Mis amigos y yo somos/estamos dando un paseo.",
        "Mis padres son/están aprendiendo español.",
        "Soy/estoy muy cansado.",
        "Es/está un poco enfermo.",
        "Somos/estamos llenos de energia.",
        "Mis perros son/están durmiendo.",
        "Hoy, soy/estoy muy contenta.",
        "Mi hermano es/está triste.",
        "Por qué sois/estáis enfedados?",
        "Los niños son/están emocionantes.",
    ]
];

const serConjugations = ["soy", "eres", "es", "somos", "sois", "son"];
const estarConjugations = ["estoy", "estás", "está", "estamos", "estáis", "están"];

// function generateFirstPhrase,
// produces random phrase from array in #random-sentence p section

function generateFirstPhrase() {
    let phrase = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
    document.getElementById("random-sentence").textContent = phrase;
}

// function generatePoints: 
// deciphers if input is correct verb,
// generates random phrases upon successful user input of verbs,
// increases ser points if correct,
// increases estar points if incorrect

// when ser points = 100, produce "you won the battle" message and produce re-play button,
// if estar points reach 100, produce "you lost the battle" message and provide re-start button