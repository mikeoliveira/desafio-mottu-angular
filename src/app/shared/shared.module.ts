import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteButtonComponent } from './components/button/favorite-button/favorite-button.component';
import { MatIconModule } from '@angular/material/icon';
import { PaginacaoComponent } from './components/paginacao/paginacao.component';

@NgModule({
  declarations: [
    FavoriteButtonComponent,
    PaginacaoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    FavoriteButtonComponent,
    PaginacaoComponent
  ]
})
export class SharedModule { }
