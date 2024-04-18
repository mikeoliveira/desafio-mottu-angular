import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagensComponent } from './personagens.component';
import { BuscaPersonagensComponent } from './components/busca-personagens/busca-personagens.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListaPersonangensComponent } from './components/lista-personangens/lista-personangens.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonagensRoutingModule } from './personagens-routing.module';



@NgModule({
  declarations: [
    PersonagensComponent,
    BuscaPersonagensComponent,
    ListaPersonangensComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    PersonagensRoutingModule
  ]
})
export class PersonagensModule { }
