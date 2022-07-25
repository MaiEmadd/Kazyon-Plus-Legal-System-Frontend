import { Component, OnInit } from '@angular/core';
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
export class AddContractComponent implements OnInit {

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

valid_date:string | null = "";
end_date:string | null = "";
received_date:string | null = "";
beginning_date:string | null = "";
renewal_date:string | null = "";

  transformDate(dateGiven?:Date, type?:string) {
    console.log(type)
    if (type == "السريان") {
     this.valid_date = this.datePipe.transform(dateGiven, 'yyyy/MM/dd');
     this.thirdFormGroup.get('valid_through')?.setValue(this.valid_date);
    } else if (type == "الانتهاء") {
      this.end_date = this.datePipe.transform(dateGiven, "yyyy/MM/dd")
    } else if (type == "الاستلام")
      this.received_date = this.datePipe.transform(dateGiven, "yyyy/MM/dd")
    else if (type == "الافتتاح")
      this.beginning_date = this.datePipe.transform(dateGiven, "yyyy/MM/dd")
    else
    this.renewal_date = this.datePipe.transform(dateGiven, "yyyy/MM/dd")



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
  })

  ngOnInit(): void {
    this.dateAdapter.setLocale('ar');
  }

  finish() {

    let  apiBody = <Contract> Object.assign({}, this.firstFormGroup.value, this.secondFormGroup.value, this.thirdFormGroup.value);
    console.log(apiBody);

    this._contractService.addContract(apiBody).subscribe( (data) => {
        this.contract = <Contract> data;
        this._router.navigate(["contracts",this.contract.id])},
        () => {

        }

    )
  }
}
