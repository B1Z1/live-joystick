import * as http from 'http';
import * as express from 'express';
import * as robot from 'robotjs';
import * as url from 'url';
import * as path from 'path';
import * as socketIo from 'socket.io';
import { app as expressApp, BrowserWindow } from 'electron';

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
let win: BrowserWindow;

function createWindow(): void {
    win = new BrowserWindow({width: 800, height: 600});

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, '../Frontend/dist/Frontend/index.html'),
            protocol: 'file:',
            slashes: true
        })
    );

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

expressApp.on('ready', createWindow);
expressApp.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
expressApp.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        expressApp.quit();
    }
});

io.on('connection', socket => {
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

server.listen(3000, () => {
    console.log('listening on *:3000');
});

