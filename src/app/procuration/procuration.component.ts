import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procuration',
  templateUrl: './procuration.component.html',
  styleUrls: ['./procuration.component.css']
})
export class ProcurationComponent implements OnInit {

  data:any[] = [
    {id:'1', casenum: '#324511', casetype: 'جنح', year: 2018, clientname: 'عماد الدين احمد', opponentname:'محسن محمد', casedetails:'1',edit:'1'}, 
    {id:'2', casenum: '#894254', casetype: 'جنح', year: 2020, clientname: 'عمر عاصم', opponentname:'عادل احمد', casedetails:'1',edit:'1'}, 
    {id:'3', casenum: '#324846', casetype: 'جنح', year: 2022, clientname: 'عبدالله اشرف', oponentname:'محمد حسام', casedetails:'1',edit:'1'}, 
    {id:'4', casenum: '#547204', casetype: 'جنح', year: 2007, clientname: 'عامر عصام', opponentname:'عادل عبدالهادي', casedetails:'1',edit:'1'}, 
  ];

  
  displayedColumns: string[] = ['#',' رقم القضيه', 'نوع القضية', 'السنة', 'اسم الموكل', 'اسم الخصم','تفاصيل القضيه','تعديل'];
 dataSource = this.data;

  constructor() { 

    
  }

  ngOnInit(): void {
    console.log(this.displayedColumns);
  }

}
