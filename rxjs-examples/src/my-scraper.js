const axios = require('axios')
const { Observable } = require('rxjs/observable')
const fs = require('fs')

const getJSON = (url) => {
    return Observable.create((observer) => {
        let subscribed = true
        axios.get(url)
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
        console.log(Object.keys(res))
        fs.writeFileSync('output.html', res.data)
    },
    error: (err) => console.log(err),
    complete: () => console.log('File scrape complete.')
}

const subscription = getJSON("https://www.vgmusic.com/music/console/nintendo/snes").subscribe(observer)
module.exports = { subscription }

