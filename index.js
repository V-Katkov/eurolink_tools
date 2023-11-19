let btn = document.getElementById('button');
let num = document.getElementById('num');
let result = document.getElementById('result');
let day = new Date().getDate();

function calc() {
    if (num.value < 0) {
        result.innerHTML = 'Невірний формат тарифу'
    } else {
        let priceDay = num.value / 30
        if (day == 31) {
            day -= 1;
        };
        result.innerHTML = `-${Math.round(priceDay * (30 - day + 1))} грн.`;
    }
}

btn.addEventListener('click', calc)