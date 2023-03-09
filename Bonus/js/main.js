/* 1 creare un array di immagini.
   2 immettere le immagini nel DOM 
   3 creare un ciclo per cui un immagine sostituisca l'altra
   4 creare un due button in cui al click scorre le immagini  avanti e indietro
*/



const imagesList = [
    {
        image: 'img/1.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/2.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/3.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/4.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/5.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


console.log(imagesList);


const sliderDom = document.querySelector('.slider'); // faccio riferimento allo slider

let sliderContent = "";

for (let i = 0; i < imagesList.length; i++) { //introduco le immagini dinamicamente nello slider
    const imageLabel = imagesList[i];
    const imageWrapper = `<div class="images">
                            <img class="photo" src="${imageLabel.image}" alt="immagine"/>
                            <div class="title-text">
                                <h3>${imageLabel.title}</h3>
                                <div>${imageLabel.text}</div>
                            </div>
                          </div> `;

    sliderContent += imageWrapper;   
    console.log ("slider:" + imageWrapper);                      
} 
sliderDom.innerHTML = sliderContent;

//immetto HTML di thumbnails
const thumbDom = document.querySelector('.thumbnails');

let thumbContent = "";


for (let i = 0; i < imagesList.length; i++) { //introduco le immagini dinamicamente nel thumbDom
    const imageLabel = imagesList[i];
    const thumbPhoto = `<img id="button_thumb" class="photo_thumb" src="${imageLabel.image}" alt="immagine"/>`;
    
    thumbContent += thumbPhoto;   
    console.log ("slider:" + thumbDom);                      
} 

thumbDom.innerHTML = thumbContent;


const imagesDom = document.getElementsByClassName('images'); // prendo tutte le immagini
const thumbFilter = document.getElementsByClassName('photo_thumb');
let imageActive = 0;

imagesDom[imageActive].classList.add('show'); // immetto la classe (show) per rendere visibile la prima immagine
thumbFilter[imageActive].classList.add('border_photo');

console.log(thumbFilter);

const buttonThumb = document.getElementById('button_thumb');

buttonThumb.addEventListener('click', 
    function() {
        buttonThumb.classList.add('border_photo');
        thumbFilter[imageActive].classList.remove('border_photo');
    }
)







// creo un ascoltatore di eventi per cliccare sui pulsanti e far slittare la classe (show)
// all'infinito...

const nextDom = document.querySelector('.next')

const prevDom = document.querySelector('.prev')


nextDom.addEventListener('click' , 
    
    function() {
            
        if (imageActive < imagesDom.length - 1) {
            imagesDom[imageActive].classList.remove('show');
            thumbFilter[imageActive].classList.remove('border_photo');
            imageActive++;
            imagesDom[imageActive].classList.add('show');
            thumbFilter[imageActive].classList.add('border_photo');

            console.log (nextDom);
        
        } else if (imageActive == imagesDom.length - 1) {
            imagesDom[imageActive].classList.remove('show');
            thumbFilter[imageActive].classList.remove('border_photo');
            imageActive = 0;
            imagesDom[imageActive].classList.add('show');
            thumbFilter[imageActive].classList.add('border_photo');
        }


    
    }
    
)

prevDom.addEventListener('click' , 

    function() {
        if (imageActive > 0) {
            imagesDom[imageActive].classList.remove('show');
            thumbFilter[imageActive].classList.remove('border_photo');
            imageActive--;
            imagesDom[imageActive].classList.add('show');
            thumbFilter[imageActive].classList.add('border_photo');

        } else if (imageActive == 0) {
            imagesDom[imageActive].classList.remove('show');
            thumbFilter[imageActive].classList.remove('border_photo')
            imageActive = imagesDom.length - 1;
            imagesDom[imageActive].classList.add('show');
            thumbFilter[imageActive].classList.add('border_photo');

        }

    }
)

//Carosello automatico

setInterval(function() {

    if (imageActive < imagesDom.length - 1) {
        imagesDom[imageActive].classList.remove('show');
        thumbFilter[imageActive].classList.remove('border_photo');
        imageActive++;
        imagesDom[imageActive].classList.add('show');
        thumbFilter[imageActive].classList.add('border_photo');

        console.log (nextDom);
    
    } else if (imageActive == imagesDom.length - 1) {
        imagesDom[imageActive].classList.remove('show');
        thumbFilter[imageActive].classList.remove('border_photo');
        imageActive = 0;
        imagesDom[imageActive].classList.add('show');
        thumbFilter[imageActive].classList.add('border_photo');
    }

}, 3000);







