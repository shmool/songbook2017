import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export interface Song {
  $key?: string;
  title: string;
  lyrics: string;
}

@Injectable()
export class SongbookService {
  songList$;

  constructor(private db: AngularFireDatabase, private http: HttpClient) {
    this.getSongList();
  }

  getSong(id): Observable<Song> {
    return id ? this.http.get<Song>(`${environment.firebase.databaseURL}/songs/${id}.json`)
      .map(res => {
        return { ...res, $key: id };
      }) : Observable.of({ lyrics: '', title: '' });
  }

  updateSong(song) {
    const songCopy = {
      title: song.title || '',
      lyrics: song.lyrics || ''
    };
    return this.db.object(`/songs/${song.$key}`).update(songCopy)
      .then((savedSong) => {
        this.getSongList();
        return savedSong;
      });
  }

  saveSong(song) {
    return this.db.list(`/songs`).push(song)
      .then((savedSong) => {
        this.getSongList();
        return savedSong;
      });
  }

  getSongList() {
    this.songList$ = this.http.get(`${environment.firebase.databaseURL}/songList.json`)
      .map(res => {
        return Object.keys(res).map(key => {
          return { $key: key, title: res[key] };
        });
      });
  }

}
