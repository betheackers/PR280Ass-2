ReactDOM.render(
  <App />
  document.getElementById('app')
)

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      calc: new CorrelationDetermination()
    }

  }

  render () {
    return (
      <div>
        <div>Hello</div>
      </div>
    )
  }
}
