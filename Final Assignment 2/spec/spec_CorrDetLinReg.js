// Jasmine Testing for both CorrelationDetermination and LinearRegression
/* global describe  it expect  CorrelationDetermination LinearRegression */
describe('Correlation of Determination Testing', () => {
  describe('Class of CorrelationDetermination', () => {
    it('should be defined', () => {
      expect(typeof CorrelationDetermination).toBeDefined()
    })
  })
  describe('CorrelationDetermination', () => {
    it('should have variables', () => {
      let x = []
      let y = []
      let corrDet = new CorrelationDetermination(x, y)
      expect(corrDet.x).toEqual([])
      expect(corrDet.y).toEqual([])
      expect(corrDet.sumX).toEqual(0)
      expect(corrDet.sumY).toEqual(0)
      expect(corrDet.sumXSquared).toEqual(0)
      expect(corrDet.sumYSquared).toEqual(0)
      expect(corrDet.sumArrayTimesArray).toBe(0)
      expect(corrDet.sumXTimesSumY).toEqual(0)
      expect(corrDet.topRow).toEqual(0)
      expect(corrDet.bottomRow).toEqual(0)
      expect(corrDet.leftbottom).toBe(0)
      expect(corrDet.rightbottom).toEqual(0)
      expect(corrDet.xAndY).toEqual(0)
      expect(corrDet.r).toBe(0)
    })
  })
  describe('CorrelationDetermination', () => {
    it('should have functions', () => {
      let x = []
      let y = []
      let corrDet = new CorrelationDetermination(x, y)
      expect(corrDet.calcCorrelation).toBeDefined()
      expect(corrDet.getSum).toBeDefined()
      expect(corrDet.sumArray).toBeDefined()
      expect(corrDet.arrayTimesArray).toBeDefined()
      expect(corrDet.arraySquare).toBeDefined()
      expect(corrDet.nTimesSumArrays).toBeDefined()
      expect(corrDet.topRowCalc).toBeDefined()
      expect(corrDet.leftBottomCalc).toBeDefined()
      expect(corrDet.rightBottomCalc).toBeDefined()
      expect(corrDet.multiplyXYBottom).toBeDefined()
      expect(corrDet.bottomRowCalc).toBeDefined()
      expect(corrDet.nTimesSquaredSumArrays).toBeDefined()
      expect(corrDet.square).toBeDefined()
    })
  })
  describe('Sum Array', () => {
    it('should return correctly', () => {
      let x = [ 83, 116, 186, 81, 114 ]
      let y = [ 11.2, 9.3, 21.6, 6.9, 10.2 ]
      let corrDet = new CorrelationDetermination(x, y)
      let sumX = corrDet.sumArray(x)
      let sumY = corrDet.sumArray(y)
      expect(sumX).toBeCloseTo(580)
      expect(sumY).toBeCloseTo(59.2)
    })
  })
  // Tests performed first via https://ncalculators.com/statistics/r-squared-calculator.htm
  describe('Correlation function testing 1', () => {
    it('should return correctly', () => {
      let x = [ 83, 116, 186, 81, 114 ]
      let y = [ 11.2, 9.3, 21.6, 6.9, 10.2 ]
      let corrDet = new CorrelationDetermination(x, y)
      corrDet.calcCorrelation()
      expect(corrDet.square(corrDet.r)).toBeCloseTo(0.8313, 4)
      // let result = corrDet.calcCorrelation();
      // console.log(result)
      // expect(result.toBeCloseTo(0.8312640410860297))
    })
  })
  describe('Correlation function testing 2', () => {
    it('should return correctly', () => {
      let x = [ 160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503 ]
      let y = [ 186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601 ]
      let corrDet = new CorrelationDetermination(x, y)
      corrDet.calcCorrelation()
      expect(corrDet.square(corrDet.r)).toBeCloseTo(0.9957, 4)
    })
  })
})
describe('Linear Regression Testing', () => {
  describe('Class of LinearRegression', () => {
    it('should be defined', () => {
      expect(typeof LinearRegression).toBeDefined()
    })
  })
  describe('LinearRegression', () => {
    it('should have variables', () => {
      let x = []
      let y = []
      let linReg = new LinearRegression(x, y)
      expect(linReg.x).toEqual([])
      expect(linReg.y).toEqual([])
      expect(linReg.regression).toEqual([])
      expect(linReg.xAverage).toEqual(0)
      expect(linReg.yAverage).toEqual(0)
      expect(linReg.betaOne).toEqual(0)
      expect(linReg.betaZero).toBe(0)
      expect(linReg.topRowLR).toEqual(0)
      expect(linReg.bottomRowLR).toEqual(0)
    })
  })
  describe('LinearRegression', () => {
    it('should have functions', () => {
      let x = []
      let y = []
      let linReg = new LinearRegression(x, y)
      expect(linReg.calcRegression).toBeDefined()
      expect(linReg.topRowCalcLR).toBeDefined()
      expect(linReg.average).toBeDefined()
      expect(linReg.bottomRowCalcLR).toBeDefined()
      expect(linReg.betaOneCalc).toBeDefined()
      expect(linReg.betaZeroCalc).toBeDefined()
    })
  })

  // Tests performed first via: https://www.socscistatistics.com/tests/regression/default.aspx
  describe('Regression array 1', () => {
    it('should return correctly', () => {
      let x = [ 83, 116, 186, 81, 114 ]
      let y = [ 11.2, 9.3, 21.6, 6.9, 10.2 ]
      let linReg = new LinearRegression(x, y)
      linReg.calcRegression()
      expect(linReg.betaOne).toBeCloseTo(0.12199, 5)
      expect(linReg.betaZero).toBeCloseTo(-2.31046, 5)
    })
  })
  describe('Regression array 2', () => {
    it('should return correctly', () => {
      let x = [ 160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503 ]
      let y = [ 186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601 ]
      let linReg = new LinearRegression(x, y)
      linReg.calcRegression()
      expect(linReg.betaOne).toBeCloseTo(1.09135, 5)
      expect(linReg.betaZero).toBeCloseTo(38.00519, 5)
    })
  })
})
