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
  id:number=0;
  exform!: FormGroup;
  displayedColumns: string[] = ['تاريخ الجلسة الحاليه ', 'قرار الجلسة الحاليه ','تاريخ الجلسة القادمه'];

  dataSource?: any;
  constructor( private service: ProcurartonService,private _router: ActivatedRoute, private _navigate: Router,private fb: FormBuilder) {

  }

  caseFlag = true
  ngOnInit(): void {

    this.id=this._router.snapshot.params?.['id'];
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
    Swal.fire({title:"تم الحفظ"}).then(() => {
      this._navigate.navigate(['case']);
    });
  }
  getSessionByID(){
    this.service.getSessionByCaseID(this.id).subscribe((data: Session[]) => {
      console.log("this");
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

}
