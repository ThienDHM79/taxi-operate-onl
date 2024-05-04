import { createApp, h } from 'vue'
import axios from 'axios'

import App from './App.vue'

createApp(App).mount('#app');
/*
const app = createApp({
    data(){
        TripList:[]
    },
    render(){
        return h(App);
    },
    mounted(){
        let SocketIOClient = document.createElement('script');
        SocketIOClient.setAttribute('src', 'https://cdn.socket.io/4.5.4/socket.io.min.js');
        document.head.appendChild(SocketIOClient);
    },
    created(){
        const baseUrl = 'http://localhost:7000';
        TripList = axios.get (baseUrl + '/v1/Booking' );
        console.log(`trip list ${TripList}`);
        const socket = io('http://127.0.0.1:3000');
        socket.on('connect', () => {
            console.log('Operator connected to WebSocket');
        });
        socket.on('engage', (data) => {
            this.updateTripStatus(data);
        })
    },
    methods: {
        updateTripStatus(data){
            //filter triplist have same tripid. then update db and front end;
            console.log(`updated trip id ${data.tripid}`);
        }
    }
})
app.mount('#app')
*/
