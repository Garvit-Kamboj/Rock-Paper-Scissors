let pscore = 0;
let cscore = 0;

function playermove(text) {
    'use strict';
    let images = document.querySelectorAll('img');
    let Pimage = images[0];
    if(text){
        Pimage.src = `./Images/${text}.png`;
    }
}

function computermove() {
    'use strict';
    let images = document.querySelectorAll('img');
    let Cimage = images[1];
    let choices = ['Rock', 'Paper', 'Scissor'];
    let random = parseInt(Math.random() * choices.length);
    Cimage.src = `./Images/${choices[random]}.png`;
    return choices[random];
}

function winner(cmove, pmove) {
    'use strict';
    let p_element = document.querySelector('div.player-score > p');
    let c_element = document.querySelector('div.computer-score > p');
    let winner = document.querySelector('div.winner');

    if (pmove != cmove) {
        if ((pmove == 'Rock' && cmove == 'Scissor') || (cmove == 'Rock' && pmove == 'Scissor')) {
            if (pmove == 'Rock' && cmove == 'Scissor') {
                pscore+=1;
                p_element.innerHTML = `<p>${pscore}</p>`;
                winner.innerHTML = '<h2>You won this round</h2>';
            }
            else {
                cscore+=1;
                c_element.innerHTML = `<p>${cscore}</p>`;
                winner.innerHTML = '<h2>Computer won this round</h2>';
            }
        }
        else if ((pmove == 'Rock' && cmove == 'Paper') || (cmove == 'Rock' && pmove == 'Paper')) {
            if (pmove == 'Rock' && cmove == 'Paper') {
                cscore+=1;
                c_element.innerHTML = `<p>${cscore}</p>`;
                winner.innerHTML = '<h2>Computer won this round</h2>';
            }
            else {
                pscore+=1;
                p_element.innerHTML = `<p>${pscore}</p>`;
                winner.innerHTML = '<h2>You won this round</h2>';
            }
        }
        else if ((pmove == 'Paper' && cmove == 'Scissor') || (cmove == 'Paper' && pmove == 'Scissor')) {
            if (pmove == 'Paper' && cmove == 'Scissor') {
                cscore+=1;
                c_element.innerHTML = `<p>${cscore}</p>`;
                winner.innerHTML = '<h2>Computer won this round</h2>';
            }
            else {
                pscore+=1;
                p_element.innerHTML = `<p>${pscore}</p>`;
                winner.innerHTML = '<h2>You won this round</h2>';
            }
        }
    }
    else {
        p_element.innerHTML = `<p>${pscore}</p>`;
        c_element.innerHTML = `<p>${cscore}</p>`;
        winner.innerHTML = '<h2>Match Draw</h2>';
    }
}

function shakeimages(){
    'use strict';
    let images = document.querySelectorAll('img');
    images[0].style.animation = "shakePlayer 2s ease";
    images[1].style.animation = "shakeComputer 2s ease";

    images.forEach((image)=>{
        image.addEventListener('animationend', () => {
            image.style.animation = '';
        })
    })
}

function cleartext(){
    'use strict';
    let winner = document.querySelector('div.winner');
    winner.innerHTML = '<h2>Waiting for results..</h2>';
}

function changetodefault(){
    'use strict';
    let images = document.querySelectorAll('img');
    images[0].src = './Images/Rock.png';
    images[1].src = './Images/Rock.png';
}

function init() {
    'use strict';
    let buttons = document.querySelectorAll('button');
    let Rbutton = buttons[0];
    let Sbutton = buttons[1];
    let Pbutton = buttons[2];

    Rbutton.addEventListener('click', () => {
        setTimeout(() => { playermove(Rbutton.innerText) }, 2000);
        setTimeout(() => { winner(computermove(), Rbutton.innerText) }, 2000);
        cleartext();
        changetodefault();
        shakeimages();
    });


    Sbutton.addEventListener('click', () => {
        setTimeout(() => { playermove(Sbutton.innerText) }, 2000);
        setTimeout(() => { winner(computermove(), Sbutton.innerText) }, 2000);
        cleartext();
        changetodefault();
        shakeimages();
    });


    Pbutton.addEventListener('click', () => {
        setTimeout(() => { playermove(Pbutton.innerText) }, 2000);
        setTimeout(() => { winner(computermove(), Pbutton.innerText) }, 2000);
        cleartext();
        changetodefault();
        shakeimages();
    });
}

window.onload = init;

