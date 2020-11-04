const { app, BrowserWindow } = require("electron");
const { join } = require("path");

require("./api");

app.whenReady().then(() => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: join(__dirname, "preload.js"),
    },
  });

  win.loadFile("./index.html");
});
