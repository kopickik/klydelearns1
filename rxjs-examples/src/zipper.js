const _ = require('lodash')

const videos = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/654356453",
        "rating": 5.0,
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/65432445",
        "rating": 4.0,
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/675465",
        "rating": 5.0,
    }
]

const bookmarks = [
    {id: 470, time: 23432},
    {id: 453, time: 234324},
    {id: 445, time: 987834},
    {id: 465, time: 84256}
];

// For each video and bookmark pair, create a {videoId, bookmarkId} pair
// and add it to the videoIdAndBookmarkIdPairs array.

function useZip (arrayA, arrayB) {
    let videoIdAndBookmarkPairs = []
    _.zipWith(arrayA, arrayB, (vid, bkmk) => {
        videoIdAndBookmarkPairs.push({videoId: vid.id, bookmarkId: bkmk.id})
    })
    return videoIdAndBookmarkPairs
}

console.log(useZip(videos, bookmarks))
