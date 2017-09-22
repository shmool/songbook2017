import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongBookComponent } from './song-book/song-book.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/songbook',
    pathMatch: 'full'
  },
  {
    path: 'songbook',
    children: [
      { path: '', component: SongBookComponent },
      { path: ':id', component: SongBookComponent }
    ]
  },
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
