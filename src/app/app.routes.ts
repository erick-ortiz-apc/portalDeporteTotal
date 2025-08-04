import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PostComponent } from './components/pages/post/post.component';
import { RegisterComponent } from './components/pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'post/:id', component: PostComponent }
    ]
  },
  { path: 'register', component: RegisterComponent },
  {
    path: '**',
    redirectTo: ''
  }
];

