import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Procuration } from '../procurartion';
import { ProcurartonService } from '../procurarton.service';
import { Route, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({ selector: 'app', templateUrl: 'procuration.component.html',styleUrls: ['./procuration.component.css'] })
export class ProcurationComponent implements OnInit {
    
    displayedColumns: string[] = ['#','اسم الموكل', 'رقم التوكيل', 'السنة', 'مكتب التوثيق', 'رقم التوكيل بالمكتب'];
    procs: Procuration[]=[] ;
    name:String="";
  router: any;
    constructor(private procurartonService: ProcurartonService,private _router:Router) { }
  
    ngOnInit(): void {
      this.procurartonService.getProcurartion().subscribe((data: Procuration[]) => {
        console.log(data);
        this.procs = data;
      });
    }
    details(id:number){
      let route = 'procuration2/'+id;
    this._router.navigate([route]);
    }
    getProcurartion() {
      this.procurartonService.getProcurartionByName(this.name)
        .subscribe(data => {
          console.log(data)
          this.procs=data;
        })  }
    
}