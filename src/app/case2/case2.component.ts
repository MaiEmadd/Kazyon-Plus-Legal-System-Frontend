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
  fileToUpload!: File | null;
  file: any;
  files: any[]=[];
  files2: any[]=[];
  documentList: any[] = [];
  
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
  onChange(event: any) {
    this.files = event.target.files;
    this.documentList = event.target.files;
   }
  remove(index:number){
   this.files2=[];
   for (let i = 0; i < this.files.length; i++) {
     this.file = this.files[i];
     if (index != i)
     {
       this.files2.push(this.file)
      } // here you exclude the file. thus removing it.
   }
   this.documentList = this.files2;
   this.files=this.files2;
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
          if (this.files.length>0)
          {
            console.log(suc.hasAttachment);

            if (suc.hasAttachment==false)
            {
              this.service.uploadPdfProc("cases",this.files,suc.idCase).subscribe(data => {
                console.log("thissss",data);
              }) ;
            }
            else{
              this.service.appendPdfProc("cases",this.files,suc.idCase).subscribe(data => {
                console.log(data);
              }) ;
            }
          }
          console.log("hi",suc.idCase);
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
