/**
 * We have 2 arrays each containing lists, and videos respectively.
 * Each video has a listId field indicating its parent list.
 * Build an array of list objects, each with a name and a videos array.
 */
const _ = require('lodash')

let options = { depth: 4, colors: true }

const lists = [
  {
    id: 5434364,
    name: 'New Releases',
  },
  {
    id: 65456475,
    name: 'Thrillers',
  },
]

const videos = [
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
]

const buildGenreListWithTitles = () => {
  return _.map(lists, list => {
    return {
      name: list.name,
      videos: _.filter(videos, curr => {
        return list.id === curr.listId
      }).map(curr => Object.assign({ id: curr.id, title: curr.title })),
    }
  })
}

console.dir(buildGenreListWithTitles(), options)
