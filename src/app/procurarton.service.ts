import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Procuration } from 'src/app/procurartion';
import { Case } from './case';
import { Session } from './session';

@Injectable({
  providedIn: 'root'
})
export class ProcurartonService {

  private baseUrl = "http://localhost:8080/procuration";
  private caseUrl= "http://localhost:8080/case";
  private sessionUrl= "http://localhost:8080/session";
  constructor(private http: HttpClient) { }

  getProcurartion(): Observable<Procuration[]>{
    return this.http.get<Procuration[]>(`${this.baseUrl+"/getall"}`);
  }
  getProcurartionByName(name:String): Observable<Procuration[]>{
    return this.http.get<Procuration[]>(`${this.baseUrl+"/search?name="+name}`);
  }
  getProcurartionByID(ID:number): Observable<Procuration>{
    return this.http.get<Procuration>(`${this.baseUrl+"/findbyid/"+ID}`);
  }
  addProcurartion(proc:Procuration): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(proc);
    console.log(body)
    return this.http.post(this.baseUrl + '/add', body,{'headers':headers})
  }
  updateProcurartion(proc:Procuration): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(proc);
    return this.http.put(this.baseUrl + '/update/'+proc.id, body,{'headers':headers})
  }
  getCases(): Observable<Case[]>{
    return this.http.get<Case[]>(`${this.caseUrl}`);
  }
  getCaseByID(ID:number): Observable<Case>{
    return this.http.get<Case>(`${this.caseUrl+"/"+ID}`);
  }
  addCase(cases:Case): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(cases);
    console.log(body)
    return this.http.post(this.caseUrl , body,{'headers':headers})
  }
  updateCase(cases:Case): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(cases);
    console.log("this");
    console.log(cases.idCase);
    return this.http.put(this.caseUrl + '/'+cases.idCase, body,{'headers':headers})
  }
  getSessionByCaseID(ID:number): Observable<Session[]>{
    return this.http.get<Session[]>(`${this.sessionUrl+"/"+ID}`);
  }
  getCasesByName(name:String): Observable<Case[]>{
    return this.http.get<Case[]>(`${this.caseUrl+"get-name?name="+name}`);
  }
}
