import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoFavoritarComponent } from './components/botao-favoritar/botao-favoritar.component';
import { MatIconModule } from '@angular/material/icon';
import { PaginacaoComponent } from './components/paginacao/paginacao.component';

@NgModule({
  declarations: [
    BotaoFavoritarComponent,
    PaginacaoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    BotaoFavoritarComponent,
    PaginacaoComponent
  ]
})
export class SharedModule { }
