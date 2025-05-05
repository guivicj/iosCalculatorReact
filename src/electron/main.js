import {app, BrowserWindow} from 'electron';
import * as path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 400,
        height: 680,
        icon: path.join(__dirname, './calculator-icon.ico'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadURL('http://localhost:5173').then(r => {
        console.log(r);
    });
});
