import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../layouts/navbar/navbar.component";
import { FooterComponent } from "../layouts/footer/footer.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarComponent, FooterComponent]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
