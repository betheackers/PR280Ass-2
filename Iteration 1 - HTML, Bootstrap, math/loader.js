// https://codepen.io/Anveio/pen/XzYBzX
// https://stackoverflow.com/questions/13729301/html5-file-api-how-to-see-the-result-of-readastext

var FileLoader = new Vue({
  template: `<div class="row">
                <div class="col-sm">
                <h2>Select your text file</h2>
                <input type="file" @change="onFileChange" multiple>
                  <br />
                  <br />
                  {{content}}
                </div>
                <div class="col-sm">
                  <br />
                  <br />
                  {{secondContent}}
                </div>
            </div>`,
  el: '#appFileLoader',
  data: {
    content: '',
    secondContent: '',
    firstFileLoaded: false
  },


  methods: {
    onFileChange(e) {
      let files = e.target.files
      if (files.length) {
        this.loadFile(files[0])
        this.firstFileLoaded = true
        this.loadFile(files[1])
      }
    },
    loadFile(file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        if (this.firstFileLoaded === false) {
          this.content = e.target.files[0]
        } else {
          this.secondContent = e.target.files[1]
          console.log(this.secondContent)
        }
      }
      reader.readAsText(file)
    }
  }
})

// handleChange: function (e) {
//   let [x, y] = e.target.files
//   let obj = {x,y} // inits iterator object
//   for (let key in obj) {
//     let reader = new FileReader()
//     reader.onload = (e) => {
//       console.log(e.target.result)
//       this.arrs[key] = e.target.result.split(/\s+/g).map(val => parseInt(val))
//     }
//     reader.readAsText(obj[key])
//   }
// }
