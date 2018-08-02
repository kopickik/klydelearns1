const _ = require('lodash')

let movieLists = [
  {
    name: "New Releases",
    videos: [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: "Dramas",
    videos: [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  }
]

function allVideoIdsInMovieLists(lists) {
  return _.forEach(lists, (list) => _.forEach(video, (videos) => video.id))
}

function myConcatAll (subArray) {
  let results = []
  _.forEach(subArray, function (subArray2) {
    _.forEach(subArray2, (subSubArray) => results.push(subSubArray))
  })
  return results
}

//console.log(myConcatAll([ [1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// Exercise 11: Use map and concat to project and flatten the moviesList
// into an array of video ids
function useMapAndConcat (lists) {
  return _
    .map(lists, (list) => _.map(list.videos, (video) => video.id
  ))
    .concat()
}

console.log(useMapAndConcat(movieLists))
module.exports = {
    allVideoIdsInMovieLists: allVideoIdsInMovieLists,
    myConcatAll: myConcatAll,
    useMapAndConcat: useMapAndConcat
}
