const h3text = document.querySelector('div h3');
h3text.style.color = 'Blue'

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