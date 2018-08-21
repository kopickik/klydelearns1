const _ = require('lodash')

const boxarts = [
    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
]

function reduceBoxarts(boxarts) {
    return _
        .map(boxarts, (boxart) => boxart.url)
        .reduce((acc, curr) => {
            if (acc.width * acc.height > curr.width * curr.height) {
                return acc
            } else {
                return curr
            }
        })
}

console.log(reduceBoxarts(boxarts));
