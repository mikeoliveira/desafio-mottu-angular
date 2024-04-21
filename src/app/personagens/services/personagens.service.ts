import { environment } from './../../../environments/environments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {
 private readonly API_URL = environment.apiUrl + '/character/';

  constructor(private http: HttpClient) { }

  lista(): Observable<any>{
    const params = new HttpParams()
    .set('page',1);
    return this.http.get(this.API_URL, { params });
  }

  busca(value: any): Observable<any>{
    const params = new HttpParams()
    .set('name', value.payload);
    return this.http.get(this.API_URL, { params })
  }
}
