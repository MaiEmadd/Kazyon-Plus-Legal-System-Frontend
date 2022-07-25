import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case1',
  templateUrl: './case1.component.html',
  styleUrls: ['./case1.component.css']
})
export class Case1Component implements OnInit {
  data:any[] = [
    {id:'1', casenum: '#324511', casetype: 'جنح', year: 2018, clientname: 'عماد الدين احمد', opponentname:'محسن محمد', casedetails:'', edit:''}, 
    {id:'2', casenum: '#894254', casetype: 'جنح', year: 2020, clientname: 'عمر عاصم', opponentname:'عادل احمد', casedetails:'',edit:''}, 
    {id:'3', casenum: '#324846', casetype: 'جنح', year: 2022, clientname: 'عبدالله اشرف', opponentname:'محمد حسام', casedetails:'',edit:''}, 
    {id:'4', casenum: '#547204', casetype: 'جنح', year: 2007, clientname: 'عامر عصام', opponentname:'عادل عبدالهادي', casedetails:'',edit:''}, 
  ];

  
  displayedColumns: string[] = ['#','رقم القضيه', 'نوع القضية', 'السنة', 'اسم الموكل', 'اسم الخصم','تفاصيل القضيه','تعديل'];
 dataSource = this.data;

  constructor() { 

    
  }

  ngOnInit(): void { 
    console.log(this.displayedColumns);
  }

}