import { Component } from '@angular/core';

@Component({
  selector: 'sb-root',
  template: `
    <p>
      app Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sb';
}
