import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  _key = "secret_key";
  constructor() { }
  encrypt(value: string) {
    return CryptoJS.AES.encrypt(value, this._key).toString();
}

decrypt(valueToDecrypt: string) {
    return CryptoJS.AES.decrypt(valueToDecrypt, this._key).toString(CryptoJS.enc.Utf8);
}
}
