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
    //response on user frontend click emit event
    socket.on('engage', (tripdata) => {
        const tripid = tripdata.tripid;
        //update db for trip, engagement, driver
        socket.emit('cancel', `cancel on ${new Date()}`);//also send likeupdate
        //socket.broadcast.emit( 'request', 'request 1'); //broad cast to all othe users
    });
});

io.listen(port, () => {
    console.log(`event server listen on port ${port} `)
}); 