import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-procuration3',
  templateUrl: './procuration3.component.html',
  styleUrls: ['./procuration3.component.css']
})
export class Procuration3Component implements OnInit {
  dataSource_client=[];

  displayedColumns: string[] = ['#','اسم الموكل', 'رقم التوكيل', 'السنة', 'مكتب التوثيق', 'رقم التوكيل بالمكتب','btn'];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    this.http.get<any>('http://localhost:8080/procuration/getall', { headers }).subscribe(data => {
     
        this.dataSource_client = data[0]['client_name'];
        console.log(this.dataSource_client);
    })
}

}
