import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  data:any[] = [
    {id:'1', sapCode: 1000, storeName: 'الدقي', governorate: 'القاهرة', region: 'القاهرة', state:'ساري'},
    {id:'2', sapCode: 2000, storeName: 'الزمالك', governorate: 'الجيزة', region: 'الجيزة', state:'فسخ'},
    {id:'3', sapCode: 3000, storeName: 'الشروق', governorate: 'مطروح', region: 'مطروح', state:'مطلوب التجديد'}, 
  ];


  displayedColumns: string[] = ['#','كود التشغيل', 'الفرع', 'المحافظة', 'الاقليم', 'الحالة'];
  dataSource = this.data;

  constructor() { }

  ngOnInit(): void {}
}
