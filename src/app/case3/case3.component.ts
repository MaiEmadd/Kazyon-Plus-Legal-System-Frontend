import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Case } from '../case';
import { ProcurartonService } from '../procurarton.service';
import { Session } from '../session';

@Component({
  selector: 'app-case3',
  templateUrl: './case3.component.html',
  styleUrls: ['./case3.component.css']
})
export class Case3Component implements OnInit {

  data:any[] = [
    {nextsession:'02/06/2017', currentsession: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', currsesdec: '03/06/2017'}, 
    {nextsession:'02/06/2017', currentsession: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', currsesdec: '03/06/2017'}, 
    {nextsession:'02/06/2017', currentsession: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', currsesdec: '03/06/2017'}, 
    {nextsession:'02/06/2017', currentsession: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', currsesdec: '03/06/2017'}, 
    {nextsession:'02/06/2017', currentsession: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', currsesdec: '03/06/2017'},  
  ];
  session: Session[] =[];
  case: Case = new Case;
  id:number=0;
  exform!: FormGroup;
  displayedColumns: string[] = ['تاريخ الجلسة الحاليه ', 'قرار الجلسة الحاليه ','تاريخ الجلسة القادمه'];
 dataSource = this.data;

  constructor( private service: ProcurartonService,private _router: ActivatedRoute, private _navigate: Router) { 

    
  }

  ngOnInit(): void {
    
    this.id=this._router.snapshot.params?.['id'];
    this.getSessionByID();
    console.log(this.id);
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
      .subscribe(data => {
      })      
  }
  onSave(){
    this.updateCase();
    Swal.fire({title:"تم الحفظ"}).then(() => {
      console.log('sad');
      this._navigate.navigate(['case']);
    });
  }
  getSessionByID(){
    this.service.getSessionByCaseID(this.id).subscribe((data: Session[]) => {
      console.log("this");
      console.log(data);
      this.session = data;
    });
  }
  getCaseByID() {
    this.service.getCaseByID(this.id)
      .subscribe(data2 => {
        console.log(data2);
        this.case=data2;
      })  }

}

