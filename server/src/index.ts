import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as http from 'http';
import * as express from 'express';
import * as robot from 'robotjs';
import * as socketIo from 'socket.io';
import * as cors from 'cors';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

const setupServer = (): void => {
    const expressApp = express();
    const server = http.createServer(expressApp);
    const io = socketIo(server);

    io.on('connection', (socket) => {
        socket.on('move', (coords: { x: number, y: number }) => {
            const {x, y} = coords;
            const mouse = robot.getMousePos();
            const newX = mouse.x + x / 3;
            const newY = mouse.y + y / 3;
            robot.moveMouse(newX, newY);
        });

        socket.on('click', () => {
            robot.mouseClick();
        });

        socket.on('text', (text: string) => {
            robot.typeString(text);
            robot.keyTap('enter');
        });

        socket.on('clear', () => {
            robot.keyTap('a', ['control']);
            robot.keyTap('backspace');
        });
    });

    expressApp.use(cors());

    expressApp.use(express.static(path.join(__dirname, './LivePilot')));

    expressApp.get('*', (req, res) => {
        res.status(200).sendFile(path.join(__dirname, './LivePilot/index.html'));
    });

    server.listen(3000, () => {
        console.log('listening on *:3000');
    });
};

const createWindow = (): void => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, './LivePilot/index.html'));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    setupServer();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
