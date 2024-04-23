import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensComponent } from './personagens.component';
import { BuscaPersonagensComponent } from './components/busca-personagens/busca-personagens.component';
import { PersonagensModule } from './personagens.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../store/app.state';

describe('PersonagensComponent', () => {
  let component: PersonagensComponent;
  let fixture: ComponentFixture<PersonagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PersonagensModule, BrowserAnimationsModule, HttpClientTestingModule, StoreModule.forRoot(appReducer)],
      declarations: [BuscaPersonagensComponent]
    });
    fixture = TestBed.createComponent(PersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
