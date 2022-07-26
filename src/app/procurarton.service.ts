import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Procuration } from 'src/app/procuration/procurartion';

@Injectable({
  providedIn: 'root'
})
export class ProcurartonService {

  private baseUrl = "http://localhost:8080/procuration";

  constructor(private http: HttpClient) { }

  getProcurartion(): Observable<Procuration[]>{
    return this.http.get<Procuration[]>(`${this.baseUrl+"/getall"}`);
  }
  getProcurartionByName(name:String): Observable<Procuration[]>{
    return this.http.get<Procuration[]>(`${this.baseUrl+"/search?name="+name}`);
  }
  addProcurartion(proc:Procuration): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(proc);
    console.log(body)
    return this.http.post(this.baseUrl + '/add', body,{'headers':headers})
  }
}
