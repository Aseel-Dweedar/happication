// get elements by id
const villaContainer = document.getElementById('villaContainer');

// random number function
function randomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// create constrictor function
function Villas(thumbnails, villaName, location, features, price, capacity, extraImg) {
    this.thumbnails = thumbnails;
    this.villaName = villaName;
    this.location = location;
    this.features = features;
    this.price = price;
    this.capacity = capacity;
    this.extraImg = extraImg;
    Villas.all.push(this);
}
Villas.all = [];

// get random price between 120 - 200 Jd
Villas.prototype.getPrice = function() {
    this.price = randomIntInclusive(120, 200);
}

// function to empty Container
function clearContainer() {
    villaContainer.innerHTML = '';
}

// write render function
function render() {

    // // loop every class
    for (let i = 0; i < Villas.all.length; i++) {

        // // // add div fot every single villa
        let oneVilla = document.createElement('div');
        villaContainer.appendChild(oneVilla);

        // // // add thumbnail Img 
        let thumbnailImg = document.createElement('img');
        oneVilla.appendChild(thumbnailImg);
        thumbnailImg.src = Villas.all[i].thumbnails;

        // // // add div for villa info
        let infoContainer = document.createElement('div');
        oneVilla.appendChild(infoContainer);

        let nameDiv = document.createElement('h1');
        infoContainer.appendChild(nameDiv);
        nameDiv.textContent = Villas.all[i].villaName;

        let locationDiv = document.createElement('p');
        infoContainer.appendChild(locationDiv);
        locationDiv.textContent = `LOCATION: ${Villas.all[i].location}`;

        let featuresDiv = document.createElement('p');
        infoContainer.appendChild(featuresDiv);
        featuresDiv.textContent = `ADDITIONAL FEATURES: ${Villas.all[i].features}`;

        let priceDiv = document.createElement('p');
        infoContainer.appendChild(priceDiv);
        priceDiv.textContent = `PRICE: ${Villas.all[i].price}`;

        let capacityDiv = document.createElement('p');
        infoContainer.appendChild(capacityDiv);
        capacityDiv.textContent = `CAPACITY: ${Villas.all[i].capacity}`;

        let bookNowDiv = document.createElement('button');
        infoContainer.appendChild(bookNowDiv);
        bookNowDiv.textContent = 'BOOK NOW';

        let showMoreDiv = document.createElement('button');
        infoContainer.appendChild(showMoreDiv);
        showMoreDiv.textContent = 'SHOW MORE';
        showMoreDiv.className = 'ShowMoreDiv'

        // // // add extra Img Container div
        let extraImgContainer = document.createElement('div');
        infoContainer.appendChild(extraImgContainer);
        extraImgContainer.className = 'extraImgContainer';

        // // // loop extra img render
        for (let j = 0; j < Villas.all[i].extraImg.length; j++) {
            let extraImgOne = document.createElement('img');
            extraImgContainer.appendChild(extraImgOne);
            extraImgOne.src = Villas.all[i].extraImg[j];
        }

        // // // show more/show less function
        // // // // get all extraImgContainer and all howMoreDiv by class name
        let allExtraImgContainer = document.getElementsByClassName('extraImgContainer')
        let allShowMoreDiv = document.getElementsByClassName('ShowMoreDiv')

        // // // // onclick function (if it more or less)
        showMoreDiv.onclick = function showMore() {

            if (extraImgContainer.style.display === 'none') {
                for (let j = 0; j < allExtraImgContainer.length; j++) {
                    allExtraImgContainer[j].style.display = 'none'
                    allShowMoreDiv[j].textContent = 'SHOW MORE'
                }
                extraImgContainer.style.display = 'block';
                showMoreDiv.textContent = 'SHOW LESS'
            } else {
                extraImgContainer.style.display = 'none';
                showMoreDiv.textContent = 'SHOW MORE';
            }
        }

        bookNowDiv.onclick = function showMore() {
            let bookedVilla = [Villas.all[i].thumbnails, Villas.all[i].villaName];
            localStorage.setItem('bookedVilla', JSON.stringify(bookedVilla));
            window.location = ('../html/formBooking.html');
        }

        // // //give class multi class name for main div (element.classList.add("active", "highlighted"))
        // // //give class name for every div
    }
}

