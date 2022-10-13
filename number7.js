let array = [1, 4, 7, 9, 12];

let filteredArrayCount = array.filter(number => {
    return number > 2 && number < 15;
}).length;

console.log(filteredArrayCount);