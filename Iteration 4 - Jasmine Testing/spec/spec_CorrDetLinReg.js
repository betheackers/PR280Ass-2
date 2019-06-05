  /*
    Root Describe
    Cheat sheet located at https://devhints.io/jasmine
  */


  describe('Game One Testing', () =>{
    describe('Vue: gameone', () => {
      it('Should be correctly registered as a global component', () => {
        expect(gameone).toBeDefined() // access local component
      }) // it => Should be correctly registered as a global component
    }) // Game 1 describe
    describe('Disable Input Function', () => {
      it('disableInput function should be defined', () => {
        expect(typeof gameone.disableInput).toBeDefined()
      })
      it('should be a function', () => {
        expect(typeof gameone.computed.disableInput).toBe('function')
      })
    })
    describe('variables', () => {
      it('should have correct initialisation `data`', () => {
        expect(typeof gameone.data).toEqual('function')
        const data = gameone.data()
        expect(data.input).toEqual('')
        expect(data.letterCount).toEqual(0)
      })
    })
  }) // Root of Game 1 Describe

  describe('Game Two Testing', () => {
    describe('Vue: gametwo', () => {
      it('should be correctly registered as a global component', () => {
        expect(typeof gametwo).toBeDefined() // access global component
      })
    }) // it => Should be correctly registered as a global component
    describe('variables', () => {
      it('should have correct initialization `data`', () => {
        expect(typeof gametwo.data).toEqual('function')
        const data = gametwo.data()
        expect(data.targetLetter).toEqual('')
        expect(data.input).toEqual('')
        expect(data.letterCount).toEqual(0)
        expect(data.nextChar).toEqual('')
        expect(data.previousInput).toEqual('')
      })
    })
    describe ('disableInput', () => {
      it('disableInput function should be defined', () => {
      expect(typeof gameone.disableInput).toBeDefined()
      })
      it('should be a function', () => {
        expect(typeof gametwo.computed.disableInput).toBe('function')
      })
    })
    describe('Vue', () => {
      it('should render all correct functions', () => {
        expect(gametwo.methods.output).toBeDefined()
        expect(gametwo.methods.countLetters).toBeDefined()
        expect(gametwo.methods.parseInput).toBeDefined()
        expect(gametwo.methods.enterTargetLetter).toBeDefined()
      })
    })
    describe('Test of AAB', () => {
      it('should be correct target letter count of 2', () => {
        //beforeEach(function(){ DOES NOT WORK
          const elem = document.createElement('div')
          elem.appendChild(document.createElement('gametwo'))
          const vm = new Vue({
            el: elem
          })
          console.log(elem)
          console.log(vm)
          let letter1, letter2, letter3;
          letter1 = 'a'
          // vm.$options.components.__proto__.gametwo.options.data.targetLetter = letter1
          vm.$children['0']._data.targetLetter = letter1
          letter2 = 'a'
          letter3 = 'b'
          vm.$children['0']._data.input = letter1 + letter2 + letter3
          console.log(vm)
          vm.$children['0'].output()
        //})
        expect(vm.$children['0']._data.letterCount).toBe(2)
        // expect(vm.$options.components.__proto__.gametwo.options.data.letterCount).toBe(2)
      })
    })
    describe('Test of TEST', () => {
      it('should be correct target letter count of 2', () => {
          const elem = document.createElement('div')
          elem.appendChild(document.createElement('gametwo'))
          const vm = new Vue({
            el: elem
          })
          console.log(elem)
          console.log(vm)
          let letter1, letter2, letter3, letter4
          letter1 = 'T'
          // vm.$options.components.__proto__.gametwo.options.data.targetLetter = letter1
          vm.$children['0']._data.targetLetter = letter1
          letter2 = 'E'
          letter3 = 'S'
          letter4 = 'T'
          vm.$children['0']._data.input = letter1 + letter2 + letter3 + letter4
          console.log(vm)
          vm.$children['0'].output()
        expect(vm.$children['0']._data.letterCount).toBe(2)
        // expect(vm.$options.components.__proto__.gametwo.options.data.letterCount).toBe(2)
      })
    })
    describe('Test of BUBBLE', () => {
      it('should be correct target letter count of 3', () => {
          const elem = document.createElement('div')
          elem.appendChild(document.createElement('gametwo'))
          const vm = new Vue({
            el: elem
          })
          console.log(elem)
          console.log(vm)
          let letter1, letter2, letter3, letter4, letter5, letter6
          letter1 = 'B'
          // vm.$options.components.__proto__.gametwo.options.data.targetLetter = letter1
          vm.$children['0']._data.targetLetter = letter1
          letter2 = 'U'
          letter3 = 'B'
          letter4 = 'B'
          letter5 = 'L'
          letter6 = 'E'
          vm.$children['0']._data.input = letter1 + letter2 + letter3 + letter4
          console.log(vm)
          vm.$children['0'].output()
        expect(vm.$children['0']._data.letterCount).toBe(3)
        // expect(vm.$options.components.__proto__.gametwo.options.data.letterCount).toBe(2)
      })
    })
  })  // end of Game 2 describe

  describe('Game Three Testing', () => {
    describe('Vue: gamethree', () => {
      it('should be correctly registered as a global component', () => {
        expect(typeof gamethree).toBeDefined() // access global component
      })
    }) // it => Should be correctly registered as a global component
    describe('variables', () => {
      it('should have correct initialization `data`', () => {
        expect(typeof gamethree.data).toEqual('function')
        const data = gamethree.data()
        expect(data.positiveNumbers).toEqual(null)
        expect(data.negativeNumbers).toEqual(null)
        expect(data.zeroes).toEqual(null)
        expect(data.input).toEqual(null)
        expect(data.nextNumber).toEqual(null)
        expect(data.rogue).toEqual(999)
        expect(data.previousInput).toEqual('')
      })
    })
    describe ('disableInput', () => {
      it('function should be defined', () => {
      expect(typeof gamethree.disableInput).toBeDefined()
      })
      it('should be a function', () => {
        expect(typeof gamethree.computed.disableInput).toBe('function')
      })
    })
    describe('Vue', () => {
      it('should render all correct functions', () => {
        expect(gamethree.methods.output).toBeDefined()
        expect(gamethree.methods.parseInput).toBeDefined()
        expect(gamethree.methods.countPositive).toBeDefined()
        expect(gamethree.methods.countNegative).toBeDefined()
        expect(gamethree.methods.countZeroes).toBeDefined()
        expect(gamethree.methods.onEnter).toBeDefined()
      })
      it('they should be all be functions', () => {
        expect(typeof gamethree.methods.output).toBe('function')
        expect(typeof gamethree.methods.parseInput).toBe('function')
        expect(typeof gamethree.methods.countPositive).toBe('function')
        expect(typeof gamethree.methods.countNegative).toBe('function')
        expect(typeof gamethree.methods.countZeroes).toBe('function')
        expect(typeof gamethree.methods.onEnter).toBe('function')
      })
    })
    describe('Test of 0, 9, -1', () => {
      it('should be show zeroes as 1, negative as 1 and positive as 1', () => {
          // set variables
          const elem31 = document.createElement('div')
          elem31.appendChild(document.createElement('gamethree'))
          const vm3 = new Vue({
            el: elem31
          })
          let number1, number2, number3
          let accessData = vm3.$children['0']._data
          let accessMethods = vm3.$children['0']
          number1 = 0
          number2 = 9
          number3 = -1

          // input data THEN run output()
          accessData.nextNumber = number1
          vm3.$children['0']._data.input = accessData.nextNumber
          accessMethods.output()
          accessData.nextNumber = number2
          vm3.$children['0']._data.input = accessData.nextNumber
          accessMethods.output()
          accessData.nextNumber = number3
          vm3.$children['0']._data.input = accessData.nextNumber
          accessMethods.output()

          console.log(vm3)

        // expectations
        expect(vm3.$children['0']._data.zeroes).toBe(1)
        expect(vm3.$children['0']._data.positiveNumbers).toBe(1)
        expect(vm3.$children['0']._data.negativeNumbers).toBe(1)

      })
    })
    describe('Test of 999', () => {
      it('should disable input box', () => {
        // set variables
        const elem32 = document.createElement('div')
        elem32.appendChild(document.createElement('gamethree'))
        const vm3 = new Vue({
          el: elem32
        })
        let number = 999
        let accessData = vm3.$children['0']._data
        let accessMethods = vm3.$children['0']

        // input data
        accessData.nextNumber = number
        accessMethods.parseInput()

        console.log(vm3)

      // expectations
      expect(accessMethods.disableInput).toBe(true)
      })
    })
  })  // end of Game 3 describe

  describe('Game Four Testing', () => {
    describe('Vue: gamefour', () => {
      it('should be correctly registered as a global component', () => {
        expect(typeof gamefour).toBeDefined() // access global component
      })
    }) // it => Should be correctly registered as a global component
    describe('variables', () => {
      it('should have correct initialization `data`', () => {
        expect(typeof gamefour.data).toEqual('function')
        const data = gamefour.data()
        expect(data.oldInput).toEqual('')
        expect(data.input).toEqual(null)
        expect(data.nextNumber).toEqual(null)
        expect(data.rogue).toEqual(999)
        expect(data.previousInput).toEqual(null)
      })
    })
    describe ('disableInput', () => {
      it('function should be defined', () => {
      expect(typeof gamefour.disableInput).toBeDefined()
      })
      it('should be a function', () => {
        expect(typeof gamefour.computed.disableInput).toBe('function')
      })
    })
    describe('Vue', () => {
      it('should render all correct functions', () => {
        expect(gamefour.methods.output).toBeDefined()
        expect(gamefour.methods.parseInput).toBeDefined()
        expect(gamefour.methods.countDouble).toBeDefined()
        expect(gamefour.methods.onEnter).toBeDefined()
      })
      it('they should be all be functions', () => {
        expect(typeof gamefour.methods.output).toBe('function')
        expect(typeof gamefour.methods.parseInput).toBe('function')
        expect(typeof gamefour.methods.countDouble).toBe('function')
        expect(typeof gamefour.methods.onEnter).toBe('function')
      })
    })
    describe('Test of 1, 3, 6, 12, 23', () => {
      it('should return 2', () => {
          // set variables
          const elem41 = document.createElement('div')
          elem41.appendChild(document.createElement('gamefour'))
          const vm4 = new Vue({
            el: elem41
          })
          let number1, number2, number3, number4, number5
          let accessData = vm4.$children['0']._data
          let accessMethods = vm4.$children['0']
          number1 = 1
          number2 = 3
          number3 = 6
          number4 = 12
          number5 = 23

          // input data THEN run output()
          accessData.nextNumber = number1
          vm4.$children['0']._data.input = accessData.nextNumber
          accessMethods.output()
          accessData.nextNumber = number2
          vm4.$children['0']._data.input = accessData.nextNumber
          accessMethods.output()
          accessData.nextNumber = number3
          vm4.$children['0']._data.input = accessData.nextNumber
          accessMethods.output()
          accessData.nextNumber = number4
          vm4.$children['0']._data.input = accessData.nextNumber
          accessMethods.output()
          accessData.nextNumber = number5
          vm4.$children['0']._data.input = accessData.nextNumber
          accessMethods.output()

          console.log(vm4)

        // expectations
        expect(vm4.$children['0']._data.counter).toBe(2)

      })
    })
    describe('Test of 1, 2, 999', () => {
      it('should return 1 and then disable input box', () => {
        // set variables
        const elem42 = document.createElement('div')
        elem42.appendChild(document.createElement('gamefour'))
        const vm4 = new Vue({
          el: elem42
        })
        let number1 = 1
        let number2 = 2
        let number3 = 999
        let accessData = vm4.$children['0']._data
        let accessMethods = vm4.$children['0']

        // input data
        accessData.nextNumber = number1
        accessMethods.parseInput()
        accessMethods.output()
        accessData.nextNumber = number2
        accessMethods.parseInput()
        accessMethods.output()
        accessData.nextNumber = number3
        accessMethods.parseInput()

        console.log(vm4)

      // expectations
      expect(vm4.$children['0']._data.counter).toBe(1)
      expect(accessMethods.disableInput).toBe(true)
      })
    })
  })  // end of Game 4 describe

  describe('Game Five Testing', () => {
    describe('Vue: gamefive', () => {
      it('should be correctly registered as a global component', () => {
        expect(typeof gamefive).toBeDefined() // access global component
      })
    }) // it => Should be correctly registered as a global component
    describe('variables', () => {
      it('should have correct initialization `data`', () => {
        expect(typeof gamefive.data).toEqual('function')
        const data = gamefive.data()
        expect(data.input).toEqual(null)
        expect(data.previousInput).toEqual([])
        expect(data.nextNumber).toEqual(null)
        expect(data.rogue).toEqual(999)
        expect(data.sequenceNumbers).toEqual(false)
        expect(data.end).toEqual(false)
      })
    })
    describe ('disableInput', () => {
      it('function should be defined', () => {
      expect(typeof gamefive.disableInput).toBeDefined()
      })
      it('should be a function', () => {
        expect(typeof gamefive.computed.disableInput).toBe('function')
      })
    })
    describe('Vue', () => {
      it('should render all correct functions', () => {
        expect(gamefive.methods.addToArray).toBeDefined()
        expect(gamefive.methods.parseInput).toBeDefined()
        expect(gamefive.methods.checkSequence).toBeDefined()
        expect(gamefive.methods.onEnter).toBeDefined()
        expect(gamefive.methods.output).toBeDefined()
      })
      it('they should be all be functions', () => {
        expect(typeof gamefive.methods.addToArray).toBe('function')
        expect(typeof gamefive.methods.parseInput).toBe('function')
        expect(typeof gamefive.methods.checkSequence).toBe('function')
        expect(typeof gamefive.methods.onEnter).toBe('function')
        expect(typeof gamefive.methods.output).toBe('function')
      })
    })
    describe('Test of 1, 3, 6, 12, 23, 999', () => {
      it('should return numbers are in sequence', () => {
          // set variables
          const elem51 = document.createElement('div')
          elem51.appendChild(document.createElement('gamefive'))
          const vm5 = new Vue({
            el: elem51
          })
          let number1, number2, number3, number4, number5, number6
          let accessData = vm5.$children['0']._data
          let accessMethods = vm5.$children['0']
          // let inputData = vm5.$children['0']._data.input
          number1 = 1
          number2 = 3
          number3 = 6
          number4 = 12
          number5 = 23
          number6 = 999

          // input data THEN run output()
          accessData.nextNumber = number1
          accessMethods.parseInput()
          accessData.nextNumber = number2
          accessMethods.parseInput()
          accessData.nextNumber = number3
          accessMethods.parseInput()
          accessData.nextNumber = number4
          accessMethods.parseInput()
          accessData.nextNumber = number5
          accessMethods.parseInput()
          accessData.nextNumber = number6
          accessMethods.parseInput()

          console.log(vm5)

        // expectations
        expect(vm5.$children['0']._data.sequenceNumbers).toBe(true)
        console.log(vm5.$children['0']._data.sequenceNumbers)

      })
    })
    describe('Test of 1, 2, 1, 999', () => {
      it('should return numbers are not in sequence', () => {
        // set variables
        const elem52 = document.createElement('div')
        elem52.appendChild(document.createElement('gamefive'))
        const vm5 = new Vue({
          el: elem52
        })
        let number1 = 1
        let number2 = 2
        let number3 = 1
        let number4 = 999
        let accessData = vm5.$children['0']._data
        let accessMethods = vm5.$children['0']

        // input data
        accessData.nextNumber = number1
        accessMethods.parseInput()
        accessData.nextNumber = number2
        accessMethods.parseInput()
        accessData.nextNumber = number3
        accessMethods.parseInput()
        accessData.nextNumber = number4
        accessMethods.parseInput()

        console.log(vm5)

      // expectations
      expect(vm5.$children['0']._data.sequenceNumbers).toBe(false)
      console.log(vm5.$children['0']._data.sequenceNumbers)
      })
    })
  })  // end of Game 4 describe
