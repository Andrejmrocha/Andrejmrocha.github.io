import { ScrollingComponent } from './components/scrolling/scrolling.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostSongComponent } from './components/post-song/post-song.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'post-song', component:PostSongComponent},
  {path: 'scroll', component:ScrollingComponent},
  {path: 'detail', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
