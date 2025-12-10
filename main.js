/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

//SCALE
// Stap 1: querySelector selecteer de link die je wilt aanpassen 
// let scaleLink = document.querySelector...
let scaleLink = document.querySelector('a[href="#frontend"]')

// Stap 2: addEventListener
// scaleLink.addEventListener...
scaleLink.addEventListener('click', function() {

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...
scaleLink.classList.toggle('scale')
});


//TRANSLATE
// stap 1: querySelector de link die je wilt aanpassen
let translateLink = document.querySelector('a[href="#and"]')

// stap 2: wachten op de klik 
translateLink.addEventListener('click', function(){
  // stap 3: verschuiven van link &
  translateLink.classList.toggle('translate')
})

//SHAKE
//selecteer link
let shakeLink = document.querySelector('a[href="#development"]')
//event is dubbel klikken
shakeLink.addEventListener('dblclick', function() {

//laat link shaken
shakeLink.classList.add('shake')
})



