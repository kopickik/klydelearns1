const _ = require("lodash");

let lists = [
  {
    id: 5434364,
    name: "New Releases"
  },
  {
    id: 65456475,
    name: "Thrillers"
  }
];

let videos = [
  {
    listId: 5434364,
    id: 65432445,
    title: "The Chamber"
  },
  {
    listId: 5434364,
    id: 675465,
    title: "Fracture"
  },
  {
    listId: 65456475,
    id: 70111470,
    title: "Die Hard"
  },
  {
    listId: 65456475,
    id: 654356453,
    title: "Bad Boys"
  }
];

function useParentGenreListId(genres, movies) {
  let newTree = _.map(genres, g => {
    return Object.assign(
      {},
      {
        name: g.name,
        videos: _.compact(
          _.map(movies, m => {
            return m.listId === g.id ? { id: m.id, title: m.title } : null;
          })
        ).reduce((acc, curr, currIdx, final) => {
          return JSON.stringify(final);
        }, {})
      }
    );
  });
  console.log(newTree);
}

function usingFilterInstead(genres, movies) {
  return _.map(genres, g => {
    return {
      name: g.name,
      videos: _.filter(movies, m => m.listId === g.id)
        .map(m => {
          return { id: m.id, title: m.title };
        })
        .reduce((acc, prev, curr, final) => JSON.stringify(final), {})
    };
  });
}

console.log(useParentGenreListId(lists, videos));
console.log(usingFilterInstead(lists, videos));
