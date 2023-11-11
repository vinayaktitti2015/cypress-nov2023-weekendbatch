// direct export
export const userlogin = {};

export const userSignup = {};

// indirect export
let implicitWait = function () {
  console.log("wait for implicit timeout");
};

let explicitWait = function () {
  console.log("wait for explicit timeout");
};

export { implicitWait, explicitWait };