// add every villa to main constrictor
function addVillas() {

    let mariam = new Villas('../img/villas/Mariam/thum.jpeg', 'MARIAM VILLA', 'Amman', 'barbecue, Heated swimming pool, children Swimming pool, Jacuzzi, Air-conditioned rooms, Sun loungers, DJ, janitor,  Children play area, WIFI, table tennis.', 0, '1-9', ["../img/villas/Mariam/1 (3).jpg", "../img/villas/Mariam/1 (3).jpeg", "../img/villas/Mariam/1 (4).jpg"]);
    mariam.getPrice();

    let switchVilla = new Villas('../img/villas/Switch Villa/thum.jpg', 'SWITCH VILLA', 'Amman', 'barbecue, football stadium, Children play area,  Air-conditioned rooms, DJ, WIFI, barbecue, Play Station, External headphones , Sun loungers', 0, '1-9', ["../img/villas/Switch Villa/1 (1).jpg", "../img/villas/Switch Villa/1 (3).jpg", "../img/villas/Switch Villa/1 (4).jpg"]);
    switchVilla.getPrice();

    let philadelphia = new Villas('../img/villas/Philadelphia/thum.jpg', 'PHILADELPHIA VILLA', 'Amman', 'barbecue, Heated swimming pool, Sun loungers, children Swimming pool, Children play area.', 0, '10-19', ["../img/villas/Philadelphia/1 (1).jpg", "../img/villas/Philadelphia/1 (2).jpg", "../img/villas/Philadelphia/1 (4).jpg"]);
    philadelphia.getPrice();

    let skyVillage = new Villas('../img/villas/Sky village/thum.jpg', 'SKY VILLAGE VILLA', 'Amman', 'barbecue, children Swimming pool, table tennis, External headphones.', 0, '10-19', ["../img/villas/Sky village/1 (3).jpg", "../img/villas/Sky village/1 (4).jpg", "../img/villas/Sky village/1 (7).jpg"]);
    skyVillage.getPrice();

    let mountain = new Villas('../img/villas/mountain/thum.jpg', 'MOUNTAIN VILLA', 'Amman', 'Heated swimming pool, Sun loungers, table tennis, Play Station, WIFI, External headphones,barbecue.', 0, '20-50', ["../img/villas/mountain/1 (1).jpg", "../img/villas/mountain/1 (4).jpg", "../img/villas/mountain/1 (5).jpg"]);
    mountain.getPrice();

    let teresa = new Villas('../img/villas/Teresa Chalet/thum.jpeg', 'TERESA CHALET VILLA', 'Salt', 'barbecue, children Swimming pool, Air-conditioned rooms, Jacuzzi, Children play area, DJ,Sun loungers, Play Station,WIFI.', 0, '1-9', ["../img/villas/Teresa Chalet/1 (4).jpeg", "../img/villas/Teresa Chalet/1 (5).jpeg", "../img/villas/Teresa Chalet/1 (9).jpeg"]);
    teresa.getPrice();

    let zaid = new Villas('../img/villas/Zaid/thum.jpg', 'ZAID VILLA', 'Salt', 'barbecue, Children play area, DJ, football stadium, Heated swimming pool, Sun loungers,table tennis, Play Station, WIFI.', 0, '1-9', ["../img/villas/Zaid/1 (5).jpg", "../img/villas/Zaid/1 (7).jpg", "../img/villas/Zaid/1 (1).jpg"]);
    zaid.getPrice();

    let adam = new Villas('../img/villas/adam/thum.jpg', 'ADAM VILLA', 'Salt', 'barbecue, Heated swimming pool, Play Station.', 0, '10-19', ["../img/villas/adam/1.jpg", "../img/villas/adam/3.jpg", "../img/villas/adam/9.jpg"]);
    adam.getPrice();

    let paradise = new Villas('../img/villas/paradise/thum.jpg', 'PARADISE VILLA', 'Salt', 'barbecue, children Swimming pool, Air conditioned rooms, Jacuzzi, Children play area, Sun loungers, table tennis, Play Station.', 0, '10-19', ["../img/villas/paradise/3.jpg", "../img/villas/paradise/7.jpg", "../img/villas/paradise/9.jpg"]);
    paradise.getPrice();

    let sawa = new Villas('../img/villas/sawa/thum.jpg', 'SAWA VILLA', 'Salt', 'barbecue, children Swimming pool, Air-conditioned rooms, Jacuzzi, Children play area, Play Station', 0, '20-50', ["../img/villas/sawa/1.jpg", "../img/villas/sawa/5.jpg", "../img/villas/sawa/7.jpg"]);
    sawa.getPrice();

    let wings = new Villas('../img/villas/wings/thum.jpg', 'WINGS VILLA', 'Irbid', 'barbecue, DJ, Heated swimming pool, External headphones‏, Heated swimming pool, Sun loungers.', 0, '1-9', ["../img/villas/wings/1.jpg", "../img/villas/wings/4.jpg", "../img/villas/wings/7.jpg"]);
    wings.getPrice();

    let yafa = new Villas('../img/villas/yafa/thum.jpg', 'YAFA VILLA', 'Irbid', 'Sun loungers, Air-conditioned rooms, WIFI, barbecue, table tennis, DJ, Play Station,External headphones', 0, '1-9', ["../img/villas/yafa/1.jpg", "../img/villas/yafa/3.jpg", "../img/villas/yafa/4.jpg"]);
    yafa.getPrice();

    let yalla = new Villas('../img/villas/yalla/thum.jpg', 'YALLA VILLA', 'Irbid', 'children Swimming pool, Sun loungers, Air-conditioned rooms, barbecue, Play Station, WIFI, External headphones, DJ, Billiard, Jacuzzi, table tennis ', 0, '1-9', ["../img/villas/yalla/1.jpg", "../img/villas/yalla/2.jpg", "../img/villas/yalla/3.jpg"]);
    yalla.getPrice();

    let dream = new Villas('../img/villas/Dream/thum.jpg', 'DREAM VILLA', 'Irbid', 'Air-conditioned rooms, DJ, WIFI, barbecue, Play Station, External headphones, Children play area, Sun loungers', 0, '10-19', ["../img/villas/Dream/1 (7).jpg", "../img/villas/Dream/1 (14).jpg", "../img/villas/Dream/1 (4).jpg"]);
    dream.getPrice();

    let eva = new Villas('../img/villas/Eva Farm/thum.jpg', 'EVA VILLA', 'Irbid', 'Air-conditioned rooms,barbecue, Children play area, DJ, Heated swimming pool, Sun loungers, table tennis, Play Station, WIFI, External headphones', 0, '20-50', ["../img/villas/Eva Farm/1 (5).jpg", "../img/villas/Eva Farm/1 (6).jpg", "../img/villas/Eva Farm/1 (7).jpg"]);
    eva.getPrice();

    let deer = new Villas('../img/villas/Deer/thum.jpg', 'DEER VILLA', 'Jerash', 'Air-conditioned rooms,barbecue, Jacuzzi, Children play area, DJ, Sun loungers, Heated swimming pool, Play Station, WIFI, External headphones', 0, '1-9', ["../img/villas/Deer/1 (5).jpg", "../img/villas/Deer/1 (6).jpg", "../img/villas/Deer/1 (7).jpg"]);
    deer.getPrice();

    let bird = new Villas('../img/villas/bird/thum.jpg', 'BIRD VILLA', 'Jerash', 'External headphones, barbecue, Air-conditioned rooms, Sun loungers,DJ, WIFI,', 0, '10-19', ["../img/villas/bird/1 (1).jpg", "../img/villas/bird/1 (5).jpg", "../img/villas/bird/1 (4).jpg"]);
    bird.getPrice();

    let byblos = new Villas('../img/villas/Byblos/thum.jpg', 'BYBLOS VILLA', 'Jerash', 'External headphones, barbecue, Air-conditioned rooms, Sun loungers,DJ, WIFI', 0, '10-19', ["../img/villas/Byblos/1 (2).jpg", "../img/villas/Byblos/1 (4).jpg", "../img/villas/Byblos/1 (5).jpg"]);
    byblos.getPrice();

    let farah = new Villas('../img/villas/Farah/thum.jpg', 'FARAH VILLA', 'Jerash', 'External headphones, barbecue, Air-conditioned rooms, Sun loungers,DJ, WIFI', 0, '20-50', ["../img/villas/Farah/1 (1).jpg", "../img/villas/Farah/1 (4).jpg", "../img/villas/Farah/1 (7).jpg"]);
    farah.getPrice();

    let hawaii = new Villas('../img/villas/Hawaii/thum.jpg', 'HAWAII VILLA', 'Jerash', 'Air-conditioned rooms, DJ, WIFI, barbecue, Play Station, External headphones, childrens play area, Sun loungers', 0, '20-50', ["../img/villas/Hawaii/1 (2).jpg", "../img/villas/Hawaii/1 (4).jpg", "../img/villas/Hawaii/1 (12).jpg"]);
    hawaii.getPrice();
}
addVillas()

// save & get random price
function saveData() {
    localStorage.setItem('allVillas', JSON.stringify(Villas.all))
}

function getData() {
    let data = JSON.parse(localStorage.getItem('allVillas'))
    if (data) {
        Villas.all = data
    }
}
getData()

// invoking all functions
function doAll() {
    clearContainer()
    render()
    saveData()
}
doAll()