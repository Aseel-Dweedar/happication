"use strict";

const form = document.getElementById('form')
const villaInfo = document.getElementById('villaInfo')
const model = document.getElementById('model')
const closeBtn = document.getElementById('closeBtn')

function getData() {

    let newData = JSON.parse(localStorage.getItem('bookedVilla'));

    let villaName = document.createElement('h1');
    villaInfo.appendChild(villaName);
    villaName.textContent = newData[0];

    let villaPrice = document.createElement('p');
    villaInfo.appendChild(villaPrice);
    villaPrice.textContent = `This cottage price is ${newData[1]}JD/per day.`;

    let completing = document.createElement('p');
    villaInfo.appendChild(completing);
    completing.textContent = 'To complete your reservation, please complete the form next to picture:'

    let thumbnail = document.createElement('img');
    villaInfo.appendChild(thumbnail);
    thumbnail.src = newData[2];
}
getData()

form.addEventListener('submit', function confirmationFunction(event) {
    event.preventDefault();
    model.style.display = 'block'
    closeBtn.onclick = function() {
        model.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === model) {
            model.style.display = "none";
        }
    }
});