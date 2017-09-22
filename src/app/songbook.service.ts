import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

export interface Song {
  $key?: string;
  title: string;
  lyrics: string;
}

@Injectable()
export class SongbookService {

  constructor(private db: AngularFireDatabase, private http: HttpClient) {
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
    return this.db.object(`/songs/${song.$key}`).update(songCopy);
  }

  saveSong(song) {
    return this.db.list(`/songs`).push(song);
  }

  getSongList() {
    return this.http.get(`${environment.firebase.databaseURL}/songs.json`)
      .map(res => {
        return Object.keys(res).map((item, index) => {
          return { $key: item, ...res[item] };
        });
      });
  }

}
