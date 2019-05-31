class CorrelationDetermination {
  constructor(x, y) {
    this.topRow = 0
    this.bottomRow = 0
    this.leftbottom = 0
    this.x = x
    this.y = y
    this.xAndY = 0
  }
  topRowCalc () {
    return nTimesSumArrays(x)-sumXTimesSumY
  }
  leftBottomCalc (x) {
    return nTimesSquaredSumArrays(x, sumXSquared)-npoweredX
  }
  rightBottomCalc () {
    return nTimesSquaredSumArrays(y, sumYSquared)-npoweredY
  }
  bottomRowCalc () {
    return Math.sqrt(xAndY)
  }
  multiplyXY (x,y) {
    this.xAndY * y
  }
}
