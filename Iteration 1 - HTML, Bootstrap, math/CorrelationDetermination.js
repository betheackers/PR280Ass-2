class CorrelationDetermination {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.sumX = 0
    this.sumY = 0
    this.sumXSquared = 0
    this.sumYSquared = 0
    this.sumArrayTimesArray = 0
    this.sumArrayTimesArray = 0
    this.sumXTimesSumY = 0
    this.squaredArray = []
    this.topRow = 0
    this.bottomRow = 0
    this.leftbottom = 0
    this.rightbottom = 0
    this.xAndY = 0
  }
  getSum(total, num) {
    return total + num;
  }
  sumArray (array) {
    return array.reduce(getSum)
  }
  arraySquare(array) { // what do I do here...
    for (let i = 0; i < array.length; i++) {
      this.squaredArray.push(Math.pow(array[i],2))
    }
  }
  arrayTimesArray (array1, array2) {
    let arraysTimed = []
    for (let i = 0; i < array1.length; i++) {
      arraysTimed.push(array1[i] * array2[i])
    }
    return arraysTimed
  }
  sumSquaredArray (array) {
    return this.sumArray(arraySquare(array))
  }
  sumArrTimesArr (x, y) {
    return this.sumArray(arrayTimesArray(x,y))
  }
  sumOfXTimesSumOfY () {
    return sumX * sumY
  }
  nTimesSumArrays (array) {
    return array.length * sumArrayTimesArray
  }
  topRowCalc () {
    this.topRow = nTimesSumArrays(x)-sumXTimesSumY
  }
  leftBottomCalc (x) {
    this.leftbottom = nTimesSquaredSumArrays(x, sumXSquared)-npoweredX
  }
  rightBottomCalc () {
    this.rightbottom = nTimesSquaredSumArrays(y, sumYSquared)-npoweredY
  }
  multiplyXYBottom () {
    this.xAndY = this.leftbottom * this.rightBottom
  }
  bottomRowCalc () {
    return Math.sqrt(xAndY)
  }
  nTimesSquaredSumArrays (array, squaredSumArr) {
    return array.length*squaredSumArr
  }
  square (n) {
    let x = Math.pow(n,2)
    return x
  }
  substraction (a, b) {
    return a - b
  }
}

  // console.log('This is nTimesSquaredSumArrays for x', nTimesSquaredSumArrays(x, sumXSquared))
  // console.log('This is nTimesSquaredSumArrays - npoweredX for x', nTimesSquaredSumArrays(x, sumXSquared)-npoweredX)
  //
  // var leftbottom = nTimesSquaredSumArrays(x, sumXSquared)-npoweredX
  // console.log('this is left bottom of equation', leftbottom)
  //
  // var npoweredY = square(sumY)
  // console.log('This is nTimesSquaredSumArrays for y', nTimesSquaredSumArrays(y, sumYSquared))
  // console.log('This is nTimesSquaredSumArrays - npoweredY for y', nTimesSquaredSumArrays(y, sumYSquared)-npoweredY)
  //
  // var rightbottom = nTimesSquaredSumArrays(y, sumYSquared)-npoweredY
  // var xAndY = leftbottom * rightbottom
  // var bottomRow = Math.sqrt(xAndY)
  // console.log('This is left times right bottom after sqrt which is the bottom row', bottomRow)
  //
  // var r = topRow/bottomRow
  // console.log('R is:', r)
  //
  // var rSquared = square(r)
  // console.log('This is the end', rSquared)
