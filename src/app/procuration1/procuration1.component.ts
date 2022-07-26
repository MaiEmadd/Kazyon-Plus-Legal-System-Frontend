import { Component, OnInit } from '@angular/core';
import { Procuration } from '../procuration/procurartion';
import { ProcurartonService } from '../procuration/procurarton.service';
@Component({
  selector: 'app-procuration1',
  templateUrl: './procuration1.component.html',
  styleUrls: ['./procuration1.component.css']
})
export class Procuration1Component implements OnInit {
  procuration = new Procuration();
  constructor(private service: ProcurartonService) { }

  ngOnInit(): void {
    
  }
  addProcurartion() {
    this.service.addProcurartion(this.procuration)
      .subscribe(data => {
        console.log(data)
      })      
  }

}
