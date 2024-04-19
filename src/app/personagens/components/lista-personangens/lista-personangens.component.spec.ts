import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonangensComponent } from './lista-personangens.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListaPersonangensComponent', () => {
  let component: ListaPersonangensComponent;
  let fixture: ComponentFixture<ListaPersonangensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
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
