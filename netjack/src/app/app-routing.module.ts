import { ScrollingComponent } from './components/scrolling/scrolling.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostSongComponent } from './components/post-song/post-song.component';
import { DetailComponent } from './components/detail/detail.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {
    path: '', component:HomeComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'post-song', component: PostSongComponent},
    ]
  },
  {path: '**', redirectTo:'signup'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
