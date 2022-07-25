import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DateAdapter } from '@angular/material/core';
import { ContractsApiService } from '../contracts-api.service';
import {ActivatedRoute} from "@angular/router";
import { Contract } from '../contract';
import { ContractConstants } from '../contract-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-contract',
  templateUrl: './show-contract.component.html',
  styleUrls: ['./show-contract.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initialArrow', style({

      })),
      state('invertedArrow', style({
        transform: "rotate(180deg)"
      })),
      state('initial', style({
        height:'0',
        overflow:'hidden',
        opacity:'0'
      })),
      state('final', style({
        overflow:'hidden',
        opacity:'1'
      })),
      transition('initial=>final', animate('300ms')),
      transition('final=>initial', animate('300ms')),
      transition('initialArrow=>invertedArrow', animate('300ms')),
      transition('invertedArrow=>initialArrow', animate('300ms'))
    ]),
  ]
})
export class ShowContractComponent implements OnInit {

  currentContract :Contract;

  constants = ContractConstants;


  isCollapsed = {
    contractInfo: false,
    branchInfo: false,
    dates: false,
    attachments: false
  }

  editState = false

  className = "";

  setClass(className: string): void {
    ContractConstants.states.forEach(state => {
        if (className == "ساري") {
          this.className = "activeContract";
        } else if (className == "فسخ") {
          this.className = "stopContract";
        } else {
          this.className="warningContract";
        }
    });
  }

  colapse(type: any) {
    this.isCollapsed[type as keyof typeof this.isCollapsed] = !this.isCollapsed[type as keyof typeof this.isCollapsed];
  }

  edit():void {
    this.editState = true;
  }

  cancel(): void {
    this.editState = false;
  }

  save(): void {

  }

  printPage() {
    window.print();
  }

  constructor(private dateAdapter: DateAdapter<any>, private _contractService: ContractsApiService, private routerParams: ActivatedRoute, private _routerLink: Router) {
    this.currentContract = {}
    const id = this.routerParams.snapshot.params?.['id'];
    this._contractService.getContractById(id).subscribe((data)=> {
      this.currentContract = data
      if (data.status == "ساري") {
        this.className = "activeContract";
      } else if (data.status == "فسخ") {
        this.className = "stopContract";
      } else {
        this.className="warningContract";
      }
    },
      (error) => {
        if (error.status == 404)
        this._routerLink.navigate(['**'])
      }
    )
   }

  ngOnInit(): void {


    this.dateAdapter.setLocale('ar');

  }



}
