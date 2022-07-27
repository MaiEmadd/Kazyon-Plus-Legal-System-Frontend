import { Component, OnInit } from '@angular/core';
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

