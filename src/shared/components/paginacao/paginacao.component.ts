import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { PersonagensPageActions } from 'src/app/store/personagens.action';

@Component({
  selector: 'paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss']
})
export class PaginacaoComponent {
  @Input() totalDePaginas:any;
  @Input() urlProximaPagina:any = '';
  @Input() urlPaginaAnterior:any = '';
  count: number = 1;
  constructor(private store:Store){}

  ngOnInit(){

  }

  navegarPagina(url: any, action: string){

    this.store.dispatch(PersonagensPageActions.loadPagesPersonagens({ params: url }));

    (action == 'next')? this.count++ : this.count--;
  }

}
