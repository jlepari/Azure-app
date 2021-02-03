import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'my-app';

    columnDefs = [
        { field: 'make', sortable: true, filter: true },
        { field: 'model', sortable: true, filter: true },
        { field: 'price', sortable: true, filter: true }
    ];

    rowData: any;

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.rowData = this.http.get('https://www.ag-grid.com/example-assets/small-row-data.json');
    }
}