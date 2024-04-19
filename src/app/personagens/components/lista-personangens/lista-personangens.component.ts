import { IPersonagens, Result } from './../../interfaces/personagens.interface';
import { Component } from '@angular/core';
import { PersonagensService } from '../../services/personagens.service';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';

@Component({
  selector: 'lista-personangens',
  templateUrl: './lista-personangens.component.html',
  styleUrls: ['./lista-personangens.component.scss']
})
export class ListaPersonangensComponent {
  personagens$?:Observable<any>;

  constructor(
    private personagensService: PersonagensService
  ){ }

  ngOnInit(): void {
    this.personagens$ =  this.personagensService.list().pipe(
      map((res: any): Result[] => {
        return res.results
      })
    )
  }
}
