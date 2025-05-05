import {app, BrowserWindow} from 'electron';

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 400,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadURL('http://localhost:5173').then(r => {
        console.log(r);
    });
});
