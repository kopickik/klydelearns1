const path = require('path')
require('dotenv').config()
const axios = require('axios')
const { Observable } = require('rxjs/observable')
const fs = require('fs')
const igdbkey = process.env.IGDB_USER_KEY

const getJSON = (url, headers) => {
    return Observable.create((observer) => {
        let subscribed = true
        axios.get(url, headers)
            .then((response) => {
                if (subscribed) {
                    observer.next(response)
                    observer.complete()
                }
            }).catch((err) => {
                if (subscribed) {
                    observer.error(err)
                }
            })
            .then(() => subscribed = false)
    })
}

const observer = {
    next: (res) => {
        console.log(res)
        fs.writeFileSync('igdb-tinkering/game1942.json', JSON.stringify(res.data))
    },
    error: (err) => console.log("error:", err),
    complete: () => console.log('File scrape complete.')
}

const subscription = getJSON("https://api-endpoint.igdb.com/games/3101?fields=*", {
    headers: {
        "user-key": igdbkey,
        Accept: "application/json"
    }
}).subscribe(observer)
module.exports = { subscription }

