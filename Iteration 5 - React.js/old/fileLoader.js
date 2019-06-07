
class FileLoader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {content: ''}

    this.onFileChange = this.onFileChange.bind(this)
  }

  onFileChange (e) {
    let files = e.target.files
    if (files.length) {
      this.loadNumbers(files[0])
    }
  }

  loadNumbers (file) {

    let reader = new window.FileReader()

    reader.onload = (e) => {
      this.props.dataUpdated(e.target.result.trim().split(/\s+/g).map(Number))
    }

    reader.readAsText(file)

    }
    render() {
      let style = { backgroundColor:"red" }
      return (<div className="container" style={ style }>
        <input type='file' onChange={this.onFileChange} />
        </div>)
    }
}
