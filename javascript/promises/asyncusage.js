async function display() {
  let promise = new Promise(function (resolve, reject) {
    resolve("Hello world!");
  });

  let output = await promise;
  console.log(output);
}

display();

// api call
async function apiCall() {
  await response;
}

// ui call
async function pageLoad() {
  await pageLoadAsync;
}

// settimeout use case
async function display2() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hello world!"), 10000;
    });
  });

  try {
  let output = await promise;
  } catch (err) {
    console.error(err);
  }
  console.log(output);
}

display2();

// db connection call
// connection not successful

// api call
// 500 interbal server error    
// 502 bad gateway

 /**
  * promises in JS
  * async await
  * settimeout
  */

 /**
  * cy.wait
  * timeout: 10000
  * page load timeout
  * default timeout
  * request timeout
  * response timeout
  */