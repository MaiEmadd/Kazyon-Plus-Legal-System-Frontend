import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DateAdapter } from '@angular/material/core';
import { ContractsApiService } from '../contracts-api.service';
import {ActivatedRoute} from "@angular/router";
import { Contract } from '../contract';
import { ContractConstants } from '../contract-constants';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

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
        opacity:'0',
        padding: '0',
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

  download_url = "";
  store_codes?: any[];
  errorStoreCodeFlag = false;
  previous_store_code?: Number;
  has_previous_attachments?: Boolean;

  valid_through:string | null = "";
  end_date:string | null = "";
  receiving_date:string | null = "";
  opening_date:string | null = "";
  renewal_date:string | null = "";

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
    this._contractService.listStoreCodes().subscribe((data) => {
      this.store_codes = data;
    })
  }

  cancel(): void {
    this.editState = false;
  }

  save(files: any[]): void {

    this.currentContract.valid_through = this.datePipe.transform(<Date> <unknown>this.currentContract.valid_through, "yyyy/MM/dd");
    this.currentContract.end_date =  this.datePipe.transform(<Date> <unknown>this.currentContract.end_date, "yyyy/MM/dd");
    this.currentContract.opening_date =  this.datePipe.transform(<Date> <unknown>this.currentContract.opening_date, "yyyy/MM/dd");
    this.currentContract.receiving_date =  this.datePipe.transform(<Date> <unknown>this.currentContract.receiving_date, "yyyy/MM/dd");
    this.currentContract.renewal_date =  this.datePipe.transform(<Date> <unknown>this.currentContract.renewal_date, "yyyy/MM/dd");

    this._contractService.updateContract(this.currentContract, this.routerParams.snapshot.params?.['id']).subscribe( data => {
      this.currentContract = data;
      this.currentContract.has_attachment = this.has_previous_attachments;
    }, error => {console.log(error.status)})
    this.editState = false;

    if(files.length != 0)
    if (!this.currentContract.has_attachment)
      this._contractService.addContractAttachments(files, <string> this.routerParams.snapshot.params?.['id'] ).subscribe(data => {
        this.currentContract.has_attachment = true;
      })
    else
    this._contractService.appendContractAttachments(files, <string> this.routerParams.snapshot.params?.['id']).subscribe(data => {
      this.currentContract.has_attachment = true;
    })
  }

  printPage() {
    window.print();
  }

  constructor(private dateAdapter: DateAdapter<any>, private _contractService: ContractsApiService, private routerParams: ActivatedRoute, private _routerLink: Router,
    private datePipe: DatePipe) {
    this.currentContract = {}
    const id = this.routerParams.snapshot.params?.['id'];
    this._contractService.getContractById(id).subscribe((data)=> {
      this.currentContract = data
      this.has_previous_attachments = this.currentContract.has_attachment;
        this.download_url = `http://localhost:8080/contract/attachment/download/${this.routerParams.snapshot.params?.['id']}`

      if (data.status == "ساري") {
        this.className = "activeContract";
      } else if (data.status == "فسخ") {
        this.className = "stopContract";
      } else {
        this.className="warningContract";
      }
    },
      (error) => {
        this._routerLink.navigate(['**'])
      }
    )
   }

   checkCode() {
    if (this.store_codes?.indexOf((<Number> (<unknown>this.currentContract.store_code))) != -1 && this.currentContract.store_code != this.previous_store_code)
        this.errorStoreCodeFlag = true;
    else
      this.errorStoreCodeFlag = false;
  }



  ngOnInit(): void {


    this.dateAdapter.setLocale('ar');

  }



}
