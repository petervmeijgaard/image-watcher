const chokidar = require('chokidar');
const express = require('express');
require('dotenv').config();

const isValidImage = require('./utilities/isValidImage');

const app = express();

const server = app.listen(process.env.PORT, function () {
    console.log('server running on port 3001');
});

const io = require('socket.io')(server);
const fileWatcher = chokidar.watch(process.env.FOLDER_TO_WATCH, {
    ignoreInitial: true,
    ignored: /(^|[\/\\])\../,
    persistent: true
});

fileWatcher.on('add', async path => {
    const fileChunks = path.split('/');
    const file = fileChunks[fileChunks.length - 1];
    const isValid = await isValidImage(path);

    if (isValid) {
        console.log('New image found! Emitting event...');
        io.emit('NEW_IMAGE', file);
    }
});
