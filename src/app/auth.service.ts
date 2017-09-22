import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/first';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

export interface User {
  displayName?: string;
  uid?: string;
  photoURL?: string;
  avatarColor?: string;
  email?: string;
}

export enum UserStatus {
  pending,
  signedOut,
  authenticated
}

@Injectable()
export class AuthService {
  user: User;
  private pending$ = new BehaviorSubject({ status: UserStatus.pending, user: null });
  private userAuth$;
  userData$;
  authError: any = null;
  uid$;

  constructor(private afAuth: AngularFireAuth) {
    this.enterPending();
    this.userAuth$ = this.afAuth.authState.map( authData => {
      return {
        status: authData ? UserStatus.authenticated : UserStatus.signedOut,
        user: authData
      };
    });
    // notice! it makes a difference who's merging who!
    this.userData$ = this.pending$.merge(this.userAuth$)
      .do(userData => {
        if (userData.status !== UserStatus.pending) {
          this.user = userData.user || null;
        }
      });

    this.uid$ = this.userAuth$.map(userAuth => userAuth.user && userAuth.user.uid);
  }

  enterPending() {
    this.pending$.next({ status: UserStatus.pending, user: this.user });
  }

  signOut() {
    this.enterPending();
    this.afAuth.auth.signOut();
  }

  signInWithProvider(provider) {
    this.enterPending();
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(err  => this.handleAuthError(err));
  }

  handleAuthError(err) {
    this.authError = err;
    this.pending$.next({ status: UserStatus.signedOut, user: null });
  }

  signInWithEmail(email, password) {
    this.enterPending();
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(err => this.handleAuthError(err));
  }

  signUp(email, password, displayName) {
    this.enterPending();
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(userInfo => userInfo.updateProfile({ displayName }))
      .catch(err => this.handleAuthError(err));
  }
}
