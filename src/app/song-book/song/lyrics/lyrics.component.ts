import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sb-lyrics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <textarea class="song-lyrics-textarea"
              [disabled]="!edit"
              [value]="lyrics || ''"
              (blur)="saveSong($event.target.value)"></textarea>
  `,
  styleUrls: ['./lyrics.component.scss']
})
export class LyricsComponent implements OnInit {
  @Input() lyrics;
  @Input() edit;
  @Output() save = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  saveSong(lyrics) {
    this.save.emit(lyrics);
  }

}
