/* global LinearRegression CorrelationDetermination */
/* eslint no-unused-vars: "off" */
/* eslint no-undef: "off" */
class LinearRegression extends CorrelationDetermination {
  constructor (x = [], y = []) {
    super()
    this.x = x
    this.y = y
    this.regression = []
    this.xAverage = 0
    this.yAverage = 0
    this.betaOne = 0
    this.betaZero = 0
    this.topRowLR = 0
    this.bottomRowLR = 0
  }
  calcRegression () {
    this.calcCorrelation()
    this.xAverage = this.average(this.x)
    console.log(this.xAverage)
    this.yAverage = this.average(this.y)
    console.log(this.yAverage)
    console.log(this.sumArrayTimesArray)
    this.topRowCalcLR()
    this.bottomRowCalcLR()
    this.betaOneCalc()
    this.betaZeroCalc()
    this.regression.push(this.betaOne, this.betaZero)
    console.log(this.regression)
    return this.regression
  }
  topRowCalcLR () {
    this.topRowLR = this.sumArrayTimesArray - ((this.x.length) * (this.average(this.x)) * (this.average(this.y)))
    console.log(this.topRowLR)
  }
  average (array) {
    let result = this.sumArray(array) / array.length
    return result
  }
  bottomRowCalcLR () {
    this.bottomRowLR = this.sumXSquared - (this.x.length * Math.pow(this.average(this.x), 2))
  }
  betaOneCalc () {
    this.betaOne = this.topRowLR / this.bottomRowLR
    console.log(this.betaOne)
  }
  betaZeroCalc () {
    this.betaZero = this.yAverage - this.betaOne * this.xAverage
    console.log(this.betaZero)
  }
}
