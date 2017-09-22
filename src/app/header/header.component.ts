import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-header',
  template: `
    <div>
    <md-toolbar color="primary" class="mat-elevation-z6">

      <span routerLink="songbook">Song Book</span>

      <span class="app-toolbar-filler"></span>

      <sb-user-status></sb-user-status>

    </md-toolbar>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
