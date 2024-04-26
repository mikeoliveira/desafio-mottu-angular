import { LocalStorageService } from 'src/core/services/local-storage.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {PersonagensFavoritosPageActions} from './../../../app/store/personagens.action';
import { Store } from '@ngrx/store';
import { IPersonagens } from 'src/app/personagens/interfaces/personagens.interface';
@Component({
  selector: 'botao-favoritar',
  templateUrl: './botao-favoritar.component.html',
  styleUrls: ['./botao-favoritar.component.scss']
})
export class BotaoFavoritarComponent {
  @Input() isFavorito:boolean = false;
  @Input() dadosPersonagem!: IPersonagens;
  @Output() informeRemovePersonagem = new EventEmitter<IPersonagens>();

  iconeFavorito?:string;

  constructor(private store:Store,
    private localStorageService: LocalStorageService
  ){}

  ngOnInit():void {
    this.changeIcon();
  }

  toggleFavorito(value:boolean){
    if(value) {
      this.store.dispatch(PersonagensFavoritosPageActions.removePersonagensFavoritos({ payload: this.dadosPersonagem}))
      this.removePersonagem(this.dadosPersonagem);
    }else {
      this.store.dispatch(PersonagensFavoritosPageActions.adicionaPersonagensFavoritos({ payload: this.dadosPersonagem}))
    }
    this.isFavorito = !value;
    this.changeIcon();
  }

  changeIcon(){
    this.iconeFavorito = (this.isFavorito)? 'favorite' : 'favorite_border'
  }

  removePersonagem(value:IPersonagens){
    this.informeRemovePersonagem.emit(value);
  }
}
