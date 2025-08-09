// alert("INSURE THAT YOUR INTERNET CONNECTION IS ON : THE CONTENT IS LOAD WHEN THE INTERNET IS ON");


let cardsArray = [
    {
        'name': 'CSS',
        'img': 'https://1000marcas.net/wp-content/uploads/2021/02/CSS-Logo.png',
    },
    {
        'name': 'HTML',
        'img': 'https://cdn.freebiesupply.com/logos/thumbs/2x/html5-logo.png',
    },
    {
        'name': 'jQuery',
        'img': 'https://th.bing.com/th/id/R.450f2b96f7e9a4dd6bd4203e9ae7d6d1?rik=ee9MFIc%2b5y5kAg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fjquery-logo-png--512.png&ehk=0sJi1yTrN7399ERPql%2bPhOYr60Sjbx4adZRmCdmExIM%3d&risl=&pid=ImgRaw&r=0',
    },
    {
        'name': 'JS',
        'img': 'https://logospng.org/download/javascript/logo-javascript-1024.png',
    },
    {
        'name': 'Node',
        'img': 'https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png',
    },
    {
        'name': 'Python',
        'img': 'https://th.bing.com/th/id/R.ff06c339780f23112c1cbbbb284158ff?rik=iHGuA9bCjRi34A&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpython-logo-png--200.png&ehk=UtwJIse2nuvPfybMoZkM6ECUcR7Oy1lT1JnU4FTxPTI%3d&risl=&pid=ImgRaw&r=0',
    }
];


const parentdiv = document.querySelector('#card-section');

// step-2 duplicate the cards
const gameCard = cardsArray.concat(cardsArray);

// step-3 shuffling the cards
// ------------------------------Method 1------------------------
// const myNumbers = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }
// const shuffledChild = myNumbers(gameCard);

//-----------------------------Method 2---------------------
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());


let clickCount = 0;
let firstCard = "";
let secondCard = "";


// styling the matched card
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card-selected');
    card_selected.forEach((curElem) => {
        curElem.classList.add('card-matched');
    })
}


// step-4 selecting card
parentdiv.addEventListener('click', (event) => {
    let curCard = event.target;
    if (curCard.id === "card-section") {//dont add card selected propery to parent div.
        return false;
    }
    //Only 2 item select
    clickCount++;
    if (clickCount < 3) {
        if (clickCount === 1) {
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card-selected');
        }
        else if (clickCount === 2) {
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card-selected');
        }
        if (firstCard !== "" && secondCard !== "") {
            if (firstCard === secondCard) {
                //curCard.classList.add('card-matched');
                setTimeout(() => {
                    card_matches();
                    resetGame();
                }, 1000)

            } else {
                setTimeout(() => {
                    resetGame();
                }, 1000)
            }
        }
    }

})

// step-5 if the cards matches card-matches func--


//step-6 
const resetGame = () => {
    clickCount = 0;
    firstCard = "";
    secondCard = "";

    let card_selected = document.querySelectorAll('.card-selected');
    card_selected.forEach((curElem) => {
        curElem.classList.remove('card-selected');
    })
}

//step-7 add delay 


//step-1 Creating div and appending div to card section and adding imgages and data-name
for (let i = 0; i < shuffledChild.length; i++) {

    const childdiv = document.createElement('div');
    childdiv.classList.add('card');

    childdiv.dataset.name = shuffledChild[i].name; //to give property => data-name : name to the element
    // childdiv.style.backgroundImage = `url(${shuffledChild[i].img})`

    // flip front back divs
    const front_div = document.createElement('div');
    front_div.classList.add('front-card');

    const back_div = document.createElement('div');
    back_div.classList.add('back-card');
    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`


    parentdiv.appendChild(childdiv);

    childdiv.appendChild(front_div);
    childdiv.appendChild(back_div);
}

