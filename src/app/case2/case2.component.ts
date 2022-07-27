import { Component, OnInit } from '@angular/core';
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
  constructor(private service: ProcurartonService) { }

  ngOnInit(): void {
  }
  addCase() {
    this.service.addCase(this.case)
      .subscribe(data => {
        console.log(data)
      })      
  }


}
