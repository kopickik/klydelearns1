/**
 * Each video has an interesting moments collection. One interesting moment represents a time
 * during which a screenshot is interesting or representative of the title as a whole.
 * Retrieve the time of the middle interesting moment and the smallest
 * box art url simultaneously with zip().
 * Return an {id, title, time, url} object for each video.
 */
const _ = require('lodash')

const movieLists = [{
        name: "New Releases",
        videos: [{
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [{
                        width: 150,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
                    },
                    {
                        width: 200,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
                    }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "interestingMoments": [{
                        type: "End",
                        time: 213432
                    },
                    {
                        type: "Start",
                        time: 64534
                    },
                    {
                        type: "Middle",
                        time: 323133
                    }
                ]
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [{
                        width: 200,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
                    },
                    {
                        width: 140,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
                    }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "interestingMoments": [{
                        type: "End",
                        time: 54654754
                    },
                    {
                        type: "Start",
                        time: 43524243
                    },
                    {
                        type: "Middle",
                        time: 6575665
                    }
                ]
            }
        ]
    },
    {
        name: "Instant Queue",
        videos: [{
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [{
                        width: 130,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
                    },
                    {
                        width: 200,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
                    }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "interestingMoments": [{
                        type: "End",
                        time: 132423
                    },
                    {
                        type: "Start",
                        time: 54637425
                    },
                    {
                        type: "Middle",
                        time: 3452343
                    }
                ]
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [{
                        width: 200,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
                    },
                    {
                        width: 120,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
                    },
                    {
                        width: 300,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
                    }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "interestingMoments": [{
                        type: "End",
                        time: 45632456
                    },
                    {
                        type: "Start",
                        time: 234534
                    },
                    {
                        type: "Middle",
                        time: 3453434
                    }
                ]
            }
        ]
    }
];

const getMiddleInterestingMoment = (movie) => _.reduce(movie.interestingMoments, (prev, curr) => {
    if (prev.type === "Middle") {
        return prev
    } else {
        return curr
    }
}).time

const getSmallestBoxartUrl = (movie) => _.reduce(movie.boxarts, (prev, curr) => {
    if (prev.width * prev.height < curr.width * curr.height) {
        return prev
    } else {
        return curr
    }
}).url

const retrieveMiddleInterestingMomentAndSmallestBoxartUrl = (array1) => {
    let results = []
    let vids = _.flatten(_.map(array1, (l) => l.videos))
    let boxartUrls = _.map(vids, (movie) => getSmallestBoxartUrl(movie))
    let middleMoments = _.map(vids, (movie) => getMiddleInterestingMoment(movie))
    _.map(vids, (vid, i) => {
        results.push({id: vid.id, title: vid.title, time: middleMoments[i], url: boxartUrls[i]})
    })
    return results
}

console.log(retrieveMiddleInterestingMomentAndSmallestBoxartUrl(movieLists))
