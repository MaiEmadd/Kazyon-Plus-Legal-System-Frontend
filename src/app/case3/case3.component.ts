import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Case } from '../case';
import { ProcurartonService } from '../procurarton.service';
import { Session } from '../session';
import {MatTable} from "@angular/material/table";
import {MatDatepicker} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-case3',
  templateUrl: './case3.component.html',
  styleUrls: ['./case3.component.css']
})
export class Case3Component implements OnInit {

  rows?:FormArray;
  sessions: Session[] =[];
  case: Case = new Case;
  session: Session=new Session;
  id:number=this._router.snapshot.params?.['id'];
  exform!: FormGroup;
  displayedColumns: string[] = ['تاريخ الجلسة الحاليه ', 'قرار الجلسة الحاليه ','تاريخ الجلسة القادمه'];
  // dataSource = this.data;

  dataSource?: any;
  fileToUpload!: File | null;
  file: any;
  files: any[]=[];
  files2: any[]=[];
  documentList: any[] = [];
  downloadUrl = `http://localhost:8080/attachment/download/${this.id}?type=cases`
  constructor( private service: ProcurartonService,private _router: ActivatedRoute, private _navigate: Router,private fb: FormBuilder) {

  }

  caseFlag = true
  ngOnInit(): void {
    console.log(this._router.snapshot.params?.['id']);
    this.case.idCase=this.id;
    this.getSessionByID();
    this.getCaseByID();
    this.exform = new FormGroup({
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
  updateCase() {
    this.service.updateCase(this.case)
      .subscribe(data => {})
  }
  onSave(){
    this.updateCase();
    if (this.files.length>0)
      {
        console.log(this.case.hasAttachment);

        if (this.case.hasAttachment==false)
        {
          this.service.uploadPdfProc("cases",this.files,this.case.idCase).subscribe(data => {
            console.log(data);
          }) ;
        }
        else{
          this.service.appendPdfProc("cases",this.files,this.case.idCase).subscribe(data => {
            console.log(data);
          }) ;
        }
      }
    Swal.fire({title:"تم الحفظ"}).then(() => {
      this._navigate.navigate(['case']);
    });
  }
  getSessionByID(){
    this.service.getSessionByCaseID(this.id).subscribe((data: Session[]) => {
      this.sessions = data;
      this.dataSource = this.sessions;
    });


  }

  getCaseByID() {
    this.service.getCaseByID(this.id)
      .subscribe(data2 => {
        this.case=data2;
      })  }

  toggle() {
    this.caseFlag = !this.caseFlag;
  }

  addSession(table : MatTable<any>){
    this.service.addSession(this.id,this.session).subscribe(data  => {
    })

    table.renderRows();
    // this.sessions.push(this.session);
  }


  addRow(table : MatTable<any>){
    table.renderRows();
  }
  // createItemFormGroup(): FormGroup {
  //   return this.fb.group({
  //     current: this.session.start,
  //     decision: this.session.decision,
  //     next: this.session.end
  //   });
  // }
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
