"use strict";

var message, promise;

function randomBytes(n) {
  return ((Math.random() * Math.pow(256, n)) | 0).toString(16);
}

message =
  "A fatal exception " +
  randomBytes(1) +
  " has occurred at " +
  randomBytes(2) +
  ":" +
  randomBytes(4) +
  ".\n" +
  "Your system will be " +
  "terminated in 3 seconds.";

promise = Promise.reject(new Error(message));

promise.catch(function(err) {
  var i = 3;

  process.stderr.write(err.message);

  setTimeout(function boom() {
    process.stderr.write(
      "\rYour system will be terminated in " + --i + " seconds."
    );
    if (!i) {
      process.stderr.write("\n.... . . . boom . . . ....\n");
    } else {
      setTimeout(boom, 2000);
    }
  }, 1000);
});
