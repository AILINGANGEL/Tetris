import _ from 'lodash';
import './styles/index.css';
import printMe from './print.js';

// function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('red');

//     btn.innerHTML = 'Click me and check the console';
//     btn.onclick = printMe;

//     element.appendChild(btn);

//     return element;
// }

function main() {
    let gameBox = document.getElementById('game-box');

    // let fragment = document.createDocumentFragment();
    let squareHtml = '';
    const LEN = '20px';
    const HNUM = 12;
    const VNUM = 25;
    for (let i = 0; i < HNUM; i++) {
        for (let j = 0; j < VNUM; j++) {
            squareHtml += `<div class="square" style="width:${LEN};height:${LEN}"></div>`;
        }
    }
    gameBox.innerHTML = squareHtml;

}

main();
// document.body.appendChild(component());

function Teris() {

}