import { Directive, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appPlaybuzz]',
})
export class PlaybuzzDirective {

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {
    const existingScript = this.document.getElementById('playbuzz-sdk');
    if (existingScript) {
      this.document.body.removeChild(existingScript);
    }

    const script = this.renderer2.createElement('script');
    script.type = 'text/javascript';
    script.text = `
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://embed.playbuzz.com/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'playbuzz-sdk'));
      `;
    this.renderer2.appendChild(this.document.body, script);
  }
}
