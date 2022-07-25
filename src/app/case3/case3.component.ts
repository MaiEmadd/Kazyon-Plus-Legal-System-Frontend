import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case3',
  templateUrl: './case3.component.html',
  styleUrls: ['./case3.component.css']
})
export class Case3Component implements OnInit {

  data:any[] = [
    {nextsession:'02/06/2017', currentsession: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', currsesdec: '03/06/2017'}, 
    {nextsession:'02/06/2017', currentsession: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', currsesdec: '03/06/2017'}, 
    {nextsession:'02/06/2017', currentsession: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', currsesdec: '03/06/2017'}, 
    {nextsession:'02/06/2017', currentsession: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', currsesdec: '03/06/2017'}, 
    {nextsession:'02/06/2017', currentsession: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', currsesdec: '03/06/2017'},  
  ];

  
  displayedColumns: string[] = ['تاريخ الجلسة القادمه','تاريخ الجلسة الحاليه ', 'قرار الجلسة الحاليه '];
 dataSource = this.data;

  constructor() { 

    
  }

  ngOnInit(): void {
    console.log(this.displayedColumns);
  }

}

