const axios = require('axios')
const { Observable } = require('rxjs/observable')

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

let observer = {
    next: (res) => {
        console.log(JSON.stringify(res.data))
    },
    error: (err) => console.log(err),
    complete: () => console.log("The async op has completed.")
}

let subscription = getJSON("http://taco-randomizer.herokuapp.com").subscribe(observer)
console.log(subscription)
