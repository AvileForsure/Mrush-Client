const { app, BrowserWindow } = require('electron')
app.whenReady().then(main);
async function main() {
  const window = new BrowserWindow ({
    width: 400,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
    }
  });
  window.removeMenu()
  window.loadURL("https://mrush.pl");
  window.on("ready-to-show", () => {
    window.show();
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
