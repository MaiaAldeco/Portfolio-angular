import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticService {
  url = "http://localhost:8080/login/"
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

  Login(credenciales:any):Observable<any>{
    return this.http.post(this.url,credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }
}