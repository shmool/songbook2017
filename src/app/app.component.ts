import { Component } from '@angular/core';

@Component({
  selector: 'sb-root',
  template: `
    <sb-header></sb-header>

    <div class="app-content">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
