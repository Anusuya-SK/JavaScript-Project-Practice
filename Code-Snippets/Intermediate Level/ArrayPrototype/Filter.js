Array.prototype.myFilter = (callback) => {
    let result = [];
    for(let i=0; i<this.length; i++){

    }
    return result;
}

const numbers = [1, 2, 3];
const filtered = numbers.myFilter(num => num > 1);
console.log(filtered); // [2, 3]