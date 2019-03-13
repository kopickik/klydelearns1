module.exports = function fizzBuzzCuckooClock(time) {
    let [hour, minute] = time.split(":")
    return minute === "00" ? "Cuckoo ".repeat(hour % 12 || 12).trim() :
        minute    === "30" ? "Cuckoo" :
        minute % 15 == 0 ? "Fizz Buzz" :
        minute % 5 == 0 ? "Buzz" :
        minute % 3 == 0 ? "Fizz" :
        "tick"
}
