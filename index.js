let btn = document.getElementById('button');
let num = document.getElementById('num');
let result = document.getElementById('result');
let day = new Date().getDate();

function calc() {
    let priceDay = num.value / 30
    result.innerHTML = Math.round(priceDay * (30 - day + 1));
}

btn.addEventListener('click', calc)