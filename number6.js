let array = [1, 4, 7, 9, 12];

let filteredArray = array.filter(number => {
    return number > 2 && number < 15;
});

console.log(filteredArray);