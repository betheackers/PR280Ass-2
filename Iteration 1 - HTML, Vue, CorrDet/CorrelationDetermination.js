class CorrelationDetermination {
  constructor(x = [], y = []) {
    this.x = x
    this.y = y
    this.sumX = 0
    this.sumY = 0
    this.sumXSquared = 0
    this.sumYSquared = 0
    this.sumArrayTimesArray = 0
    this.sumXTimesSumY = 0
    this.squaredArray = []
    this.topRow = 0
    this.bottomRow = 0
    this.npoweredX = 0
    this.npoweredY = 0
    this.leftbottom = 0
    this.rightbottom = 0
    this.xAndY = 0
  }
  calcCorrelation() {
    let result = 0

    this.sumX = this.sumArray(this.x)
    this.sumY = this.sumArray(this.y)
    console.log('This is sumX', this.sumX)

    this.sumArrayTimesArray = this.sumArray(this.arrayTimesArray(this.x, this.y))
    console.log('This is sumX', this.sumArrayTimesArray)

    this.sumXTimesSumY = this.sumX * this.sumY
    console.log('This is sumXTimesSumY', this.sumXTimesSumY)

    this.topRowCalc()
    console.log('This is topRow', this.topRow)

    this.npoweredX = this.square(this.sumX)
    console.log('this is npoweredX', this.npoweredX)
    this.npoweredY = this.square(this.sumY)
    console.log('this is npoweredY', this.npoweredY)
    this.sumXSquared = this.sumArray(this.arraySquare(this.x))
    console.log('This is sumXSquared', this.sumXSquared)
    this.leftBottomCalc(this.x)
    console.log('This is leftbottom', this.leftbottom)

    
    this.sumYSquared = this.sumArray(this.arraySquare(this.y))
    console.log('This is sumYSquared', this.sumYSquared)


    this.rightBottomCalc(this.y)
    console.log('This is rightbottom', this.rightbottom)
    this.multiplyXYBottom()
    console.log('This is xAndY', this.xAndY)
    this.bottomRowCalc()
    console.log('This is bottomRow', this.bottomRow)

    this.r = this.topRow / this.bottomRow
    result = this.square(this.r)
    console.log(result)
    return result
  }
  getSum(total, num) {
    return total + num;
  }
  sumArray (array) {
    // console.log(array)
    return array.reduce(this.getSum)
    // console.log(array)
  }
  arrayTimesArray (array1, array2) {
    let arraysTimed = []
    for (let i = 0; i < array1.length; i++) {
      arraysTimed.push(array1[i] * array2[i])
    }
    return arraysTimed
  }
  arraySquare (array) {
    for (let i = 0; i < array.length; i++) {
      this.squaredArray.push(Math.pow(array[i],2))
    }
    return this.squaredArray
  }
  nTimesSumArrays (array) {
    return array.length * this.sumArrayTimesArray
  }
  topRowCalc () {
    this.topRow = this.nTimesSumArrays(this.x)-this.sumXTimesSumY
  }
  leftBottomCalc (x) {
    this.leftbottom = this.nTimesSquaredSumArrays(x, this.sumXSquared)-this.npoweredX
  }
  rightBottomCalc (y) {
    this.rightbottom = this.nTimesSquaredSumArrays(y, this.sumYSquared)-this.npoweredY
  }
  multiplyXYBottom () {
    this.xAndY = this.leftbottom * this.rightBottom
  }
  bottomRowCalc () {
    this.bottomRow = Math.sqrt(this.xAndY)
  }
  nTimesSquaredSumArrays (array, squaredSumArr) {
    return array.length* squaredSumArr
  }
  square (n) {
    let x = Math.pow(n,2)
    return x
  }
}
// subtraction (a, b) {
  //   return a - b
  // }
// sumSquaredArray (array) {
//   return this.sumArray(arraySquare(array))
// }
// sumArrTimesArr (x, y) {
  //   return this.sumArray(arrayTimesArray(x,y))
  // }
  // sumOfXTimesSumOfY () {
    //   return sumX * sumY
    // }
