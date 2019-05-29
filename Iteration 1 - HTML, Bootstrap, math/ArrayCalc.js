class ArrayCalculator {
  constructor () {
    this.array = []
    this.sum = 0
    this.squareArray = []

  }
  getSum(total, num) {
    return total + num;
  } // not sure how this one works
  sumArray (array) {
    return array.reduce(getSum)
  }
  arraySquare(array) {
    let squaredArray = []
    for (var i = 0; i < array.length; i++) {
      squaredArray.push(Math.pow(array[i],2))
    }
    return squaredArray
  }
  square (n) { // may need to be in other calc
    let x = Math.pow(n,2)
    return x
  }
}
