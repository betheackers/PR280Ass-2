// https://codepen.io/Anveio/pen/XzYBzX
// https://stackoverflow.com/questions/13729301/html5-file-api-how-to-see-the-result-of-readastext

var FileLoader = new Vue({
  template: `<div class="row">
                <div class="col-sm">
                  <h2>Select your first text file</h2>
                  <input type="file" @change="onFileChange">
                  <br />
                  <br />
                  {{content}}
                </div>
                <div class="col-sm">
                  <h2>Select a second text file</h2>
                  <input type="file" @change="onFileChange">
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
        this.loadNumbers(files[0])
      }
    },
    loadNumbers(file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        if (this.firstFileLoaded === false) {
          this.content = e.target.result
          this.firstFileLoaded = true
        } else {
          this.secondContent = e.target.result
        }
      }
      reader.readAsText(file)
    }
  }
})

//Chris' uploader
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
