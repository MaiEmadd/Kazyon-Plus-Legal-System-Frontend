import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { ContractsApiService } from '../contracts-api.service';
import  * as _ from 'lodash';
import {MatSort, Sort} from '@angular/material/sort';
import { ContractSummary } from '../contract-summary';
import { MatSelect
 } from '@angular/material/select';
import { Router } from '@angular/router';
import { Contract } from '../contract';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  statusSummary!:ContractSummary;
  apidata:any[] =[];
  dataSource:any[] =[];
  unique_governorate :any[] =[] ;
  unique_name :any[] =[]
  unique_contractType :any[] =[]
  unique_Department :any[] =[]
  unique_status:any[]=[];

  filter_object  = {
    branch!: "",
    governorate!: "",
    province!: "",
    status!: ""
  }


  displayedColumns: string[] = ['كود التشغيل', 'الفرع', 'المحافظة', 'الاقليم','الحالة'];

  getAllContracts(filter_string:String) {
    this._ContractsApiService.getAllContracts(filter_string).subscribe((response)=>{
      this.apidata = response;
      this.dataSource = this.apidata;
      this.unique_governorate = [...new Set(this.apidata.map(item => item.governorate))];
      this.unique_name = [...new Set(this.apidata.map(item => item.branch_name))];
      this.unique_contractType = [...new Set(this.apidata.map(item => item.contractType))];
      this.unique_Department = [...new Set(this.apidata.map(item => item.Department))];

  });


  }

  @ViewChild(MatSort) sort =new MatSort();
  constructor(private _ContractsApiService:ContractsApiService, private _router:Router) {
    this.getAllContracts("")
    this._ContractsApiService.getContractStatusCount().subscribe((response) => {
      this.statusSummary = response;
   });
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


   changeFilter($event:any, type:String) {
    let value = $event.value;

    if (this.filter_object[type as keyof typeof this.filter_object] == value) {
      this.filter_object[type as keyof typeof this.filter_object] = "";
      const matSelect: MatSelect = $event.source;
      console.log("Hey")
      matSelect.writeValue(null);
    }

    if (type == "branch") {
      this.filter_object.branch = value;

    } else if (type == "status")
    this.filter_object.status = value;

    else if (type == "governorate") {
      this.filter_object.governorate = value;
    }
    else
      this.filter_object.province = value;

      this.getAllContracts(`governorate=${this.filter_object.governorate}&status=${this.filter_object.status}&province=${this.filter_object.province}&branch_name=${this.filter_object.branch}`);

   }


   display(id ?: number) {
    this._router.navigate(["contracts",id])
   }


  ngOnInit(): void {}
}


