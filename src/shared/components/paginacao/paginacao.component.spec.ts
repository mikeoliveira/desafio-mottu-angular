import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacaoComponent } from './paginacao.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/store/app.state';

describe('PaginacaoComponent', () => {
  let component: PaginacaoComponent;
  let fixture: ComponentFixture<PaginacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[StoreModule.forRoot(appReducer)],
      declarations: [PaginacaoComponent]
    });
    fixture = TestBed.createComponent(PaginacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
