import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PostComponent } from './components/pages/post/post.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: '**', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'post', component: PostComponent },
    ]
  },
];
