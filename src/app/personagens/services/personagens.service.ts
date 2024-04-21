import { environment } from './../../../environments/environments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IPersonagensData, IReturnAPI } from '../interfaces/personagens.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {
 private readonly API_URL = environment.apiUrl + '/character/';

  constructor(private http: HttpClient) { }

  lista(): Observable<IPersonagensData>{
    const params = new HttpParams()
    .set('page',1);
    return this.http.get<IReturnAPI>(this.API_URL, { params }).pipe(
      map((response: IReturnAPI ): IPersonagensData => ({
        personagens : response.results,
        nextPage : response.info.next,
        previosPage: response.info.prev,
        countPage: response.info.count
      }))
    );
  }

  busca(value: any): Observable<IPersonagensData>{
    const params = new HttpParams()
    .set('name', value.payload);
    return this.http.get<IReturnAPI>(this.API_URL, { params }).pipe(
      map((response: IReturnAPI ):IPersonagensData => ({
        personagens : response.results,
        nextPage : response.info.next,
        previosPage: response.info.prev,
        countPage: response.info.count
      }))
    );
  }
}
