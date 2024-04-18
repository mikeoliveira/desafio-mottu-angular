import { PersonagensModule } from './personagens.module';
import { RouterModule, Routes } from '@angular/router';
import { PersonagensComponent } from './personagens.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PersonagensComponent
  },
  {
    path: 'favoritos',
    component: PersonagensComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PersonagensRoutingModule { }
