const _ = require('lodash');

// Exercise 24: Retrieve each video's id, title, middle interesting moment time,
// and smallest box art url. Use zip.

let movieLists = [
  {
    name: 'New Releases',
    videos: [
      {
        id: 70111470,
        title: 'Die Hard',
        boxarts: [
          {
            width: 150,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
          },
          {
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
          },
        ],
        url: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
        interestingMoments: [
          { type: 'End', time: 213432 },
          { type: 'Start', time: 64534 },
          { type: 'Middle', time: 323133 },
        ],
      },
      {
        id: 654356453,
        title: 'Bad Boys',
        boxarts: [
          {
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
          },
          {
            width: 140,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg',
          },
        ],
        url: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 5.0,
        interestingMoments: [
          { type: 'End', time: 54654754 },
          { type: 'Start', time: 43524243 },
          { type: 'Middle', time: 6575665 },
        ],
      },
    ],
  },
  {
    name: 'Instant Queue',
    videos: [
      {
        id: 65432445,
        title: 'The Chamber',
        boxarts: [
          {
            width: 130,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg',
          },
          {
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
          },
        ],
        url: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
        interestingMoments: [
          { type: 'End', time: 132423 },
          { type: 'Start', time: 54637425 },
          { type: 'Middle', time: 3452343 },
        ],
      },
      {
        id: 675465,
        title: 'Fracture',
        boxarts: [
          {
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
          },
          {
            width: 120,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg',
          },
          {
            width: 300,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
          },
        ],
        url: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 5.0,
        interestingMoments: [
          { type: 'End', time: 45632456 },
          { type: 'Start', time: 234534 },
          { type: 'Middle', time: 3453434 },
        ],
      },
    ],
  },
];

function fetchNiceMovies(list) {
  // Retrieve the time of the middle interesting moment and the smallest
  // box art url simultaneously with zip(). Return an {id, title, time, url}
  // object for each video.
  return _.map(list, l => {
    _.map(l.videos, v => {
      return _.concat(
        _.flatten(
          _.zip(
            _.reduce(v.boxarts, (prev, curr) => {
              if (prev.width * prev.height < curr.width * curr.height) {
                return prev;
              } else {
                return curr;
              }
            }),
            _.filter(v.interestingMoments, m => m.type === 'Middle'),
            function(boxart, moment) {
              return {
                id: v.id,
                title: v.title,
                url: boxart.url,
                time: moment.time,
              };
            },
          ),
        ),
      );
    });
  });
}

console.log(fetchNiceMovies(movieLists));
