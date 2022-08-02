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
private base1Url="http://localhost:8080/";
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
    return this.http.get<Procuration>(`${this.baseUrl+"/view/"+ID}`);
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
    console.log("sss");
    return this.http.get<Session[]>(`${this.sessionUrl+"/"+ID}`);
  }
  getCasesByName(name:String): Observable<Case[]>{
    return this.http.get<Case[]>(`${this.caseUrl+"/get-name?name="+name}`);
  }
  uploadPdfProc(type:string,files: any[], id?: number | null){
    var fd = new FormData();
    console.log("hi");
    for (let i=0;i<files.length;i++)
    {
      fd.append("files", files[i], files[i].name);
    }
    fd.append("type",type);
    return this.http.post(this.base1Url + "attachment/upload?" + "id="+  <Number>  <unknown>id, fd, {
      headers: {
        "mimeType" : "multipart/form-data"
      }
    });
  }
  appendPdfProc(type:string,files: any[], id?: number | null){
    var fd = new FormData();
    console.log("hi");
    for (let i=0;i<files.length;i++)
    {
      fd.append("files", files[i], files[i].name);
    }
    fd.append("type",type);
    return this.http.post(this.base1Url + "attachment/append?" + "id="+  <Number>  <unknown>id, fd, {
      headers: {
        "mimeType" : "multipart/form-data"
      }
    });
  }
 addSession(id:Number,session:Session): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(session);
    console.log(body)
    return this.http.post(this.sessionUrl+"/add/"+id , body,{'headers':headers})
  }

  downloadPdfProc(id?: number | null,type?:string|null){
    return this.http.get(this.base1Url + "attachment/download/"+id+"?type="+type);}
  
}
