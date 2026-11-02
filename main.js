const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: { nodeIntegration: false },
    icon: path.join(__dirname, 'icon.png'), // optional
    title: 'Home Inventory'
  })
  win.loadFile('HomeInventory.html')
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })