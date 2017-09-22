import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInWithEmailComponent } from './sign-in-with-email/sign-in-with-email.component';
import { SignInWithProviderComponent } from './sign-in-with-provider/sign-in-with-provider.component';
import { MdButtonModule, MdCardModule, MdInputModule, MdSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    MdInputModule,
    MdSlideToggleModule,
    MdButtonModule
  ],
  declarations: [
    SignInComponent,
    SignInWithEmailComponent,
    SignInWithProviderComponent
  ]
})
export class SignInModule {
}
