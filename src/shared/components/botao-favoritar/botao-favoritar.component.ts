import { Component, Input } from '@angular/core';

@Component({
  selector: 'botao-favoritar',
  templateUrl: './botao-favoritar.component.html',
  styleUrls: ['./botao-favoritar.component.scss']
})
export class BotaoFavoritarComponent {
  @Input() isFavorito:boolean = false;
  iconeFavorito?:string;
  ngOnInit():void {
    this.changeIcon();
  }

  toggleFavorito(value:boolean){
    this.isFavorito = !value;
    this.changeIcon();
  }

  changeIcon(){
    this.iconeFavorito = (this.isFavorito)? 'favorite' : 'favorite_border'
  }

}
