document.addEventListener("DOMContentLoaded", function() {
    const positions = ['investor', 'manager', 'assistant', 'worker'];
    const tableBody = document.getElementById('table-body');

    function loadData() {
        tableBody.innerHTML = '';
        positions.forEach(position => {
            fetch(`${position}.json`)
                .then(response => response.json())
                .then(data => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${position}</td>
                        <td>${data.name}</td>
                        <td>${data.age}</td>
                        <td>${data.salary}</td>
                    `;
                    tableBody.appendChild(row);
                })
                .catch(error => console.error(`Error fetching ${position}.json: ${error}`));
        });
    }

    loadData();
});