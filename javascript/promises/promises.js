function getNumber(currency) {
  return new Promise(function (b, a) {
    try {
      if (typeof currency === "string") {
        b(new Error("Invalid currency: " + currency));
      } else {
        a(currency);
      }
    } catch (e) {
      console.warn(e);
    }
  });
}

getNumber(2000).then((value) => {
  console.log("print currency " + value);
});

// db connection
function dbConnection(state) {
  return new Promise(function (resolve, reject) {
    if (state !== "Connection established") {
      reject(new Error("Connection Not Established"));
    } else {
      resolve(sqlqueryresults);
    }
  });
}
