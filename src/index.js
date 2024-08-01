module.exports = function reverse (n) {
    // function reverse (n) {
    if (n<0){
        n = -1*n;
    }
    n = n.toString()
    return Number(n.split("").reverse().join(""));
}




// console.log(reverse(252))