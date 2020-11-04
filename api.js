const { ipcMain } = require("electron");
const channels = require("./channels");

function reverse(s) {
  return [...s].reverse().join("");
}

ipcMain.handle(channels.reverse, async (_event, text) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return reverse(text);
});

ipcMain.handle(channels.reverseNow, (_event, text) => reverse(text));
