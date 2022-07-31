import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { ProcurartonService } from '../procurarton.service';
import { Procuration } from '../procurartion';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-procuration3',
  templateUrl: './procuration3.component.html',
  styleUrls: ['./procuration3.component.css']
})
export class Procuration3Component implements OnInit {

  proc: Procuration = new Procuration;
  id:number=0;
  exform!: FormGroup;
  displayedColumns: string[] = ['#','اسم الموكل', 'رقم التوكيل', 'السنة', 'مكتب التوثيق', 'رقم التوكيل بالمكتب','btn'];
  constructor(private service: ProcurartonService, private _router: ActivatedRoute, private _navigate: Router) { }

  ngOnInit() {
    this.id=this._router.snapshot.params?.['id'];
    this.getProcurartionbyID();
    this.exform = new FormGroup({
      'client_name' : new FormControl(null, Validators.required),
      'year': new FormControl(null, [Validators.required]),
      'office' : new FormControl(null, [Validators.required]),
      'procuration_number':new FormControl(null, [Validators.required]),
      'office_procuration_number':new FormControl(null, [Validators.required])
    });
    }
    updateProcurartion() {
      this.service.updateProcurartion(this.proc)
        .subscribe(data => {

        })      
    }
    onSave(){
      this.updateProcurartion();
      Swal.fire({title:"تم الحفظ"}).then(() => {
        this._navigate.navigate(['procuration']);
      });
    }
    getProcurartionbyID() {
      this.service.getProcurartionByID(this.id)
        .subscribe(data => {
          console.log(data);
          this.proc=data;
        })  }
}


