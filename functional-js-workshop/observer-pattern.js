let mailCounter = 0

let subscriber1 = subscribe(`inbox/newMessage`, function (topic, data) {
    console.log(`a new message was received: ${topic}`)

    $('.message-sender').html(data.sender)
    $('.message-sender').html(data.body)
})

let subscriber2 = subscribe(`inbox/NewMessage`, function (topic, data) {
    $('.new-message-counter').html(++mailCounter)
})

publish(`inbox/newMessage`, [{
    sender: `hello@yourwebsite.com`,
    body: `Hey there! How are you doing today?`
}]);
