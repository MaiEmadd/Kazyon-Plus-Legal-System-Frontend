import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Procuration } from 'src/app/procuration/procurartion';
import { ProcurartonService } from '../procurarton.service';

@Component({ selector: 'app', templateUrl: 'procuration.component.html',styleUrls: ['./procuration.component.css'] })
export class ProcurationComponent implements OnInit {
    
    displayedColumns: string[] = ['#','اسم الموكل', 'رقم التوكيل', 'السنة', 'مكتب التوثيق', 'رقم التوكيل بالمكتب','btn'];
    procs: Procuration[]=[] ;
    constructor(private procurartonService: ProcurartonService) { }
  
    ngOnInit(): void {
      this.procurartonService.getProcurartion().subscribe((data: Procuration[]) => {
        console.log(data);
        this.procs = data;
      });
    }
    
}