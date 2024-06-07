import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteButtonComponent } from './favorite-button.component';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/store/app.state';

describe('BotaoFavoritarComponent', () => {
  let component: FavoriteButtonComponent;
  let fixture: ComponentFixture<FavoriteButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, StoreModule.forRoot(appReducer)],
      declarations: [FavoriteButtonComponent]
    });
    fixture = TestBed.createComponent(FavoriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
