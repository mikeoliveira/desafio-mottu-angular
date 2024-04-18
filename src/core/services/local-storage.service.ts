import { Injectable } from '@angular/core';
import { CryptoServiceService } from './crypto-service.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  _key = "secret_key";

  constructor(private cryptoServiceService: CryptoServiceService) { }

  setItem(key: string, data: unknown): void {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key,this.cryptoServiceService.encrypt(serializedData));
    } catch (error) {
      console.error(`Error storing data for key ${key}: ${error}`);
    }
  }

  getItem(key: string): unknown | null {
    const serializedData = localStorage.getItem(key);
    if(serializedData) {
      try {
        return JSON.parse(this.cryptoServiceService.decrypt(serializedData));
      } catch (error) {
        console.log(`Error retrieving data for key ${key}: ${error}`);
      }
    }
    return null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

}
