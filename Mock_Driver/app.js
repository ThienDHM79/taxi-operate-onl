const socket = io('http://127.0.0.1:3000');//based on url of the page current serve

const app = Vue.createApp(
    {
        el:'#app',
        data() {
            return {
                tripid:"",
                isModalActive: false,
                driverstatus: "free",
                tripstatus:"",
                notification:"",
                tripdetails:{}
            }
                //{tableData: []}
        },
        created() {
            // Connect to WebSocket and listen for incoming data
            socket.on('connect', () => {
                console.log('Connected to WebSocket');
            });
    
            // Listen for data updates from WebSocket
            socket.on('request', (data) => {
                this.notifyRequest(data);
            });
           

        },
        methods: {
            // Update when have emit coming
            notifyRequest(RequestData) {
                console.log(RequestData);
                let text = `request ${JSON.stringify(RequestData.tripdetails)} \nPress OK to ACCEPT. Cancel to REJECT`;
                this.receivedNotify();
                this.tripid = RequestData.tripid;
                this.tripdetails = RequestData.tripdetails;
                /*
                if ( confirm(text) == true) {
                    this.driverstatus = "busy";
                    this.notification = "request accepted";
                } else{
                    this.driverstatus = "free";
                    this.notification = "request declined";
                }
                */
            },
            receivedNotify(){
                this.isModalActive = true;
            },
            acceptRequest(){
                this.notification = "Driver accepted";
                this.driverstatus = "busy";
                this.tripstatus="driveraccepted"
                socket.emit('engage', {
                    tripid: this.tripid,
                    tripstatus: this.tripstatus,
                    tripdetails: this.tripdetails,
                    driverstatus: this.driverstatus
                })
            }

        }
    }
);
app.mount("#app");

/*
        //send connect event
        socket.on( 'connect', () => {
            console.log( 'connected' );
        })

        const btn = document.querySelector('button');
        const likes = document.getElementById('likes');
        console.log(`like select ${likes.textContent}`);
        console.log(`btn select ${btn.textContent}`);

        //when click button have event send
        btn.addEventListener('click', () => {
            //increment counter by 1. emit event
             socket.emit('liked');
        });
        //action when have signal from server to client
        socket.on('likeupdate', (count) => {
            likes.textContent = count;
        });
*/