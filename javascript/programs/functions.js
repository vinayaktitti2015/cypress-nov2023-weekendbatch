// function expression
const obj = {
  fullDetails: function () {
    return console.log("return output");
  },

  getFirstName: function () {
    return console.log("return james");
  },

  getLastName: function () {
    return console.log("return doe");
  },
};

obj.fullDetails();
obj.getFirstName();
obj.getLastName();

// function declaration with non-parameterized properties
function userLogin() {
  return console.log("user login with given credentials");
}

function userSignup() {
  return console.log("user signup with given credentials");
}
function userBuyproduct() {
  return console.log("user purchase product");
}

function userPayment() {
  return console.log("user make an payment");
}

// parameterized properties
function orderConfirmation(order) {
  return console.log("order confirmation with ID: " + order);
}

userSignup();
userLogin();
userBuyproduct();
userPayment();
orderConfirmation(1234);

// ES6 arrow functions
const count = (a, b, c) => {
  return console.log((a + b) * c);
};

count(10, 20, 30);

function userLogin() {
  // enter username
  // enter password
  // click signup button
  // verify dashboard
}

function getUsernameInput() {
  return "[id='username']";
}

const getArrowFunction = () => {
  // wont apply for this keyword and super keyword
};
