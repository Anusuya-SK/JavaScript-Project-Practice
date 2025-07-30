// Find the first unique number in an array
// Input: [1,2,2,3,4,3] -> Output: 1

const uniqueNum = arr => {
    return arr.find(item => {
        return arr.filter(x => x === item).length == 1;
    })
}
console.log(uniqueNum([1,2,2,3,4,3])); //Output: 1

//Same as Non-Repeating