import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonangensComponent } from './lista-personangens.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/store/app.state';

describe('ListaPersonangensComponent', () => {
  let component: ListaPersonangensComponent;
  let fixture: ComponentFixture<ListaPersonangensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(appReducer)
      ],
      declarations: [ListaPersonangensComponent]
    });
    fixture = TestBed.createComponent(ListaPersonangensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
