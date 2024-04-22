import { Component, Input } from '@angular/core';
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

  iconeFavorito?:string;

  constructor(private store:Store){}

  ngOnInit():void {
    this.changeIcon();
  }

  toggleFavorito(value:boolean){
    if(value) {
      this.store.dispatch(PersonagensFavoritosPageActions.removePersonagensFavoritos({ payload: this.dadosPersonagem}))
    }else {
      this.store.dispatch(PersonagensFavoritosPageActions.addPersonagensFavoritos({ payload: this.dadosPersonagem}))
    }
    this.isFavorito = !value;
    this.changeIcon();
  }



  changeIcon(){
    this.iconeFavorito = (this.isFavorito)? 'favorite' : 'favorite_border'
  }
}
