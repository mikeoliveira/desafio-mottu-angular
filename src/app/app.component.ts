import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
3

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){

  }

  title = 'desafio-mottu-angular';

}
