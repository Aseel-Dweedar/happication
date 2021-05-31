// id elements by id
const form = document.getElementById('form');
const cottagesList = document.getElementById('cottagesList');

// constrictors function
function Cottage(requestStatus, ownerName, cottageName, location, price) {
    this.requestStatus = requestStatus;
    this.ownerName = ownerName;
    this.cottageName = cottageName;
    this.location = location;
    this.price = price;
    Cottage.all.push(this);
}
Cottage.all = [];

// render function
function render() {

    cottagesList.innerHTML = '';

    for (let i = 0; i < Cottage.all.length; i++) {

        let oneCottage = document.createElement('div')

        cottagesList.appendChild(oneCottage)
        oneCottage.className = 'oneCottage';

        let request = document.createElement('p')
        oneCottage.appendChild(request);
        switch (Cottage.all[i].requestStatus) {
            case 'inProgress':
                request.textContent = "In Progress";
                break;
            case 'Pending':
                request.textContent = "Pending";
                break;
            case 'acceptedP':
                request.textContent = "Accepted Request";
                break;

            default:
                request.textContent = "Un-Categories";
                break;
        }
        request.className = Cottage.all[i].requestStatus;

        let owner = document.createElement('p')
        oneCottage.appendChild(owner);
        owner.textContent = Cottage.all[i].ownerName;

        let cottage = document.createElement('p')
        oneCottage.appendChild(cottage);
        cottage.textContent = `Cottage's name: ${Cottage.all[i].cottageName}`;

        let cottageLocation = document.createElement('p')
        oneCottage.appendChild(cottageLocation);
        cottageLocation.textContent = `Cottage's Location: ${Cottage.all[i].location}`;

        let cottagePrice = document.createElement('p')
        oneCottage.appendChild(cottagePrice);
        cottagePrice.textContent = `Price per day: ${Cottage.all[i].price} JD`;

        if (request.textContent === "Pending") {
            let deleteRequest = document.createElement('button')
            oneCottage.appendChild(deleteRequest);
            deleteRequest.textContent = 'DELETE REQUEST';
            deleteRequest.onclick = function() {
                Cottage.all.splice(i, 1);
                saveData();
                render();
            }
        }
    }
}

// event listener 
form.addEventListener('submit', function formData(event) {
    event.preventDefault();

    let ownerName = form.ownerName.value;
    let cottageName = form.cottageName.value;
    let location = form.location.value;
    let price = form.price.value;

    new Cottage('Pending', ownerName, cottageName, location, price)

    render()
    saveData()
})

// save & get data
function saveData() {
    localStorage.setItem('addCottage', JSON.stringify(Cottage.all))
}

function getData() {
    let addNewCottage = JSON.parse(localStorage.getItem('addCottage'))
    if (addNewCottage) {
        Cottage.all = addNewCottage;
        render()
    } else {
        new Cottage('acceptedP', 'Ahmed Omari', 'Our Nights Villa', 'Jerash', 160)
        new Cottage('acceptedP', 'Dania Soud', 'Viki Rose Villa', 'Madaba', 180)
        new Cottage('inProgress', 'Fayez Dweedar', 'Aqua Day Villa', 'Amman', 250)
        render()
    }
}
getData()