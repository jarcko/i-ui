import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  mobileWidth = 640;

  get itemsQty(): number {
    return this.isMobile() ? 3 : 2;
  }

  isMobile(): boolean {
    return window.innerWidth < this.mobileWidth;
  }
}
