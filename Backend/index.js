"use strict";
exports.__esModule = true;
var http = require("http");
var express = require("express");
var robot = require("robotjs");
var url = require("url");
var path = require("path");
var socketIo = require("socket.io");
var electron_1 = require("electron");
var app = express();
var server = http.createServer(app);
var io = socketIo(server);
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 800, height: 600 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../Frontend/dist/Frontend/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
io.on('connection', function (socket) {
    socket.on('move', function (coords) {
        // @ts-ignore
        var x = coords.x, y = coords.y;
        var mouse = robot.getMousePos();
        var newX = mouse.x + x / 3;
        var newY = mouse.y + y / 3;
        robot.moveMouse(newX, newY);
    });
    socket.on('click', function () {
        robot.mouseClick();
    });
    socket.on('text', function (text) {
        robot.typeString(text);
        robot.keyTap('enter');
    });
    socket.on('clear', function () {
        robot.keyTap('a', ['control']);
        robot.keyTap('backspace');
    });
});
server.listen(3000, function () {
    console.log('listening on *:3000');
});
