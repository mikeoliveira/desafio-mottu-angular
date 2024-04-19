import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPersonagensComponent } from './busca-personagens.component';
import { PersonagensModule } from '../../personagens.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BuscaPersonagensComponent', () => {
  let component: BuscaPersonagensComponent;
  let fixture: ComponentFixture<BuscaPersonagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PersonagensModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(BuscaPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
