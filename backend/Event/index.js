//back-end for websocket
const { Server } = require('socket.io');

const port = process.env.PORT || 3000;
//create new server, backend frontend not same baseurl , need cors
const io = new Server({
    cors: {
        origin: "*",
    }
})


//when a request come to establish web socket
io.on( "connection", (socket) => {
    console.log('socket server started');
    // broadcast to new request to client
    socket.on('new', (data) => {
        socket.broadcast.emit('request', data);
    })
    //response on user frontend click emit event
    socket.on('engage', (tripdata) => {
        console.log(`socket server ${JSON.stringify(tripdata)}`)
    });
});

io.listen(port, () => {
    console.log(`event server listen on port ${port} `)
}); 