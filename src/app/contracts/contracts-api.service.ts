import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Contract } from './contract';
import { ContractSummary } from './contract-summary';
import { Observable, ObservedValueOf} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContractsApiService {



  constructor(private _HttpClient:HttpClient) { }

  api = 'http://localhost:8080/contract/'

  getAllContracts(filter_string?:String):Observable<Contract[]> {
    return this._HttpClient.get<Contract[]>(this.api + "filter?" + filter_string);
  }

  getContractById(id: Number):Observable<Contract> {
    return this._HttpClient.get<Contract>(this.api + id);
  }

  getContractStatusCount():Observable<ContractSummary> {
    return this._HttpClient.get(this.api + "status");
  }

  // downloadContractAttachment (store_code?:Number | undefined): any {
  //   return this._HttpClient.get(this.api + `attachment/download/${store_code}.zip`, {responseType: 'blob'});
  // }

  addContractAttachments(files: any[], id?: string | null) {
    var fd = new FormData();

    files.forEach(file => {
      fd.append("files", file, file.name);
    })
    return this._HttpClient.post<Contract[]>(this.api + "attachment/upload?" + "id="+  <Number>  <unknown>id, fd, {
      headers: {
        "mimeType" : "multipart/form-data"
      }
    });
  }


  appendContractAttachments(files: any[], id?: string | null) {
    var fd = new FormData();

    files.forEach(file => {
      fd.append("files", file, file.name);
    })
    return this._HttpClient.post<Contract[]>(this.api + "attachment/append?" + "id="+  <Number>  <unknown>id, fd, {
      headers: {
        "mimeType" : "multipart/form-data"
      }
    });
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

  updateContract(contract:Contract, id?:String) {

    return this._HttpClient.post(this.api + id, contract);

  }



//   getContractsStatistics():Observable<Contract> {
//     return this._HttpClient.get<Contract>(this.api + id);
//   }
}
