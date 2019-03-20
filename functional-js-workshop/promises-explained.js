'use strict'

const loadImage = require( './load-image.js' )

let addImg = (src) => {
  let imgEl = document.createElement('img')
  imgEl.src = src
  document.body.appendChild(imgEl)
}

Promise.all([
  loadImage('images/cat1.png'),
  // loadImage('images/cat2.png'),
  // loadImage('images/cat3.png')
]).then(images => {
  images.forEach(img => addImg(img.src))
})