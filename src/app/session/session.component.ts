import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Case } from '../case';
import { ProcurartonService } from '../procurarton.service';
import {Session} from "../session";

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
    this.id=this._router.snapshot.params?.['id'];
    this.case.idCase=this.id;
  }

  onSave(){
    this.service.addSession(this.id,this.session)
      .subscribe(data => {
        console.log(data);
      })  ;
    Swal.fire({title:"تم الحفظ"}).then(() => {
      this._navigate.navigate(['/case3',this.id]);
    });
  }


}
