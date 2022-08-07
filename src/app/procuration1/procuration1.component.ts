import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchAll } from 'rxjs';
import { Procuration } from '../procurartion';
import { ProcurartonService } from '../procurarton.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-procuration1',
  templateUrl: './procuration1.component.html',
  styleUrls: ['./procuration1.component.css']
})
export class Procuration1Component implements OnInit {
  procuration = new Procuration();
  exform!: FormGroup;
  constructor(private service: ProcurartonService, private _navigate: Router) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'client_name' : new FormControl(null, Validators.required),
      'year': new FormControl(null, [Validators.required]),
      'office' : new FormControl(null, [Validators.required]),
      'procuration_number':new FormControl(null, [Validators.required]),
      'office_procuration_number':new FormControl(null, [Validators.required])
    });
    }

  addProcurartion() {
    this.service.addProcurartion(this.procuration)
      .subscribe(data => {
        console.log(data)
      })
  }
  onSave(){
    this.addProcurartion();
    Swal.fire({title:"تم الحفظ"}).then(() => {
      console.log('sad');
      this._navigate.navigate(['procuration']);
    });
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
