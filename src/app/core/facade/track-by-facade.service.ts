import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackByFacadeService {
  trackById(index: number, item: any) {
    return item ? item.id : null
  }
}
