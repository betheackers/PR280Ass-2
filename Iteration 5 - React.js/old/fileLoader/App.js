import React from 'react';
import logo from './logo.svg';
import './App.css';
import CorrelationDetermination from './CorrelationDetermination'
import FileLoader from './fileLoader'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      calcComplete: false,
      arrayX: [],
      arrayY: [],
      correlationDetResult:0
    }
    this.firstDataUpdated=this.firstDataUpdated.bind(this)
    this.secondDataUpdated=this.secondDataUpdated.bind(this)

  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.state.calcComplete) {
      if (this.state.arrayX.length > 0  && this.state.arrayY.length > 0) {
        this.performCorDet()
      }
    }
  }
  performCorDet() {
    let calc = new CorrelationDetermination(this.state.arrayX, this.state.arrayY)
    let result = calc.calcCorrelation()
    console.log(result)
    this.setState({
      correlationDetResult:result,
      calcComplete:true
    })
  }

  firstDataUpdated(firstArray) {
    this.setState({arrayX:firstArray})
  }
  secondDataUpdated(secondArray) {
    this.setState({arrayY:secondArray})
  }
  render () {
    return (
      <div>
        <FileLoader dataUpdated={this.firstDataUpdated}/>
        <FileLoader dataUpdated={this.secondDataUpdated}/>
        {this.state.arrayX}
        <br />
        {this.state.arrayY}
        <br />
        {this.state.calcComplete && <h3>the correlation of determination is {this.state.correlationDetResult}</h3>}
      </div>
    )
  }
}

export default App;
