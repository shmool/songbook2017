import { Component, OnInit } from '@angular/core';
import { SongbookService } from '../../songbook.service';

@Component({
  selector: 'sb-song-list',
  template: `
    <md-list>
      <md-list-item *ngFor="let item of songs$ | async; index as i;"
                    [routerLink]="['/songbook', item.$key]"
                    class="router-link">{{ item.title }}
      </md-list-item>
    </md-list>
  `,
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  songs$: any;

  constructor(private songbookService: SongbookService) {
  }

  ngOnInit() {
    this.songs$ = this.songbookService.getSongList();
  }

}
