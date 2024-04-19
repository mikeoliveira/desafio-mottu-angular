import { IPersonagens, Result } from '../interfaces/personagens.interface';
import { environment } from './../../../environments/environments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {
 private readonly API_URL = environment.apiUrl + '/character/';

  constructor(private http: HttpClient) { }

  list(){
    const params = new HttpParams()
    .set('page',1);
    return this.http.get(this.API_URL, { params });
  }
}
