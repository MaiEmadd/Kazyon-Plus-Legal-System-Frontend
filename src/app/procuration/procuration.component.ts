import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procuration',
  templateUrl: './procuration.component.html',
  styleUrls: ['./procuration.component.css']
})
export class ProcurationComponent implements OnInit {

  data:any[] = [
    {id:'1', clientname: '#324511', procurationnum: 'جنح', year: 2018, regoffice: 'عماد الدين احمد', procurationoffice:'محسن محمد'}, 
    {id:'1', clientname: '#324511', procurationnum: 'جنح', year: 2018, regoffice: 'عماد الدين احمد', procurationoffice:'محسن محمد'}, 
    {id:'1', clientname: '#324511', procurationnum: 'جنح', year: 2018, regoffice: 'عماد الدين احمد', procurationoffice:'محسن محمد'}, 
    {id:'1', clientname: '#324511', procurationnum: 'جنح', year: 2018, regoffice: 'عماد الدين احمد', procurationoffice:'محسن محمد'}, 

  ];

  
  displayedColumns: string[] = ['#','اسم الموكل', 'رقم التوكيل', 'السنة', 'مكتب التوثيق', 'رقم التوكيل بالمكتب','btn'];
 dataSource = this.data;

  constructor() { 

    
  }

  ngOnInit(): void {
    console.log(this.displayedColumns);
  }

}
