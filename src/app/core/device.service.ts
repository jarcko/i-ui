import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private _desktopWidth = 640;
  private _desktopMinHeight = 355;
  private _mobileMinHeight = 240;


  constructor(@Inject(DOCUMENT) private document: Document) { }

  get itemsQty(): number {
    const minHeight = this.isMobile() ? this._mobileMinHeight : this._desktopMinHeight;
    return Math.round(window.innerHeight / minHeight);
  }

  get mobileMinHeight() {
    return this._mobileMinHeight;
  }

  get desktopMinHeight() {
    return this._desktopMinHeight;
  }

  isMobile(): boolean {
    return window.innerWidth < this._desktopWidth;
  }
}
