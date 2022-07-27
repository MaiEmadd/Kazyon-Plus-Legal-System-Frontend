import { Component, OnInit } from '@angular/core';
import { Case } from '../case';
import { ProcurartonService } from '../procurarton.service';

@Component({
  selector: 'app-case1',
  templateUrl: './case1.component.html',
  styleUrls: ['./case1.component.css']
})
export class Case1Component implements OnInit {
  

  
  displayedColumns: string[] = ['#','رقم القضيه', 'نوع القضية', 'السنة', 'اسم الموكل', 'اسم الخصم','btn'];
  cases: Case[]=[] ;
  name:String="";
  constructor(private procurartonService: ProcurartonService) { }

  ngOnInit(): void {
    this.procurartonService.getCases().subscribe((data: Case[]) => {
      console.log(data);
      this.cases = data;
    });
  }
  getProcurartion() {
    this.procurartonService.getCasesByName(this.name)
      .subscribe(data => {
        console.log(data)
        this.cases=data;
      })  }

  
}
