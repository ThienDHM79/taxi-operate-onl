/* eslint-disable */
import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
    connected: false,
    tripEvents: []
});
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";
/*
const io = new Server({
    cors: {
      origin: "http://localhost:8080"
    }
  });
*/
export const socket = io(URL);

socket.on("connect", () => {
    state.connected = true;
    console.log('operator socket connected')
  });
  
socket.on("disconnect", () => {
    state.connected = false;
    console.log('socket disconnected');
});
socket.on('engage', (...args) => {
    state.tripEvents.push(args)
    console.log(`listened trip update ${state.tripEvents}`)
})
