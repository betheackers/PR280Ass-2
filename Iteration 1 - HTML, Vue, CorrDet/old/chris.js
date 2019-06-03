class ArrayMath extends Array {
  constructor (newArrray = []) {
    super(...newArrray)
  }
  get sum () {
    return new Array(...this).reduce((sum, i) => {
      return sum + i
    }, 0)
  }
  get mean () {
    return this.sum / this.length
  }
  get squareSum () {
    return new Array(...this).reduce((sum, i) => {
      return sum + i ** 2
    }, 0)
  }
  get variance () {
    return this.length * this.squareSum - this.sum ** 2
  }
}

exports.ArrayMath = ArrayMath
const { ArrayMath } = require('./array-math')

class BivariateCalculator {
  constructor (x, y) {
    if (x.length !== y.length) throw new Error('Arrays must have equal length!')
    this.x = new ArrayMath(x)
    this.y = new ArrayMath(y)
  }
  get sumXY () {
    let xy = new ArrayMath()
    for (let i = 0; i < this.x.length; i++) {
      let newVal = this.x[i] * this.y[i]
      xy.push(newVal)
    }
    return xy.sum
  }
  get r () {
    let { x, y, sumXY, scale: n } = this
    return (n * sumXY - x.sum * y.sum) /
      Math.sqrt(x.variance * y.variance)
  }
  get correlation () {
    return this.r ** 2
  }
  get scale () {
    if (this.x.length === this.y.length) return this.x.length
    throw new Error('X and Y should have the same length')
  }
  get beta0 () {
    let { x, y, beta1 } = this
    return y.mean - (beta1 * x.mean)
  }
  get beta1 () {
    let { x, y, sumXY, scale: n } = this
    return (sumXY - n * x.mean * y.mean) /
      (x.squareSum - n * x.mean ** 2)
  }
  predictNextY (nextX) {
    let { beta0, beta1 } = this
    return beta0 + beta1 * nextX
  }
  push (...newValues) {
    for (let [x, y] of newValues) {
      this.x.push(x)
      this.y.push(y)
    }
    return this
  }
}

exports.BivariateCalculator = BivariateCalculator
