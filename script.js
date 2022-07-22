function addRow(event) {
    const parent = document.querySelector('tbody');

    const tr = document.createElement('tr');
    tr.classList.add('table-row');

    for (let i = 0; i <= 2; i++) {
        const th = document.createElement('th');
        th.textContent = 'Dummy data';
        tr.appendChild(th);
    }

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Start / Pause';
    toggleButton.classList.add('toggle');
    tr.appendChild(toggleButton);

    parent.appendChild(tr);
}

const addButton = document.querySelector('.add-tracking-btn');
addButton.addEventListener('click', addRow);