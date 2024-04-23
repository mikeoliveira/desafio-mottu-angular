import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPersonagensComponent } from './busca-personagens.component';
import { PersonagensModule } from '../../personagens.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/store/app.state';

describe('BuscaPersonagensComponent', () => {
  let component: BuscaPersonagensComponent;
  let fixture: ComponentFixture<BuscaPersonagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PersonagensModule, BrowserAnimationsModule,StoreModule.forRoot(appReducer)]
    });
    fixture = TestBed.createComponent(BuscaPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
