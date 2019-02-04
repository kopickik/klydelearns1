'use strict'

const loadImage = require( './load-image.js' )

let addImg = (src) => {
  let imgEl = document.createElement('img')
  imgEl.src = src
  document.body.appendChild(imgEl)
}

Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg')
]).then(images => {
  images.forEach(img => addImg(img.src))
})