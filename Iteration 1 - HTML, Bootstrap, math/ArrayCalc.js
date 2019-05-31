class ArrayCalculator {
  constructor (array) {
    this.array = array
    this.sum = 0
    this.squareArray = []
    this.square = 0
    this.sumArraySquared = 0
  }
  getSum(total, num) {
    this.sum = total + num // will this work?
  }
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
