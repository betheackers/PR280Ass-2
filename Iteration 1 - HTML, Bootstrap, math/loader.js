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
                <div v-if="firstFileLoaded === true" class="col-sm">
                  <h2 >Select a second text file</h2>
                  <input type="file" @change="onFileChange">
                  <br />
                  <br />
                  {{secondContent}}
                </div>
            </div>`,
  el: '#appFileLoader',
  data: {
    content: [],
    secondContent: [],
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
          console.log(e.target.result)
          this.content += e.target.result.split(/\s+/g)
          console.log(this.content)
          this.firstFileLoaded = true
        } else {
          this.secondContent += e.target.result.split(/\s+/g)
        }
      }
      reader.readAsText(file)
    }
  }
})
