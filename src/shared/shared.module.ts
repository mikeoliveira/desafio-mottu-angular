import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoFavoritarComponent } from './components/botao-favoritar/botao-favoritar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BotaoFavoritarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    BotaoFavoritarComponent
  ]
})
export class SharedModule { }
