"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var http = require("http");
var express = require("express");
var robot = require("robotjs");
var socketIo = require("socket.io");
var cors = require("cors");
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    electron_1.app.quit();
}
var setupServer = function () {
    var expressApp = express();
    var server = http.createServer(expressApp);
    var io = socketIo(server);
    io.on('connection', function (socket) {
        socket.on('move', function (coords) {
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
    expressApp.use(cors());
    expressApp.use(express.static(path.join(__dirname, './LivePilot')));
    expressApp.get('*', function (req, res) {
        res.status(200).sendFile(path.join(__dirname, './LivePilot/index.html'));
    });
    server.listen(3000, function () {
        console.log('listening on *:3000');
    });
};
var createWindow = function () {
    // Create the browser window.
    var mainWindow = new electron_1.BrowserWindow({
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
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
//# sourceMappingURL=index.js.map