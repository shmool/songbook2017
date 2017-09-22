import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'sb-sign-in-with-provider',
  template: `
    <md-card fxLayout="column" class="sign-in-with-provider">
      <ul>
        <li *ngFor="let provider of providers">
          <button class="auth"
                  [ngClass]="provider"
                  md-raised-button
                  (click)="signInWithProvider(provider)">
            <span class="auth-img-wrapper"><img [src]="'assets/icons/auth/' + provider + '.svg'"></span>
            <span class="auth-button-text">Sign in with {{ provider | titlecase }}</span>
          </button>

        </li>
      </ul>
    </md-card>
  `,
  styleUrls: ['./sign-in-with-provider.component.scss']
})
export class SignInWithProviderComponent implements OnInit {
  providers = environment.firebaseAuthProviders;

  constructor(private userService: AuthService) {
  }

  ngOnInit() {
  }

  signInWithProvider(provider) {
    return this.userService.signInWithProvider(provider);
  }

}
