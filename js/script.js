const itemsElem  = document.querySelector(".items");
const newImages = [];
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let curImageIndex = 0;

let curInterval;

const intervalDuration = 3000;

for (let i = 0; i < images.length; i++) {
    
    console.log(images[i]);

    itemsElem.innerHTML += `<div class="item"><img src="${images[i].image}" alt=""></div>`
};

const itemElem = document.querySelectorAll(".item");
console.log(itemElem);

itemElem[curImageIndex].classList.add("active");

startTimer();

document.getElementById("next-btn").addEventListener("click", pressNextBtn);

document.getElementById("prev-btn").addEventListener("click", pressPrevBtn);

document.getElementById("item-hover").addEventListener("mouseover", pauseTimer);
document.getElementById("item-hover").addEventListener("mouseout", startTimer);


function pressNextBtn(){

        clearInterval(curInterval);
        curInterval = setInterval(pressNextBtn, intervalDuration);
        
        itemElem[curImageIndex].classList.remove("active");
        if (curImageIndex >= images.length - 1){
            curImageIndex = 0;
            itemElem[curImageIndex].classList.add("active");}
        else{
            curImageIndex++;
            itemElem[curImageIndex].classList.add("active");
        }
          
}

function pressPrevBtn(){

    clearInterval(curInterval);
    curInterval = setInterval(pressNextBtn, intervalDuration);

    itemElem[curImageIndex].classList.remove("active");
        if (curImageIndex <= 0){
            curImageIndex = images.length - 1;
            itemElem[curImageIndex].classList.add("active");}
        else{
            curImageIndex--;
            itemElem[curImageIndex].classList.add("active");
        }
        
}


function startTimer(){
    console.log("Start");
    if (curInterval === undefined){
        curInterval = setInterval(pressNextBtn, intervalDuration);
    }
}

function pauseTimer(){
    clearInterval(curInterval);
    curInterval = undefined;
    console.log("Pause");
}