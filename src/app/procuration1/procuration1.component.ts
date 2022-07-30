import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchAll } from 'rxjs';
import { Procuration } from '../procurartion';
import { ProcurartonService } from '../procurarton.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-procuration1',
  templateUrl: './procuration1.component.html',
  styleUrls: ['./procuration1.component.css']
})
export class Procuration1Component implements OnInit {
  procuration = new Procuration();
  exform!: FormGroup;
  constructor(private service: ProcurartonService) { }

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
    Swal.fire({title:"تم الحفظ"});
  }

}
