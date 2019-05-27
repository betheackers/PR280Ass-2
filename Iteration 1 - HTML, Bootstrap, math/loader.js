// https://codepen.io/Anveio/pen/XzYBzX
// https://stackoverflow.com/questions/13729301/html5-file-api-how-to-see-the-result-of-readastext

var FileLoader = new Vue({
  el: '#app',
  data: {
    content: ''
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
        this.content = e.target.result
      }

      reader.readAsText(file)
    }
  }
})
