import {Init, ValidateSeed} from "./lib";

const elemToUpdate = document.querySelector('#list');

const urlParams = new URLSearchParams(window.location.search);

// set up seed and display it
const seedStr = urlParams.get('seed');
const seed = ValidateSeed(parseInt(seedStr));
const seedElem = document.querySelector('#bingo-info');
seedElem.innerHTML = `Seed: <strong>${seed}</strong>`;

// persist seed to query string
if (!seedStr) {
    urlParams.set("seed", String(seed));
    window.location.search = urlParams.toString();
}

const items = Init(seed);

for (let i = 1; i < 6; i++) {
    const elemToUpdate = document.querySelector(`#slot${i}`);

    const imgPath = items[i-1].Image;
    if (imgPath) {
        elemToUpdate.innerHTML = `<img src="${imgPath}" />`;
    }

    elemToUpdate.append(`#${i}: ${items[i - 1].Name}`);
}

// configure green / not green
document.querySelectorAll('#bingo tr td:not(.popout):not(#board-popout):not(#bingo-info), #selected td').forEach(el => el.addEventListener('click', () => {
    if (el.classList.contains('greensquare')) {
        el.classList.remove('greensquare');
    } else {
        el.classList.add('greensquare');
    }
}));