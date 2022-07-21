import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { ContractsApiService } from '../contracts-api.service';
import  * as _ from 'lodash';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  data:any[] = [
    {id:'1', sapCode: 1000, storeName: 'الدقي', governorate: 'القاهرة', region: 'القاهرة', state:'ساري', type:'ايجار', dep:'التسويق'},
    {id:'2', sapCode: 2000, storeName: 'الزمالك', governorate: 'الجيزة', region: 'الجيزة', state:'فسخ',type:'ايجار', dep:'IT'},
    {id:'3', sapCode: 3000, storeName: 'الشروق', governorate: 'مطروح', region: 'مطروح', state:'مطلوب التجديد',type:'ايجار', dep:'المبيعات'}, 
  ];

  apidata:any[] =[];
  dataSource:any[] =[];
  unique_governorate :any[] =[] ;
  unique_name :any[] =[]
  unique_contractType :any[] =[]
  unique_Department :any[] =[]
  unique_status:any[]=[];


  displayedColumns: string[] = ['#','كود التشغيل', 'الفرع', 'المحافظة', 'الاقليم', 'نوع العقد', 'قسم العقد','الحالة'];


  
  @ViewChild(MatSort) sort =new MatSort();
  constructor(private _ContractsApiService:ContractsApiService,private _liveAnnouncer: LiveAnnouncer) {
    _ContractsApiService.getData().subscribe((response)=>{    
        this.apidata = response;
        this.dataSource = this.apidata;
        this.unique_governorate = [...new Set(this.apidata.map(item => item.governorate))];
        this.unique_name = [...new Set(this.apidata.map(item => item.name))];
        this.unique_contractType = [...new Set(this.apidata.map(item => item.contractType))];
        this.unique_Department = [...new Set(this.apidata.map(item => item.Department))];
    });
   
   }


   departmentFilter($event:any,apidata:any){
      let filterDate = _.filter(apidata,(item)=>{
        return item.Department.toLowerCase() == $event.value.toLowerCase();
      })     
      this.dataSource = filterDate;
   }

   statusFilter($event:any,apidata:any){
    let filterDate = _.filter(apidata,(item)=>{
      return item.status.toLowerCase() == $event.value.toLowerCase();
    })     
    this.dataSource = filterDate;
   }

   typeFilter($event:any,apidata:any){
    let filterDate = _.filter(apidata,(item)=>{
      return item.contractType.toLowerCase() == $event.value.toLowerCase();
    })     
    this.dataSource = filterDate;
   }

   nameFilter($event:any,apidata:any){
    let filterDate = _.filter(apidata,(item)=>{
      return item.name.toLowerCase() == $event.value.toLowerCase();
    })     
    this.dataSource = filterDate;
   }

   governorateFilter($event:any,apidata:any){
    let filterDate = _.filter(apidata,(item)=>{
      return item.governorate.toLowerCase() == $event.value.toLowerCase();
    })     
    this.dataSource = filterDate;
   }

   AddressFilter($event:any,apidata:any){
    let filterDate = _.filter(apidata,(item)=>{
      return item.Address.toLowerCase() == $event.value.toLowerCase();
    })     
    this.dataSource = filterDate;
   }   
    



 
  ngOnInit(): void {}
}


