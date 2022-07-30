import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Case } from '../case';
import { ProcurartonService } from '../procurarton.service';

@Component({
  selector: 'app-case2',
  templateUrl: './case2.component.html',
  styleUrls: ['./case2.component.css']
})
export class Case2Component implements OnInit {
  [x: string]: any;

  case=new Case ;
  exform!: FormGroup;
  constructor(private service: ProcurartonService) { }

  ngOnInit(): void {
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
  onSave(){
    this.addCase();
    Swal.fire({title:"تم الحفظ"});
  }
  addCase() {
    this.case.sessionRequests=[];
    this.service.addCase(this.case)
      .subscribe(data => {
        console.log(data)
      })      
  }


}
