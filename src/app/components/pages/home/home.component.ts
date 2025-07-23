import { Component, OnInit } from '@angular/core';
import { FilterComponent } from "../../shared/filter/filter.component";
import { PaginationComponent } from "../../shared/pagination/pagination.component";
import { CarouselComponent } from "../../shared/carousel/carousel.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    FilterComponent,
    PaginationComponent,
    CarouselComponent
]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentPage: number = 1;  // Página actual
  totalPages: number = 10;  // Total de páginas
  itemsPerPage: number = 5;  // Elementos por página

  onPageChange(page: number) {
    this.currentPage = page;
    console.log(`Página cambiada a: ${this.currentPage}`);
    // Aquí puedes agregar lógica para cargar los datos de la nueva página
  }
}
