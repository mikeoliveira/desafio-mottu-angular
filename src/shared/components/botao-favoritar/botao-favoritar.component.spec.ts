import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoFavoritarComponent } from './botao-favoritar.component';
import { MatIconModule } from '@angular/material/icon';

describe('BotaoFavoritarComponent', () => {
  let component: BotaoFavoritarComponent;
  let fixture: ComponentFixture<BotaoFavoritarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [BotaoFavoritarComponent]
    });
    fixture = TestBed.createComponent(BotaoFavoritarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
