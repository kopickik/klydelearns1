function loadImage(url, callback) {
  return new Promise((resolve, reject) => {
    let image = new Image()

    image.onload = () => resolve(image)

    image.onerror = () => {
      let message = `Could not load image at ${url}`
      reject(new Error(msg))
    }

    image.src = url
  })
}

module.exports = loadImage