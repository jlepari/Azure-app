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
    { hide: true, field: 'speaker_id' },
    { headerName: "First Name", field: 'first_name', editable: true, sortable: true, filter: true },
    { headerName: "Last Name", field: 'last_name',   editable: true, sortable: true, filter: true },
    { headerName: "Company", field: 'company',   editable: true, sortable: true, filter: true }
    
];


    rowData: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        console.log("Call to service");
        this.loadData();
       
    }

    onCellValueChanged(event) {
        console.log( "onCellValueChanged");  
        this.update(event);         
       
    }

    loadData()
    {
        this.rowData = this.http.get('https://conference-demo-001.azurewebsites.net/api/v1/speakers');
    }

    update(event)
    {
        console.log("in update function");
        this.http.put("https://conference-demo-001.azurewebsites.net/api/v1/speakers/" +  event.data.speaker_id, event.data)
        .subscribe(
            () => console.log('Record Updated'),
                console.error
        );

    }
      
       
      
   }

      

     
