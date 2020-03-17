const getBeerBtnElement = document.getElementById("getBeer");
const getDrinksBtnElement = document.getElementById("getDrinks");
const getRTDBtnElement = document.getElementById("getRTD");
const getShotsBtnElement = document.getElementById("getShots");

getBeerBtnElement.addEventListener("click", getBeer);
getDrinksBtnElement.addEventListener("click", getDrinks);
getRTDBtnElement.addEventListener("click", getRTD);
getShotsBtnElement.addEventListener("click", getShots);

function getBeer() {
    fetch('https://api.myjson.com/bins/1ed5tm')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="display-4 mb-4">Newest Beer Prices</h2>';
            data.forEach(function (beer) {
                output += `
              <ul class="list-group mb-3">
                <li class="list-group-item"><strong>Product:</strong> ${beer.product}</li>
                <li class="list-group-item"><img class="img-fluid img" width="50%" src=${beer.image} alt="basement"></li>
                <li class="list-group-item"><strong>Litre:</strong> ${beer.litre}</li>
                <li class="list-group-item"><strong>Price:</strong> ${beer.prices}</li>
              </ul>
            `;
            })
            document.getElementById('output').innerHTML = output;
        })
}

function getDrinks() {
    fetch('https://api.myjson.com/bins/17c8vu')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="display-4 mb-4">Newest Drink Prices</h2>';
            data.forEach(function (drinks) {
                output += `
              <ul class="list-group mb-3">
                <li class="list-group-item"><strong>Product:</strong> ${drinks.product}</li>
                <li class="list-group-item"><img class="img-fluid img" width="50%" src=${drinks.image} alt="basement"></li>
                <li class="list-group-item"><strong>Price:</strong> ${drinks.prices}</li>
                <li class="list-group-item"><strong>2 for:</strong> ${drinks.for}</li>
              </ul>
            `;
            })
            document.getElementById('output').innerHTML = output;
        })
}

function getRTD() {
    fetch('https://api.myjson.com/bins/ruz5m')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="display-4 mb-4">Newest RTD Prices</h2>';
            data.forEach(function (RTD) {
                output += `
              <ul class="list-group mb-3">
                <li class="list-group-item"><strong>Product:</strong> ${RTD.product}</li>
                <li class="list-group-item"><img class="img-fluid img" width="50%" src=${RTD.image} alt="basement"></li>
                <li class="list-group-item"><strong>Price:</strong> ${RTD.prices}</li>
              </ul>
            `;
            })
            document.getElementById('output').innerHTML = output;
        })
}

function getShots() {
    fetch('https://api.myjson.com/bins/vtyj6')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="display-4 mb-4">Newest Shots Prices</h2>';
            data.forEach(function (shots) {
                output += `
              <ul class="list-group mb-3">
                <li class="list-group-item"><strong>Product:</strong> ${shots.product}</li>
                <li class="list-group-item"><img class="img-fluid img" width="50%" src=${shots.image} alt="basement"></li>
                <li class="list-group-item"><strong>Price:</strong> ${shots.prices}</li>
                <li class="list-group-item"><strong>More:</strong> ${shots.more}</li>
              </ul>
            `;
            })
            document.getElementById('output').innerHTML = output;
        })
}