import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'my-app';

    /*
    columnDefs = [
        { field: 'make', sortable: true, filter: true },
        { field: 'model', sortable: true, filter: true },
        { field: 'price', sortable: true, filter: true }
    ];
    */

   columnDefs = [
    { hide: true, field: 'speaker_id', sortable: true, filter: true },
    { headerName: "First Name", field: 'first_name', sortable: true, filter: true },
    { headerName: "Last Name", field: 'last_name', sortable: true, filter: true },
    { headerName: "Company", field: 'company', sortable: true, filter: true }
];

gridOptions: {
    // enables pagination in the grid
    pagination: true,
    // sets 10 rows per page (default is 100)
    paginationPageSize: 5,

   
}





    rowData: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        //this.rowData = this.http.get('https://www.ag-grid.com/example-assets/small-row-data.json');
        this.rowData = this.http.get('https://conference-demo-001.azurewebsites.net/api/v1/speakers');
    }
}