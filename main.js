const { app, BrowserWindow, globalShortcut } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 580,
    height: 750,
    x: 800,
    y: 150,
    title: 'Just a Quick Note',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  
  mainWindow.loadFile('index.html');
  return mainWindow;
}

app.whenReady().then(() => {
  mainWindow = createWindow();
  
  globalShortcut.register('Alt+Q', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });
});

app.on('window-all-closed', () => app.quit()); 