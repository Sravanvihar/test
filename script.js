const webAppURL = 'https://script.googleusercontent.com/macros/echo?user_content_key=yPc2Rs3bfb8Mk_ux_j0KHDZreXpEB6vlyMqKZqkHN8Zdeb8EVIwiIZ_0tUL2mPvnhBAhqyP5-4yoGENPOywEuqUtkBSNRqnCm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIhTuPgpr7kP0ujKPm7ABDEpX8ogM6hZ3dT0wnXZOdDww2__JqicpNmF5a4S7NWWmX9Z75PQYMvfqGxPrbZLXwQQB3SDt1zgN9z9Jw9Md8uu&lib=McK0QUABo1lvwNLDHfS9-3I1ha9H41tBb';

document.addEventListener('DOMContentLoaded', function() {
    // Reference to the table body
    const tableBody = document.querySelector('#data-table tbody');

    // Fetch JSON data from the web app
    fetch(webAppURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to access JSON');
            }
            return response.json();
        })
        .then(data => {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const rowData = data[key];
                    const row = document.createElement('tr');

                    // Loop through the object properties and create table cells
                    for (const cellKey in rowData) {
                        const cell = document.createElement('td');
                        if (cellKey === 'URL') {
                            const link = document.createElement('a');
                            link.href = rowData[cellKey];
                            link.textContent = rowData[cellKey];
                            cell.appendChild(link);
                        } else if(cellKey === 'ShortURL'){
                            const link = document.createElement('a');
                            URI= window.location.href;
                            link.href = URI+"?url="+rowData[cellKey];
                            link.textContent = URI+"?url="+rowData[cellKey];
                            cell.appendChild(link);
                        } else {
                            cell.textContent = rowData[cellKey];
                        }
                        row.appendChild(cell);
                    }
                    tableBody.appendChild(row);
                }
            }
        })
        .catch(error => {
            console.log(error.message); // Display an alert with the error message
        })
        .finally(() => {
            //console.log('Code execution is over.'); // Display an alert once code execution is complete
        });
});