import * as robot from 'robotjs';
import * as cors from 'cors';
import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as socketIo from 'socket.io';

let expressApp;
let server;
let io;

const setupServer = (ipAddress: string): void => {
    expressApp = express();
    server = http.createServer(expressApp);
    io = socketIo(server);

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

    expressApp.use(express.static(path.join(__dirname, '../LivePilot')));

    expressApp.get('*', (req, res) => {
        res.status(200).sendFile(path.join(__dirname, '../LivePilot/index.html'));
    });

    server.listen(3000, ipAddress, () => {
        console.log(ipAddress + ':3000');
    });
};

const stopServer = () => {
    server.close();
    io.close();

    io = undefined;
    server = undefined;
    expressApp = undefined;
};

export {
    setupServer,
    stopServer
};
