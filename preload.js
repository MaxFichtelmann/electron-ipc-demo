const { ipcRenderer } = require("electron");
const channels = require("./channels");

window.ipcDemo = {
  async reverse(text) {
    return await ipcRenderer.invoke(channels.reverse, text);
  },
  async reverseNow(text) {
    return await ipcRenderer.invoke(channels.reverseNow, text);
  },
};
