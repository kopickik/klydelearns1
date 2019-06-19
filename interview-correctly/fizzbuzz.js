/**
 * Code Kata: Fizz Buzz Cuckoo Clock
 * 1. When a minute is evenly divisible by three
 *    the clock will say the word "Fizz".
 * 1. When a minute is evenly divisible by five
 *    the clock will say the word "Buzz".
 * 1. When a minute is evenly divisible by both
 *    the clock will say "Fizz Buzz", with two exceptions:
 *  1.1 On the hour, instead of "Fizz Buzz",
 *      the clock door will open, and "Cuckoo"
 *        between one and twelve times
 *        depending on the hour.
 *  1.2 On the half hour, instead of "Fizz Buzz",
 *      the clock door will open, and "Cuckoo"
 *      just once.
 * 1. With minutes that are not evenly divisible by either three or five
 *    at first you had intended to have the clock just say the numbers
 *    ala Fizz Buzz, but then you decided at least for version 1.0
 *    to just have the clock make a quiet, subtle "tick" sound for
 *    little more clock nature and a little less noise.
 *
 * 2. Input will be a string containing hour and minute values in 24-hour time,
 *    separated by a colon, and with leading zeros. For example, 1:34 pm
 *    would be "13:34".
 *  Your return value will be a string containing the combination of
 *  Fizz, Buzz, Cuckoo, and/or tick sounds that the clock needs to make
 *  at that time, separated by spaces. Note that although the input is
 *  in 24-hour time, cuckoo clocks' cuckoos are in 12-hour time.
 *
 * Some examples
 * "13:34"       "tick"
 * "21:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
 * "11:15"       "Fizz Buzz"
 * "03:03"       "Fizz"
 * "14:30"       "Cuckoo"
 * "08:55"       "Buzz"
 * "00:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
 * "12:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
 */

function fizzBuzzCuckooClock(time) {
  let hour = Math.min(time.split(":")[0])
  let min = time.split(":")[1]

  const fizzer = term => `${term}`
  const fizz = num => num !== 0 && num % 3 === 0
  const buzz = num => num !== 0 && num % 5 === 0

  const cuckoo = (num1, minute) => {
    var response = []

    if (minute === "30") {
      response.push(fizzer("Cuckoo"))
      return response.join(' ')
    }
    if (minute === "00") {
      if (num1 === 0) {
        for (var i = 0; i < 12; i++) {
          response.push(fizzer("Cuckoo"))
        }
      } else {
        if (num1 > 12) {
          num1 = num1 - 12
        }
        for (var i = 0; i < num1; i++) {
          response.push(fizzer("Cuckoo"))
        }
      }
      return response.join(' ')
    }

    if (buzz(minute)) {
      if (fizz(minute)) {
        response.push(fizzer("Fizz Buzz"))
      } else {
        response.push(fizzer("Buzz"))
      }
    } else if (fizz(minute)) {
      response.push(fizzer("Fizz"))
    } else {
      response.push(fizzer("tick"))
    }
    return response.join(' ')
  }

  return cuckoo(hour, min)
}

// V2

function fbcc (time) {
  let hour = Math.min(time.split(":")[0])
  let minute = Math.min(time.split(":")[1])
  return minute === 0 ? "Cuckoo ".repeat(hour % 12 || 12).trim() :
    minute      === 30 ? "Cuckoo" :
    minute % 15 === 0 ? "Fizz Buzz" :
    minute % 3  === 0 ? "Fizz" :
    minute % 5  === 0 ? "Buzz" :
    "tick"
}

module.exports = {
  fizzBuzzCuckooClock: fizzBuzzCuckooClock,
  fbcc: fbcc
}
