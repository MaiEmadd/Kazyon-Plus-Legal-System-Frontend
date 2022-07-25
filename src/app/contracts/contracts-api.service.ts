import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contract } from './contract';
import { ContractSummary } from './contract-summary';
import { Observable, ObservedValueOf} from 'rxjs';
import { List } from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class ContractsApiService {



  constructor(private _HttpClient:HttpClient) { }

  api = 'http://localhost:8080/contract/'

  getAllContracts():Observable<Contract[]> {
    return this._HttpClient.get<Contract[]>(this.api + "filter");
  }

  getContractById(id: Number):Observable<Contract> {
    return this._HttpClient.get<Contract>(this.api + id);
  }

  getContractStatusCount():Observable<ContractSummary> {
    return this._HttpClient.get(this.api + "status");
  }

  addContract(contract:Contract):Observable<Contract> {

    return this._HttpClient.post<Contract>(this.api, contract, {
      headers: {
        "Access-Control-Allow-Origin":"*",
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    });

  }

  listStoreCodes():Observable<number[]> {
    return this._HttpClient.get<number[]>(this.api + "store-codes");
  }



//   getContractsStatistics():Observable<Contract> {
//     return this._HttpClient.get<Contract>(this.api + id);
//   }
}
