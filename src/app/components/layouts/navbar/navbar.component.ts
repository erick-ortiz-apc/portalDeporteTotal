import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavbarComponent implements OnInit {
  isHome: boolean = true;
  isPost: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateRouteFlags(this.router.url);
    this.router.events.subscribe(() => {
      this.updateRouteFlags(this.router.url);
    });
  }

  private updateRouteFlags(url: string) {
    this.isPost = url.includes('post');
    this.isHome = !this.isPost;
  }
}
