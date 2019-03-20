(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function loadImage(url, callback) {
  return new Promise((resolve, reject) => {
    let image = new Image()

    image.onload = () => resolve(image)

    image.onerror = () => {
      let message = `Could not load image at ${url}`
      reject(new Error(message))
    }

    image.src = url
  })
}

module.exports = loadImage

},{}],2:[function(require,module,exports){
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
},{"./load-image.js":1}]},{},[2]);
