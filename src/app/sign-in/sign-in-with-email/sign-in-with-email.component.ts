import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'sb-sign-in-with-email',
  template: `
    <md-card class="sign-in-with-email">
      <div fxLayout="row" fxLayoutAlign="space-between start" class="sign-in-or-up">
        <span>sign in</span>
        <md-slide-toggle
          (change)="signUp = !signUp">
        </md-slide-toggle>
        <span>sign up</span>
      </div>

      <md-input-container class="sign-in-input" *ngIf="signUp">
        <input mdInput
               placeholder="name"
               [(ngModel)]="user.displayName">
      </md-input-container>

      <md-input-container class="sign-in-input">
        <input mdInput
               placeholder="email"
               type="email"
               [(ngModel)]="user.email">
      </md-input-container>

      <md-input-container class="sign-in-input">
        <input mdInput
               placeholder="password"
               type="password"
               [(ngModel)]="user.password">
      </md-input-container>

      <md-input-container class="sign-in-input" *ngIf="signUp">
        <input mdInput
               placeholder="repeat password"
               type="password"
               [(ngModel)]="user.repeatPassword">
      </md-input-container>

      <button md-raised-button color="accent" class="sign-in-btn"
              (click)="signInWithEmail()">
        Sign {{ signUp ? 'Up' : 'In' }}
      </button>

      <md-error *ngIf="signInError">{{ signInError.message }}</md-error>
    </md-card>
  `,
  styleUrls: ['./sign-in-with-email.component.scss']
})
export class SignInWithEmailComponent implements OnInit {
  user = {
    displayName: '',
    email: '',
    password: '',
    repeatPassword: ''
  };
  signUp = false;

  get signInError() {
    return null;
  }

  constructor(private userService: AuthService) {
  }

  ngOnInit() {
  }

  signInWithEmail() {
    return this.signUp
      ? this.userService.signUp(this.user.email, this.user.password, this.user.displayName)
      : this.userService.signInWithEmail(this.user.email, this.user.password);
  }
}
