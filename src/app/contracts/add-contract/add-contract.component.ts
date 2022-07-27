import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ContractConstants } from '../contract-constants';
import { Contract } from '../contract';
import { ContractsApiService } from '../contracts-api.service';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
    DatePipe
  ],
})
export class AddContractComponent implements OnInit{

files: any[] = [];


public contract!:Contract;

public constants = ContractConstants;

errorStoreCodeFlag = false;

store_codes?:any[];


className = "activeContract";

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

constructor(private _formBuilder: FormBuilder, private _contractService:ContractsApiService, private dateAdapter: DateAdapter<any>, private datePipe: DatePipe,
  private _router:Router) {

    this._contractService.listStoreCodes().subscribe((data) => {
      this.store_codes = data;
    })
}

checkCode() {
  if (this.store_codes?.indexOf((<Number> (<unknown>this.firstFormGroup.get('store_code')?.value))) != -1)
      this.errorStoreCodeFlag = true;
  else
    this.errorStoreCodeFlag = false;
}

valid_through:string | null = "";
end_date:string | null = "";
receiving_date:string | null = "";
opening_date:string | null = "";
renewal_date:string | null = "";

  transformDate(dateGiven?:Date, type?:string) {
    console.log(dateGiven);
    if (type == "السريان") {
     this.valid_through = this.datePipe.transform(dateGiven, 'yyyy/MM/dd');
      console.log(this.valid_through)
    } else if (type == "الانتهاء") {
      this.end_date = this.datePipe.transform(dateGiven, "yyyy/MM/dd");
    } else if (type == "الاستلام") {
      this.receiving_date = this.datePipe.transform(dateGiven, "yyyy/MM/dd");
    }
    else if (type == "الافتتاح") {
      this.opening_date = this.datePipe.transform(dateGiven, "yyyy/MM/dd");
    }
    else {
      this.renewal_date = this.datePipe.transform(dateGiven, "yyyy/MM/dd")
    }
  }

  firstFormGroup = this._formBuilder.group({
    store_code: ['', Validators.required],
    sap_code: [''],
    status: [this.constants.states[0].name, Validators.required]
  });

  secondFormGroup = this._formBuilder.group({
    branch_name: [''],
    branch_address: ['', Validators.required],
    governorate: ['', Validators.required],
    province: ['', Validators.required]
  });

  thirdFormGroup = this._formBuilder.group({
    end_date: '',
    renewal_date: '',
    valid_through: ['', Validators.required],
    opening_date: '',
    receiving_date: ''
  });

  fourthFormGroup = this._formBuilder.group({
    files:''
  });


  ngOnInit(): void {
    this.dateAdapter.setLocale('ar');
  }

  finish(files:any[]  ) {

    this.thirdFormGroup.get('valid_through')?.setValue(this.valid_through);
    this.thirdFormGroup.get('end_date')?.setValue(this.end_date);
    this.thirdFormGroup.get('receiving_date')?.setValue(this.receiving_date);
    this.thirdFormGroup.get('opening_date')?.setValue(this.opening_date);
    this.thirdFormGroup.get('renewal_date')?.setValue(this.renewal_date);


    let  apiBody = <Contract> Object.assign({}, this.firstFormGroup.value, this.secondFormGroup.value, this.thirdFormGroup.value);



    this._contractService.addContract(apiBody).subscribe( (data) => {
        this.contract = <Contract> data;

        this._contractService.addContractAttachments(files, <string> <unknown> this.contract.id).subscribe(data => {
          this._router.navigate(["contracts",this.contract.id])
        })
        },
        () => {
        }

    )
  }
}
