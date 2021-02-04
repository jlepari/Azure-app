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
    { hide: true, field: 'speaker_id', sortable: true, filter: true },
    { headerName: "First Name", field: 'first_name', sortable: true, filter: true },
    { headerName: "Last Name", field: 'last_name', sortable: true, filter: true },
    { headerName: "Company", field: 'company', sortable: true, filter: true }
];

 gridOptions = {
    defaultColDef: {
        width: 100,
        suppressFilter: true
    },
   // columnDefs: columnDefs,
    enableColResize: true,
    rowModelType: 'enterprise',
    rowGroupPanelShow: 'never',
    enableSorting: true,
    functionsReadOnly: true,
    toolPanelSuppressPivotMode: true,
    toolPanelSuppressValues: true,
    animateRows: true,
    debug: true,
    pagination: true,
    paginationAutoPageSize: true,
    icons: {
        groupLoading: '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/javascript-grid-enterprise-model/spinner.gif" style="width:22px;height:22px;">'
    }
};





    rowData: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        //this.rowData = this.http.get('https://www.ag-grid.com/example-assets/small-row-data.json');
        this.rowData = this.http.get('https://conference-demo-001.azurewebsites.net/api/v1/speakers');
    }
}