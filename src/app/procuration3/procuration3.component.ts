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
  id:number=this._router.snapshot.params?.['id'];
  exform!: FormGroup;
  displayedColumns: string[] = ['#','اسم الموكل', 'رقم التوكيل', 'السنة', 'مكتب التوثيق', 'رقم التوكيل بالمكتب','btn'];
  fileToUpload!: File | null;
  file: any;
  files: any[]=[];
  files2: any[]=[];
  documentList: any[] = [];
  hasAttachament?:boolean;

  downloadUrl = `http://localhost:8080/attachment/download/${this.id}?type=procurations`

  constructor(private service: ProcurartonService, private _router: ActivatedRoute, private _navigate: Router) { }

  ngOnInit() {
    this.getProcurartionbyID();

    this.exform = new FormGroup({
      'client_name' : new FormControl(null, Validators.required),
      'year': new FormControl(null, [Validators.required]),
      'office' : new FormControl(null, [Validators.required]),
      'procuration_number':new FormControl(null, [Validators.required]),
      'office_procuration_number':new FormControl(null, [Validators.required])
    });
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
    updateProcurartion() {
      this.service.updateProcurartion(this.proc)
        .subscribe(data => {
        })
    }
    onSave(){
      this.updateProcurartion();
      if (this.files.length>0)
      {
        console.log(this.proc.hasAttachment);

        if (this.proc.hasAttachment==false)
        {
          this.service.uploadPdfProc("procurations",this.files,this.proc.id).subscribe(data => {
            console.log(data);
          }) ;
        }
        else{
          this.service.appendPdfProc("procurations",this.files,this.proc.id).subscribe(data => {
            console.log(data);
          }) ;
        }
      }

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

  letterOnly(event: { keyCode: any; })
  {
    var charCode = event.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)

      return true;
    else
      return false;
  }
}


