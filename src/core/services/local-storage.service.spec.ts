import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${LocalStorageService.prototype.setItem.name} and ${LocalStorageService.prototype.getItem.name} -
  should return the object equals the let data = {teste1: 'value1', teste2: 'value2'}`, () => {
    let data = {teste1: 'value1', teste2: 'value2'}
    service.setItem('teste', data);
    expect(service.getItem('teste')).toEqual({teste1: 'value1', teste2: 'value2'})
  })

  it(`#${LocalStorageService.prototype.removeItem.name}
  should return (null) toBeFalsy - We setItem('teste2') follow remove this key`, () => {
    let data = {teste3: 'value3', teste4: 'value4'}
    service.setItem('teste2', data);
    expect(service.getItem('teste2')).toEqual({teste3: 'value3', teste4: 'value4'});
    service.removeItem('teste2');
    expect(service.getItem('teste2')).toBeFalsy;
  })
});

