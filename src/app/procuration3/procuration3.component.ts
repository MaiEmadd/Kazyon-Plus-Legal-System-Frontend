import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { ProcurartonService } from '../procurarton.service';
import { Procuration } from '../procurartion';
@Component({
  selector: 'app-procuration3',
  templateUrl: './procuration3.component.html',
  styleUrls: ['./procuration3.component.css']
})
export class Procuration3Component implements OnInit {

  proc: Procuration = new Procuration;
  id:number=0;

  displayedColumns: string[] = ['#','اسم الموكل', 'رقم التوكيل', 'السنة', 'مكتب التوثيق', 'رقم التوكيل بالمكتب','btn'];
  constructor(private service: ProcurartonService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this.id=this._router.snapshot.params?.['id'];
    this.getProcurartionbyID();
    }
    getProcurartionbyID() {
      this.service.getProcurartionByID(this.id)
        .subscribe(data => {
          console.log(data);
          this.proc=data;
        })  }
}


