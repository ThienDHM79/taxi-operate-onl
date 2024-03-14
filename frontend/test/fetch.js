const getData = () => {
    return fetch('client-data.json')
        .then( response => {
            return response.json();
        });
};
const updateDataTable = (data) =>{
    console.info("Updating items table ...");
    const tableBody = document.querySelector('#client-table tbody');
        tableBody.innerHTML="";

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.contact}</td>
                <td>${item.phonenum}</td>
                <td>${item.location}</td>
                <td>${item.status}</td>
            `;
            tableBody.appendChild(row);
        });
}

getData().then( items => {
    updateDataTable(items);
});

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

autoRefresh({
    dataFunction: getData,
    onComplete: updateDataTable,
    interval: 2000
});

/*
fetch('client-data.json')
    .then( response => response.json())
    .then( data => {
        const tableBody = document.querySelector('#client-table tbody');
        
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.contact}</td>
                <td>${item.phonenum}</td>
                <td>${item.location}</td>
                <td>${item.status}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch( error => console.error('Error fetching data', error));
*/