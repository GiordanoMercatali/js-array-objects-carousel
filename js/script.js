const itemsElem  = document.querySelector(".items");
const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

let curImageIndex = 0;

let curInterval;

const intervalDuration = 3000;

for (let i = 0; i < images.length; i++) {
    
    console.log(images[i]);

    itemsElem.innerHTML += `<div class="item"><img src="${images[i]}" alt=""></div>`
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