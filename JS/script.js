const { createApp } = Vue;

createApp({
  data() {
    return {
      images: [
        {
          image: 'img/01.webp',
          title: "Marvel's Spiderman Miles Morale",
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        },
        {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        },
        {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        },
        {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      activeIndex : 0,
    };
  },
  methods: {
    previousSlide(){
        if(this.activeIndex === 0){

            this.activeIndex = this.images.length - 1;

        } else {

            this.activeIndex--;
        }
    },
    nextSlide() {

        if(this.activeIndex === this.images.length - 1){

            this.activeIndex = 0

        } else {
            this.activeIndex++;
        }
    },
    goToSlide(slideIndex){
        if(slideIndex >= this.images.length  || slideIndex < 0 ){
            return 0;
        }
            this.activeIndex = slideIndex;
    }
  },
}).mount('#app');

























/*
images.forEach((element, index) => {

    const carousel = document.getElementById("carousel");

    const newDiv = document.createElement("div");
    newDiv.classList.add("h-100")
    newDiv.classList.add("d-none");
    
    if (index === 0) {
        newDiv.classList.remove("d-none");
    }

    // Creato il primo div per metterci l'immagine

        const backgroundDiv = document.createElement("div");

        backgroundDiv.classList.add("background-image");

        backgroundDiv.style.backgroundImage = `url(${element.image})`;

        newDiv.appendChild(backgroundDiv);

    // Creato un secondo div per il titolo e il testo

        const contentDiv = document.createElement("div");

        const titleElement = document.createElement("h2");

        titleElement.textContent = element.title;

        const textElement = document.createElement("p");

        textElement.textContent = element.text;

        contentDiv.appendChild(titleElement);

        contentDiv.appendChild(textElement);

        newDiv.appendChild(contentDiv);

        carousel.appendChild(newDiv);
});

let currentIndex = 0;

let activeDiv = carousel.children[0];

const forwardButton = document.getElementById("right");



forwardButton.addEventListener("click", function(){

    activeDiv.classList.add("d-none");  // Aggiungo la classe "d-none" all'oggetto attuale

    currentIndex++;  // Incremento l'indice corrente
    
    if (currentIndex === images.length) {
      currentIndex = 0;  // Torno al primo oggetto se si raggiunge la fine dell'array
    }
    
    activeDiv = carousel.children[currentIndex];  // Ottengo il nuovo oggetto attuale
    
    activeDiv.classList.remove("d-none");  // Rimuovo la classe "d-none" dal nuovo oggetto attuale

});

const backButton = document.getElementById("left");


backButton.addEventListener("click", function(){

    activeDiv.classList.add("d-none");  // Aggiungo la classe "d-none" all'oggetto attuale

    currentIndex--;  // Decremento l'indice corrente
    
    if (currentIndex < 0) {
      currentIndex = images.length - 1;  // Vado all'ultimo oggetto se si raggiunge l'inizio dell'array
    }
    
    activeDiv = carousel.children[currentIndex];  // Ottengo il nuovo oggetto attuale
    
    activeDiv.classList.remove("d-none");  // Rimuovo la classe "d-none" dal nuovo oggetto attuale
    


});
*/