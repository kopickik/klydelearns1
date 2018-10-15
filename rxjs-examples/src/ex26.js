const _ = require('lodash');
/**
 * Let's try creating a deeper tree structure. This time we have 4 separate
 * arrays each containing lists, videos, boxarts, and bookmarks respectively.
 * Each object has a parent id, indicating its parent. We want to build an array
 * of list objects, each with a name and a videos array. The videos array will
 * contain the video's id, title, bookmark time, and smallest boxart url.
 */
let lists = [
  {
    id: 5434364,
    name: 'New Releases',
  },
  {
    id: 65456475,
    name: 'Thrillers',
  },
];
let videos = [
  {
    listId: 5434364,
    id: 65432445,
    title: 'The Chamber',
  },
  {
    listId: 5434364,
    id: 675465,
    title: 'Fracture',
  },
  {
    listId: 65456475,
    id: 70111470,
    title: 'Die Hard',
  },
  {
    listId: 65456475,
    id: 654356453,
    title: 'Bad Boys',
  },
];
let boxarts = [
  {
    videoId: 65432445,
    width: 130,
    height: 200,
    url: 'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg',
  },
  {
    videoId: 65432445,
    width: 200,
    height: 200,
    url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
  },
  {
    videoId: 675465,
    width: 200,
    height: 200,
    url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
  },
  {
    videoId: 675465,
    width: 120,
    height: 200,
    url: 'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg',
  },
  {
    videoId: 675465,
    width: 300,
    height: 200,
    url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
  },
  {
    videoId: 70111470,
    width: 150,
    height: 200,
    url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
  },
  {
    videoId: 70111470,
    width: 200,
    height: 200,
    url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
  },
  {
    videoId: 654356453,
    width: 200,
    height: 200,
    url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
  },
  {
    videoId: 654356453,
    width: 140,
    height: 200,
    url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg',
  },
];
let bookmarks = [
  {
    videoId: 65432445,
    time: 32432,
  },
  {
    videoId: 675465,
    time: 3534543,
  },
  {
    videoId: 70111470,
    time: 645243,
  },
  {
    videoId: 654356453,
    time: 984934,
  },
];

let options = { depth: 4, colors: true };

const listsWithVideos = () => {
  return _.map(lists, list => {
    return {
      name: list.name,
      videos: _.filter(videos, vid => {
        return vid.listId === list.id;
      }).map(vid => {
        return {
          id: vid.id,
          title: vid.title,
          bookmarkTime: _.filter(bookmarks, bkmk => {
            return vid.id === bkmk.videoId;
          }).reduce(bkmk => bkmk).time,
          smallestBoxartUrl: _.filter(boxarts, boxart => {
            return boxart.videoId === vid.id;
          }).reduce((prev, curr) => {
            if (prev.width * prev.height > curr.width * curr.height) {
              return curr;
            } else {
              return prev;
            }
          }).url,
        };
      }),
    };
  });
};

console.dir(listsWithVideos(), options);
