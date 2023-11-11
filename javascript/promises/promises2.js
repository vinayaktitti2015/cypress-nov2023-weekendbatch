// promises means check the state of the condition is true or false
/**
 * pending promise
 * fulfillment
 * rejection
 */

let p = new Promise(function (resolve, reject) {
  let workDone = false; // api call or db connection
  if (workDone) {
    resolve("Successful connection established");
  } else {
    reject("Error - connection failed");
  }
});

console.log(p);
