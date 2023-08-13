let day = document.getElementById('quantity');
day.addEventListener("input", calculateResult);
let month = document.getElementById('month');
month.addEventListener("input", calculateResult);
let year = document.getElementById('year');
year.addEventListener("input", calculateResult);

const result1 = document.getElementById('printDay');
const result2 = document.getElementById('printMonth');
const result3 = document.getElementById('printYear');

const days = new Date();
const d = days.getDate();

const months = new Date();
const m = months.getMonth() + 1;

const years = new Date()
const y = years.getFullYear();

function calculateResult(){
    const inputDay = parseFloat(day.value);
    const dayResult =  d - inputDay;
    const inputMonth = parseFloat(month.value);
    if (inputMonth >= m) {
        monthlyResult = inputMonth - m;
    } else {
        monthlyResult = m - inputMonth;
    }
    const monthResult = monthlyResult ;    
    const inputYear = parseFloat(year.value);
    const yearResult = y - inputYear;

    const con1 = "years";
    const con2 = "days";
    const con3 = "months";

    result1.textContent = `${dayResult} ${con2}`;
    result2.textContent = `${monthResult} ${con3}`;
    result3.textContent = `${yearResult} ${con1}`;

}


