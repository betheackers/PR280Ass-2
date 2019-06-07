  /*
    Root Describe
    Cheat sheet located at https://devhints.io/jasmine
  */
// import calc from './vue-Calc.js'
// import fileLoader from './loader.js'
  describe('Correlation of Determination Testing', () =>{
  const elem = document.createElement('div')
  elem.appendChild(document.createElement('file-loader'))
  elem.appendChild(document.createElement('output-component'))
  const vm = new Vue({
    el: elem,
    components: {
      'file-loader': fileLoader,
      'output-component': outputComponent,
      'calc': calc
    }
  })
  console.log(elem)
  console.log(vm)
  console.log(calc)
  let theCorrDet
  let x = [1,2,3,4,5]
  let y = [6, 7, 8, 9, 10]
  vm.$children['0']._data.firstArray = x
  vm.$children['0']._data.firstFileLoaded = true
  vm.$children['0']._data.secondArray = y
  vm.$children['0'].$emit('get-data', this.firstArray)

  // vm.$children['0']._data.firstFileLoaded = true
  // Test of X & Y loading numbers
  describe('Loading numbers in x', () =>{
    it('should load numbers into table in column X', () => {
      expect()
    })
  })
  describe('Loading numbers in y', () =>{
    it('should load numbers into table in column Y', () => {
      expect()
    })
  })
  // Testing Class Correlation of Determination exists
  describe('Class CorrelationDetermination', () =>{
    it('should exist', () => {
      expect(typeof CorrelationDetermination).toBeDefined()
    })
  // Testing of Initialisation Data in Vue-Calc
  it('should have correct initialization constructor data', () => {
    expect(typeof calc.data).toBeDefined()
    const data = calc.data
    console.log(data)
    expect(data.correlation).toEqual(0)
    expect(data.regression).toEqual(0)
    expect(data.correlationDetResult).toEqual(0)
    expect(data.linearRegResult).toEqual(0)
    expect(data.arrayX).toEqual([])
    expect(data.arrayY).toEqual([])
    expect(data.correlationDetCalculated).toBe(false)
    })
  })

  // Testing of Initialisation Data in Class
  // Testing CD methods exist
  //Testing of Vue-Calc methods
  // Testing of Vue.calcCorrelation()
  // Testing outputComponent
})

// Vue.component('fileLoader', fileLoader)
// Vue.component('outputComponent', outputComponent)
