import { LocalStorageService } from './../../core/services/local-storage.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent {
  title = '';

  constructor(
    private router: Router,
  ){
    console.log(router.url);
  }

  ngOnInit(): void {
  }

}
