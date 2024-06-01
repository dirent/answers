export default class Table {

    constructor(id) {
        this.table = document.getElementById(id);
        this.head = document.createElement('thead');
        this.table.getElementsByTagName('thead')[0].replaceWith(this.head);
        this.body = document.createElement('tbody');
        this.table.getElementsByTagName('tbody')[0].replaceWith(this.body);
    }

    addHeader(rowName) {
        const th = document.createElement('th');
        th.innerText = rowName;
        this.head.appendChild(th);
    }

    addRow(columns) {
        const row = document.createElement('tr');

        columns.
            map(col => this.td(col)).
            forEach(td => row.appendChild(td));

        this.body.appendChild(row);
    }

    td(text) {
        const cell = document.createElement('td');
        cell.innerText = text;
        return cell;
    }
}