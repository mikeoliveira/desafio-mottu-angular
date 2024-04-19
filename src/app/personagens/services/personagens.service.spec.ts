import { TestBed } from '@angular/core/testing';

import { PersonagensService } from './personagens.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PersonagensService', () => {
  let service: PersonagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PersonagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
