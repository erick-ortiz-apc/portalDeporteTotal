import { Component, OnInit } from '@angular/core';
import { FilterComponent } from "../../shared/filter/filter.component";
import { PaginationComponent } from "../../shared/pagination/pagination.component";
import { CarouselComponent } from "../../shared/carousel/carousel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FilterComponent,
    PaginationComponent,
    CarouselComponent
  ]
})
export class HomeComponent implements OnInit {

  actividades = [
    {
      id: 1,
      deporte: 'Fútbol',
      titulo: 'Escuela de Fútbol Talento Joven',
      descripcion: 'Entrena como los grandes. Clases para niños desde los 5 años.',
      extra: 'Opcion de Becas deportivas.',
      imagen: 'assets/img/post/futbol1.jpg',
      icono: 'assets/icon/futbol.png'
    },
    {
      id: 2,
      deporte: 'Natación',
      titulo: 'Academia de Natación AquaKids',
      descripcion: 'Aprende a nadar en un entorno seguro con instructores certificados.',
      imagen: 'assets/img/post/natacion1.jpg',
      icono: 'assets/icon/natacion.png'
    },
    {
      id: 3,
      deporte: 'Tenis',
      titulo: 'Club de Tenis El Bosque',
      descripcion: 'Clases para principiantes y niveles intermedios. ¡Saca tu mejor saque!',
      imagen: 'assets/img/post/tenis1.jpg',
      icono: 'assets/icon/tenis.png'
    },
    {
      id: 4,
      deporte: 'Basketball',
      titulo: 'Basket Kids Santiago',
      descripcion: 'Entrenamientos para niños y adolescentes todos los sábados.',
      imagen: 'assets/img/post/basket1.jpg',
      icono: 'assets/icon/baloncesto.png'
    },
    {
      id: 5,
      deporte: 'Vóleibol',
      titulo: 'Escuela Vóley Activo',
      descripcion: 'Formación técnica y juegos en equipo para jóvenes entusiastas del vóley.',
      imagen: 'assets/img/post/voleibol1.jpg',
      icono: 'assets/icon/voleibol.png'
    },
    {
      id: 6,
      deporte: 'Atletismo',
      titulo: 'Escuela de Atletismo Juvenil',
      descripcion: 'Entrenamientos de velocidad, salto y resistencia en pista profesional.',
      imagen: 'assets/img/post/atletismo1.jpg',
      icono: 'assets/icon/running.png'
    },
    {
      id: 7,
      deporte: 'Karate',
      titulo: 'Karate Dojo Nippon',
      descripcion: 'Disciplina, defensa personal y técnicas tradicionales. ¡Primera clase gratis!',
      imagen: 'assets/img/post/karate1.jpg',
      icono: 'assets/icon/combate.png'
    },
    {
      id: 8,
      deporte: 'Yoga',
      titulo: 'Centro de Yoga Zen',
      descripcion: 'Clases para todos los niveles. Mejora tu flexibilidad y bienestar.',
      imagen: 'assets/img/post/yoga1.jpg',
      icono: 'assets/icon/yoga.png'
    },
    {
      id: 9,
      deporte: 'Muay Thai',
      titulo: 'Escuela de Muay Thai',
      descripcion: 'Aprende a luchar con disciplina y respeto. Clases mixtas.',
      imagen: 'assets/img/post/muaythai1.jpg',
      icono: 'assets/icon/combate.png'
    },
    {
      id: 10,
      deporte: 'Futbol',
      titulo: 'Escuela de Arqueros Profesionales',
      descripcion: 'Entrena con los mejores. Clases para todos los niveles.',
      imagen: 'assets/img/post/arqueros1.jpg',
      icono: 'assets/icon/futbol.png'
    },
    {
      id: 11,
      deporte: 'Ciclismo',
      titulo: 'Club de Ciclismo Juvenil',
      descripcion: 'Recorre rutas guiadas y aprende técnicas de ciclismo profesional.',
      imagen: 'assets/img/post/ciclismo1.jpg',
      icono: 'assets/icon/bicicleta.png'
    },
    {
      id: 12,
      deporte: 'Tenis',
      titulo: 'Escuela de Tenis Profesional',
      descripcion: 'Entrena con disciplina y respeto. Clases mixtas.',
      imagen: 'assets/img/post/tenis2.jpg',
      icono: 'assets/icon/tenis.png'
    }
  ];
  loading: boolean = true;
  selectedOrder: any = 'Más relevantes';
  orders = ['Más relevantes', 'Ordenado A-Z', 'Ordenado Z-A', 'Más nuevos', 'Más antiguos'];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  currentPage: number = 1;  // Página actual
  totalPages: number = 10;  // Total de páginas
  itemsPerPage: number = 5;  // Elementos por página

  onPageChange(page: number) {
    this.currentPage = page;
    console.log(`Página cambiada a: ${this.currentPage}`);
    // Aquí puedes agregar lógica para cargar los datos de la nueva página
  }

  onFiltrosActualizados(filtros: any) {
    console.log('Filtros actualizados:', filtros);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
