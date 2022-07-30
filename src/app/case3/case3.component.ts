import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  displayedColumns: string[] = ['تاريخ الجلسة القادمه','تاريخ الجلسة الحاليه ', 'قرار الجلسة الحاليه '];
 dataSource = this.data;

  constructor( private service: ProcurartonService,private _router: ActivatedRoute) { 

    
  }

  ngOnInit(): void {
    
    this.id=this._router.snapshot.params?.['id'];
    this.service.getSessionByCaseID(this.id).subscribe((data: Session[]) => {
      console.log("this");
      console.log(data);
      this.session = data;
    });
    console.log(this.id);
    this.getCaseByID();
    this.exform = new FormGroup({
      'client' : new FormControl(null, Validators.required),
      'clientstat' : new FormControl(null, Validators.required),
      'against' : new FormControl(null, Validators.required),
      'againststat' : new FormControl(null, Validators.required),
      'category' : new FormControl(null, Validators.required),
      'caseyear': new FormControl(null, [Validators.required]),
      'office' : new FormControl(null, [Validators.required]),
      'numbercase':new FormControl(null, [Validators.required]),
      'filenumber':new FormControl(null, [Validators.required]),
      'area':new FormControl(null, [Validators.required])
    });
  }
  updateCase() {
    this.service.updateCase(this.case)
      .subscribe(data => {
      })      
  }
  getCaseByID() {
    this.service.getCaseByID(this.id)
      .subscribe(data2 => {
        console.log(data2);
        this.case=data2;
      })  }

}

