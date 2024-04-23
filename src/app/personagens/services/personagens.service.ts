import { environment } from './../../../environments/environments';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IPersonagensData, IReturnAPI } from '../interfaces/personagens.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {
 private readonly API_URL = environment.apiUrl + '/character/';

  constructor(private http: HttpClient) { }

  busca( value:any): Observable<IPersonagensData>{
    let params = new HttpParams();
    if(value.params) {
      params = params.set('name', value.params);
    }else {
      params = params.set('page',1);
    }
    return this.http.get<IReturnAPI>(this.API_URL, { params }).pipe(
      map((response: IReturnAPI ):IPersonagensData => ({
        personagens : response.results,
        nextPage : response.info.next,
        previosPage: response.info.prev,
        countPage: response.info.count,
        error: {} as HttpErrorResponse
      }))
    );
  }

  navigatePages( params:any ): Observable<IPersonagensData>{
    console.log(params);
    return this.http.get<IReturnAPI>(params.params).pipe(
      map((response: IReturnAPI ):IPersonagensData => ({
        personagens : response.results,
        nextPage : response.info.next,
        previosPage: response.info.prev,
        countPage: response.info.count,
        error: {} as HttpErrorResponse
      }))
    );
  }
}
