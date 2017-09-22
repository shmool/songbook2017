import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song, SongbookService } from '../../songbook.service';
import 'rxjs/add/operator/do';

@Component({
  selector: 'sb-song',
  template: `
    <md-toolbar class="song-book-content-toolbar mat-elevation-z6">

      <button md-button class="song-book-toolbar-menu" (click)="toggleSidenav.emit()">
        <i class="material-icons song-book-toolbar-menu-icon">{{ sidenav._isClosed ? 'menu' : 'chevron_left' }}</i>
      </button>

      <md-input-container floatPlaceholder="never">
        <input mdInput #titleInput
               class="song-title-input mat-input-element"
               [disabled]="!edit"
               [value]="(song$ | async)?.title"
               (keyup.enter)="saveTitle($event.target.value)"
               (blur)="saveTitle($event.target.value)"
               [placeholder]="edit ? 'song title': ''">
      </md-input-container>

      <a [routerLink]="[]" [queryParams]="{edit: !edit}">
        <button md-mini-fab [color]="saveButtonColor">
          <md-icon>{{ edit ? 'save' : 'edit' }}</md-icon>
        </button>
      </a>

      <span class="app-toolbar-filler"></span>

      <a [routerLink]="['/songbook']" [queryParams]="{edit: true}">
        <button md-mini-fab>
          <md-icon>note_add</md-icon>
        </button>
      </a>

    </md-toolbar>

    <div class="song-book-content">
      <sb-lyrics [lyrics]="(song$ | async)?.lyrics"
                 [edit]="edit"
                 (save)="saveLyrics($event)">
      </sb-lyrics>
    </div>

  `,
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  song$: any;
  edit = false;
  @Input() sidenav;
  @Output() toggleSidenav = new EventEmitter();
  song: Song;
  saveButtonColor = 'accent';

  constructor(
    private songbookService: SongbookService,
    public router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach(param => {
      // asyncPipe unsubscribes from the previous reference
      this.song$ = this.songbookService.getSong(param.id)
        .do(song => {
          this.song = song;
        });
    });
    this.route.queryParams.forEach(param => {
      this.edit = (!param.edit || param.edit === 'false') ? false : true;
    });
  }

  saveSong() {
    if (this.song.title) {
      this.saveButtonColor = 'accent';
      if (this.song.$key) {
        return this.songbookService.updateSong(this.song);
      } else {
        return this.songbookService.saveSong(this.song)
          .then(res => {
            this.router.navigate(['/songbook', res.key], { preserveQueryParams: true });
          });
      }
    } else {
      this.saveButtonColor = 'warn';
    }
  }

  saveLyrics(lyrics) {
    this.song.lyrics = lyrics;
    return this.saveSong();
  }

  saveTitle(title) {
    this.song.title = title;
    return this.saveSong();
  }

}
