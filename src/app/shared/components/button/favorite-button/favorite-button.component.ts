import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {PersonagensFavoritosPageActions} from 'src/app/store/personagens.action';
import { Store } from '@ngrx/store';
import { IPersonagens } from 'src/app/personagens/interfaces/personagens.interface';
@Component({
  selector: 'favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent {
  @Input() isFavorito:boolean = false;
  @Input() dadosPersonagem!: IPersonagens;
  @Output() informeRemovePersonagem = new EventEmitter<IPersonagens>();

  iconeFavorito?:string;

  constructor(private store:Store){}

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
