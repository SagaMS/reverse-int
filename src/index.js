module.exports = function reverse (n) {
  
    n = n.toString()
    return Number(n.split("").reverse().join(""));
}




