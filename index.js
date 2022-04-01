let saveCount = document.getElementById("save-count");
let inCounter = document.getElementById("in-counter");
let count = 0;


function increment() {
    count += 1;
    inCounter.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveCount.textContent += countStr;
    inCounter.textContent = 0;
    count = 0;
}