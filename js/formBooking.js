function getData() {
    let newData = JSON.parse(localStorage.getItem('bookedVilla'));
    return newData;
}
getData()

console.log(getData());