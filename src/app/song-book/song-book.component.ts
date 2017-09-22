import { Component, OnInit, ViewChild } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'sb-song-book',
  template: `
    <md-sidenav-container class="song-book-container">

      <md-sidenav #sidenav [opened]="listOpen" [mode]="sidenavMode">
        <sb-song-list></sb-song-list>
      </md-sidenav>

      <sb-song [sidenav]="sidenav" (toggleSidenav)="toggleSidenav()"></sb-song>

    </md-sidenav-container>
  `,
  styleUrls: ['./song-book.component.scss']
})
export class SongBookComponent implements OnInit {
  @ViewChild('sidenav') sidenav;
  listOpen: boolean;
  sidenavMode: string;

  constructor(
    private media: ObservableMedia) {
  }

  ngOnInit() {
    if (this.media.isActive('xs')) {
      this.listOpen = false;
      this.sidenavMode = 'push';
    } else {
      this.listOpen = true;
      this.sidenavMode = 'side';
    }
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
