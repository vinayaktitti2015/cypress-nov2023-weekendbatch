const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const { verifyDownloadTasks } = require("cy-verify-downloads");
const xlsx = require("node-xlsx").default;
var request = require("request");

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "custom-title",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", { downloadFile });

      on("task", verifyDownloadTasks);

      require("cypress-mochawesome-reporter/plugin")(on);

      on("task", {
        parseXlsx(args) {
          return new Promise((resolve, reject) => {
            const r = request(
              { url: args.url, encoding: null },
              function (err, res, body) {
                if (!res) {
                  return reject(new Error("No response"));
                }
                if (res.statusCode !== 200) {
                  return reject(
                    new Error("Bad status code: " + res.statusCode)
                  );
                }
                const sheet = xlsx.parse(body);
                console.log(JSON.stringify(sheet));
                resolve(sheet);
              }
            );
          });
        },
      });
    },
    baseUrl: "https://demoqa.com",
    watchForFileChanges: true,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 120000,
    experimentalRunAllSpecs: true,
    projectId: "khzuh9",
  },
});
