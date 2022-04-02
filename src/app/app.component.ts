import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public theme: 'dark'|'light' = 'light';

  public toggleTheme() {
    this.renderer.removeClass(document.body, `theme${this.theme}`);
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.renderer.addClass(document.body, `theme${this.theme}`);
  }

  constructor(private renderer: Renderer2) { }

}
