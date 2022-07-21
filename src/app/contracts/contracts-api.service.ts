import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class ContractsApiService {

  constructor(private _HttpClient:HttpClient, private _AngularFireDatabase:AngularFireDatabase) { }

  getData():Observable<any>
  {
    return this._AngularFireDatabase.list('contracts').valueChanges();
  }
}
