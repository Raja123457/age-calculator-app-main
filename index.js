let day_input = document.getElementById('day');
let month_input = document.getElementById('month');
let year_input = document.getElementById('year');


let day_output = document.getElementById('DD');
let month_output = document.getElementById('MM');
let year_output = document.getElementById('YY');

let form = document.querySelector('form');

form.addEventListener('submit', hanleSumit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const input = document.querySelectorAll('input');
    let validator = true;
    input.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.backgroundColor = 'red';
            parent.querySelector('small').innerText = 'this field is required.';
            validator = false;
        } else if (month_input.value > 12) {
            month_input.style.backgroundColor = 'red';
            month_input.parentElement.querySelector('small').innerText = 'must be a valid month.';
            validator = false;
        } else if (day_input.value > 31) {
            day_input.style.backgroundColor = 'red';
            day_input.parentElement.querySelector('small').innerText = 'must be a valid day.';
            validator = false;
        }
        else {
            i.style.backgroundColor = 'black';
            parent.querySelector('small').innerText = '';
            validator = true;
        }
    });
    return validator;
}

function hanleSumit(e) {
    e.preventDefault();
    if (validate()) {
        if (day_input.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        } if (month_input.value > month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - day_input.value;
        const m = month - month_input.value;
        const y = year - year_input.value;

        day_output.innerHTML = d;
        month_output.innerHTML = m;
        year_output.innerHTML = y;


    }
}