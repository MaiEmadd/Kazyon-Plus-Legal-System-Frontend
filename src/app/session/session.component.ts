import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private service: ProcurartonService, private _build: FormBuilder, private _navigate: Router) {
  }

  ngOnInit(): void {
    this.exform = this._build.group({
      'startingDate': new FormControl("", Validators.required),
      'decisionStatus': new FormControl("", Validators.required),
      'endingDate': new FormControl("", Validators.required),
    });

  }

  onSave(){
    this.addSession();
    Swal.fire({title:"تم الحفظ"}).then(() => {
      this._navigate.navigate(['case']);
    });
  }


}
