'use strict'

let coll = [
  {id: 'animals', parent: null},
  {id: 'mammals', parent: 'animals'},
  {id: 'dogs', parent: 'mammals'},
  {id: 'cats', parent: 'mammals'},
  {id: 'invertebrates', parent: 'animals'},
  {id: 'siamese', parent: 'cats'},
  {id: 'chihuahua', parent: 'dogs'}
]

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] =
      makeTree(categories, c.id))

  return node
}

console.dir(JSON.stringify(
  makeTree(coll, null)
, 2))

/*
{"animals":{
  "mammals":{
    "dogs":{
      "chihuahua":{}
    },
    "cats":{
      "siamese":{}
    }
  },
  "invertebrates":{}
}
}
*/