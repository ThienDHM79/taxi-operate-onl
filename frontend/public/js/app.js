'use strict';
//const axios = require('axios');
//const response = require('express');
const API = 'http://localhost:7000/v1/clients';

const socket = io('http://127.0.0.1:3000');
const axios = require('axios');
const baseUrl = 'http://localhost:7000';
const app = Vue.createApp(
    {
        el:'#app',
        data() {
            return {
                //table of trip per on socket.io update
                Trips: [],
                
            }
        },
        created(){
            Trips = axios.get(baseUrl+'/v1/Booking');
        }
    }
)

const getData = async (apiUrl) => {
   const response =  await axios.get(apiUrl);
   return response.data;

};

const updateDataTable = (data) =>{
    console.info("Updating items table ...");
    const tableBody = document.querySelector('#client-table tbody');
        tableBody.innerHTML="";

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.firstname}</td>
                <td>${item.phonenum}</td>
                <td>${item.status}</td>
            `;
            tableBody.appendChild(row);
        });
}


/*
datafunction: method to get data
oncomplete: execute when data is back
*/

const autoRefresh = ( {dataFunction, onComplete, interval = 30000}) => {
    const execute = () => {
        dataFunction().then( data => {
            onComplete(data);
            setTimeout(execute,interval);
        })
    };

    execute();
};


///// ON GOING SEPARATE AXIOS AND UPDATE
axios.get(API).then(response => {
    updateDataTable(response.data);
});



/*
autoRefresh({
    dataFunction: await getData,
    onComplete: updateDataTable,
    interval: 2000
});
*/
