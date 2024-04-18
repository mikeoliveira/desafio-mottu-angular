import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPersonagensComponent } from './busca-personagens.component';

describe('BuscaPersonagensComponent', () => {
  let component: BuscaPersonagensComponent;
  let fixture: ComponentFixture<BuscaPersonagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaPersonagensComponent]
    });
    fixture = TestBed.createComponent(BuscaPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
