const numberElement = document.getElementById('animatedNumber');
const projectnumber = document.getElementById("projectNumer")
const awardnumber = document.getElementById("awardnumber")
const solidnumber = document.getElementById("solidnumber")
const year = document.querySelector(".year")


const date = new Date().getFullYear()

function yearget(){
    year.textContent=date
}
yearget()
const targetNumber = 5000;

const animationDuration = 2000;

const animationSteps = 30;

const increment = targetNumber / animationSteps;

let currentNumber = 0;

function updateNumber() {
    if (currentNumber < targetNumber) {
        currentNumber += increment;
        numberElement.textContent = Math.round(currentNumber);
        setTimeout(updateNumber, animationDuration / animationSteps);
    } else {
        numberElement.textContent = targetNumber;
    }
}

updateNumber();

const projenumber=44;
const animationDuration2 = 2000;

const animationSteps2 = 30;
const increment2 = projenumber / animationSteps2;

let currentNumber2 = 0;

function projectnumbers(){
    if(currentNumber2< projenumber){
        currentNumber2+= increment2
        projectnumber.textContent =Math.round(currentNumber2);
        setTimeout(projectnumbers, animationDuration2 / animationSteps2);
    }else {
        projectnumber.textContent = projenumber;
    }
}
projectnumbers()

const targetNumber3 = 50;

const animationDuration3=2000;

const animationSteps3 = 30;

const increment3 = targetNumber3 / animationSteps3;

let currentNumber3 = 0;

function proje(){
    if(currentNumber3<targetNumber3){
        currentNumber3 += increment3
        awardnumber.textContent = Math.round(currentNumber3)
        setTimeout(proje, animationDuration3 / animationSteps3);
    }else{
        awardnumber.textContent = targetNumber3
    }
}
proje()
