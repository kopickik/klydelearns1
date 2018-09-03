'use strict'

let chars = [
    { name: 'ironman', comic: 'Marvel' },
    { name: 'wonder woman', comic: 'DC' },
    { name: 'black_panther', comic: 'Marvel' }
]

console.log(
    chars.reduce((acc, char) => {
        return char.comic === 'Marvel'
            ? acc.concat(Object.assign({}, char, { alsoSeenIn: 'avengers' } ) )
            : acc
    }, [])
)