import { Directive, EventEmitter, HostListener, Inject, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[loadOnScroll]',
})
export class LoadOnScrollDirective {
  @Output() loadMore = new EventEmitter();

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const docEl = this.document.documentElement;
    if (docEl.scrollTop + docEl.clientHeight >= docEl.scrollHeight - 1) {
      this.loadMore.emit();
    }
  }

}
