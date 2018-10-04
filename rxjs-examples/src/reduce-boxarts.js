const _ = require('lodash')

const boxarts = [
    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
]
// _.reduce boils an array down to a single value
// in this example, the boxart with the largest width x height
function reduceBoxarts(boxarts) {
    return _
        // .map(boxarts, (boxart) => boxart.url)
        .reduce(boxarts, (prev, curr) => {
            if (prev.width * prev.height > curr.width * curr.height) {
                return prev
            } else {
                return curr
            }
        }).url
}

console.log(reduceBoxarts(boxarts));
