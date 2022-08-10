import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Case } from '../case';
import { ProcurartonService } from '../procurarton.service';
import {Session} from "../session";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  [x: string]: any;

  case = new Case();
  session = new Session();
  exform!: FormGroup;
  id:number=0;

  constructor(private service: ProcurartonService,private _router:ActivatedRoute ,private _build: FormBuilder, private _navigate: Router){
  }

  ngOnInit(): void {
    this.exform = this._build.group({
      'startingDate': new FormControl("", Validators.required),
      'decisionStatus': new FormControl("", Validators.required),
      'endingDate': new FormControl("", Validators.required),
    });
  //  const dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  //     const start = control.get('startingDate');
  //     const end = control.get('endingDate');
  //     console.log("validators called");  
  //     return start?.value !== null && end?.value !== null && start?.value < end?.value 
  //     ? null :{ dateValid:true };
      
    this.id=this._router.snapshot.params?.['id'];
    this.case.idCase=this.id;
  }
  checkdate(){
    console.log(this.session.startingDate);
    console.log(this.session.endingDate);
    if (this.session.startingDate=="" || this.session.endingDate=="" )
    {
      return true;
    }
    else if(this.session.startingDate<this.session.endingDate && this.session.startingDate!="" && this.session.endingDate!="" )
    {
      return true;
    }
    else{
      return false;
    }
  }

  onSave(){
    this.service.addSession(this.id,this.session)
    .subscribe(
        suc => {
          Swal.fire({title:"تم الحفظ",color:'green',confirmButtonColor:'green'}).then(() => {
            this._navigate.navigate(['/case3',this.id]);
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

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8 || charCode == 32)

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
