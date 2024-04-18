import { LocalStorageService } from './../../core/services/local-storage.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent {
  titlePage = '';

  constructor(
    private router: Router,
  ){

  }

  ngOnInit(): void {
    this.informaTitulo()
  }

  informaTitulo(){
    switch (this.router.url) {
      case '/':
        this.titlePage = 'Início';
        break;
      case '/favoritos':
        this.titlePage = 'Favoritos';
        break;
      default:
        break;
    }
  }
}
