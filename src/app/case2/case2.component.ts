import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Case } from '../case';
import { ProcurartonService } from '../procurarton.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-case2',
  templateUrl: './case2.component.html',
  styleUrls: ['./case2.component.css']
})
export class Case2Component implements OnInit {
  [x: string]: any;

  case=new Case ;
  exform!: FormGroup;
  constructor(private service: ProcurartonService, private _build:FormBuilder, private _navigate: Router) { }

  ngOnInit(): void {
    this.exform = this._build.group({
      'client' :  new FormControl("", Validators.required),
      'against' : new FormControl("", Validators.required),
      'category' : new FormControl("", Validators.required),
      'caseyear': new FormControl("", [Validators.required]),
      'numbercase':new FormControl(null, [Validators.required]),
      'area':new FormControl(null),
      'filenumber':new FormControl(null),
      'clientstat':new FormControl(null),
      'againststat':new FormControl(null),
    });
  }
  onSave(){
    this.addCase();
    
  }
  addCase() {
    //let obj= <Case> Object.assign ({},this.exform);
    this.case.sessionRequests=[];
    this.service.addCase(this.case)
      .subscribe(
        suc => {
          Swal.fire({title:"تم الحفظ",color:'green',confirmButtonColor:'green'}).then(() => {
            this._navigate.navigate(['case']);
          });
        },
        err => {
          Swal.fire({title:"تعذر الحفظ",color:'red',confirmButtonColor:'red'}).then(() => {
          });
        })
  }

  letterOnly(event: { keyCode: any; })
  {
    var charCode = event.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8 || charCode==32)

      return true;
    else
      return false;
  }

   isNumberKey(event: { keyCode: any; }){

     var charCode = event.keyCode;
     if ((charCode > 31 && (charCode < 48) || charCode > 57))

       return true;
     else
       return false;
  }

}
