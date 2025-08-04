import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FilterComponent implements OnInit, OnChanges {

  @ViewChild('carousel') carouselRef!: ElementRef<HTMLDivElement>;
  selectedDeportes: any[] = [];
  selectedRegion: any = '';
  filteredComunas: any[] = [];
  filtros = {
    deportes: [
      'PCD', 'Fútbol', 'Basketball', 'Vóleibol', 'Tenis', 'Natación',
      'Atletismo', 'Gimnasia', 'Ciclismo',
      'Crossfit', 'Pesas', 'Yoga', 'Ping-Pong', 'Combate'
    ],
    edades: [
      'Todas', '5 años', '6 años', '7 años', '8 años', '9 años', '10 años',
      '11 años', '12 años', '13 años', '14 años', '15 años', '16 años',
      '17 años', '18 años', '+18 años'
    ],
    regiones: [
      'Todas', 'Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo',
      'Valparaíso', 'Metropolitana', 'O’Higgins', 'Maule', 'Ñuble', 'Biobío',
      'Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén', 'Magallanes'
    ],
    comunasPorRegion: {
      'Arica y Parinacota': ['Arica', 'Camarones', 'Putre', 'General Lagos'],
      'Tarapacá': ['Iquique', 'Alto Hospicio', 'Pozo Almonte', 'Camiña', 'Colchane', 'Huara', 'Pica'],
      'Antofagasta': ['Antofagasta', 'Mejillones', 'Sierra Gorda', 'Taltal', 'Calama', 'Ollagüe', 'San Pedro de Atacama', 'Tocopilla', 'María Elena'],
      'Atacama': ['Copiapó', 'Caldera', 'Tierra Amarilla', 'Chañaral', 'Diego de Almagro', 'Vallenar', 'Alto del Carmen', 'Freirina', 'Huasco'],
      'Coquimbo': ['La Serena', 'Coquimbo', 'Andacollo', 'La Higuera', 'Vicuña', 'Illapel', 'Canela', 'Los Vilos', 'Salamanca', 'Ovalle', 'Combarbalá', 'Monte Patria', 'Punitaqui', 'Paihuano', 'Río Hurtado'],
      'Valparaíso': ['Valparaíso', 'Viña del Mar', 'Quilpué', 'Villa Alemana', 'Concón', 'Casablanca', 'Quintero', 'Puchuncaví', 'Algarrobo', 'El Quisco', 'El Tabo', 'Santo Domingo', 'Cartagena', 'San Antonio', 'Isla de Pascua', 'Juan Fernández', 'Los Andes', 'Calle Larga', 'Rinconada', 'San Esteban', 'Cabildo', 'La Ligua', 'Petorca', 'Papudo', 'Zapallar', 'Quillota', 'La Calera', 'Hijuelas', 'La Cruz', 'Nogales', 'Calera', 'Limache', 'Olmué', 'San Felipe', 'Putaendo', 'Santa María', 'Catemu', 'Llaillay', 'Panquehue'],
      'Metropolitana': ['Santiago', 'Cerrillos', 'Cerro Navia', 'Conchalí', 'El Bosque', 'Estación Central', 'Huechuraba', 'Independencia', 'La Cisterna', 'La Florida', 'La Granja', 'La Pintana', 'La Reina', 'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maipú', 'Ñuñoa', 'Pedro Aguirre Cerda', 'Peñalolén', 'Providencia', 'Pudahuel', 'Quilicura', 'Quinta Normal', 'Recoleta', 'Renca', 'San Miguel', 'San Joaquín', 'San Ramón', 'Vitacura', 'Puente Alto', 'Pirque', 'San José de Maipo', 'Colina', 'Lampa', 'Til‑Til', 'Buin', 'Calera de Tango', 'Paine', 'Melipilla', 'Alhué', 'Curacaví', 'María Pinto', 'San Pedro', 'Talagante', 'Isla de Maipo', 'El Monte', 'Padre Hurtado', 'Peñaflor'],
      'O’Higgins': ['Rancagua', 'Codegua', 'Coinco', 'Coltauco', 'Doñihue', 'Graneros', 'Las Cabras', 'Machalí', 'Malloa', 'Mostazal', 'Olivar', 'Peumo', 'Pichidegua', 'Quinta de Tilcoco', 'Rengo', 'Requínoa', 'San Vicente', 'Chimbarongo', 'Lolol', 'Nancagua', 'Palmilla', 'Paredones', 'Peralillo', 'Placilla', 'Pumanque', 'San Fernando', 'Pichilemu', 'La Estrella', 'Litueche', 'Marchihue', 'Navidad'],
      'Maule': ['Talca', 'Constitución', 'Curepto', 'Empedrado', 'Maule', 'Pelarco', 'Pencahue', 'Río Claro', 'San Clemente', 'San Rafael', 'Curicó', 'Hualañé', 'Licantén', 'Molina', 'Rauco', 'Romeral', 'Sagrada Familia', 'Teno', 'Vichuquén', 'Linares', 'Colbún', 'Longaví', 'Parral', 'Retiro', 'San Javier', 'Villa Alegre', 'Yerbas Buenas', 'Cauquenes', 'Chanco', 'Pelluhue'],
      'Ñuble': ['Chillán', 'Chillán Viejo', 'Bulnes', 'Cobquecura', 'Coelemu', 'El Carmen', 'Ninhue', 'Portezuelo', 'Pemuco', 'Pinto', 'Quillón', 'Quirihue', 'Ránquil', 'San Carlos', 'San Fabián', 'San Ignacio', 'Treguaco', 'Ñiquén'],
      'Biobío': ['Concepción', 'Coronel', 'Chiguayante', 'Florida', 'Hualqui', 'Lota', 'Penco', 'San Pedro de la Paz', 'Santa Juana', 'Talcahuano', 'Tomé', 'Hualpén', 'Lebu', 'Arauco', 'Cañete', 'Contulmo', 'Curanilahue', 'Los Álamos', 'Tirúa', 'Los Ángeles', 'Antuco', 'Cabrero', 'Laja', 'Mulchén', 'Nacimiento', 'Negrete', 'Quilaco', 'Quilleco', 'San Rosendo', 'Santa Bárbara', 'Tucapel', 'Yumbel', 'Alto Biobío'],
      'Araucanía': ['Temuco', 'Padre Las Casas', 'Angol', 'Collipulli', 'Ercilla', 'Lonquimay', 'Los Sauces', 'Lumaco', 'Melipeuco', 'Nueva Imperial', 'Pucón', 'Pitrufquén', 'Renaico', 'Saavedra', 'Teodoro Schmidt', 'Toltén', 'Traiguén', 'Villarrica', 'Carahue', 'Cholchol', 'Cunco', 'Curacautín', 'Curarrehue', 'Freire', 'Galvarino', 'Gorbea', 'La Araucanía'],
      'Los Ríos': ['Valdivia', 'Corral', 'Lanco', 'Los Lagos', 'Máfil', 'Mariquina', 'Paillaco', 'Panguipulli', 'Río Bueno', 'La Unión', 'Futrono'],
      'Los Lagos': ['Puerto Montt', 'Puerto Varas', 'Calbuco', 'Cochamó', 'Fresia', 'Frutillar', 'Llanquihue', 'Maullín', 'Osorno', 'Purranque', 'Puerto Octay', 'Puyehue', 'San Pablo', 'Castro', 'Ancud', 'Chonchi', 'Curaco de Vélez', 'Dalcahue', 'Quellón', 'Quemchi', 'Quinchao', 'Quellón', 'Chaitén', 'Futaleufú', 'Hualaihué', 'Palena'],
      'Aysén': ['Coyhaique', 'Puerto Aysén', 'Chile Chico', 'Cisnes', 'Guaitecas', 'Lago Verde', 'O’Higgins', 'Río Ibáñez', 'Tortel'],
      'Magallanes': ['Punta Arenas', 'Puerto Natales', 'Rio Verde', 'Laguna Blanca', 'San Gregorio', 'Porvenir', 'Primavera', 'Timaukel', 'Antártica', 'Cabo de Hornos', 'Tierra del Fuego']
    }
  };

  formFiltros!: FormGroup;
  @Input() order: any = 'Más relevantes';
  @Output() filtrosCambiaron = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formFiltros = this.fb.group({
      deporte: [[]],
      edad: ['Todas'],
      region: ['Todas'],
      comuna: ['Todas'],
      orden: [this.order]
    });

    this.formFiltros?.get('region')?.valueChanges.subscribe((region: keyof typeof this.filtros.comunasPorRegion) => {
      this.filteredComunas = this.filtros.comunasPorRegion[region] || [];
      this.formFiltros?.get('comuna')?.setValue('Todas');
    });

    this.formFiltros?.valueChanges.subscribe(filtros => {
      this.filtrosCambiaron.emit(filtros);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['order']) {
      this.formFiltros?.get('orden')?.setValue(this.order);
    }
  }

  scrollRight() {
    const scrollAmount = 200;
    this.carouselRef.nativeElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
  scrollLeft() {
    const scrollAmount = 200;
    this.carouselRef.nativeElement.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  toggleDeporte(deporte: string): void {
    const deportes = this.formFiltros?.value.deporte;
    const index = deportes.indexOf(deporte);
    if (index > -1) {
      deportes.splice(index, 1);
    } else {
      deportes.push(deporte);
    }
    this.formFiltros?.get('deporte')?.setValue([...deportes]);
  }


  onRegionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedRegion = value;
    this.filteredComunas = this.filtros.comunasPorRegion[value as keyof typeof this.filtros.comunasPorRegion] || [];
  }

  getIconFile(deporte: string): string {
    const map: Record<string, string> = {
      'PCD': 'pcd.png',
      'Fútbol': 'futbol.png',
      'Basketball': 'baloncesto.png',
      'Vóleibol': 'voleibol.png',
      'Tenis': 'tenis.png',
      'Ciclismo': 'bicicleta.png',
      'Atletismo': 'running.png',
      'Yoga': 'yoga.png',
      'Pesas': 'pesa.png',
      'Natación': 'natacion.png',
      'Combate': 'combate.png',
      'Ping-Pong': 'pingpong.png',
      'Crossfit': 'crossfit.png',
      'Gimnasia': 'yoga.png'
    };
    return map[deporte] || 'default.png';
  }

  resetFiltros(): void {
    this.formFiltros?.reset({
      deporte: [],
      edad: 'Todas',
      region: 'Todas',
      comuna: 'Todas'
    });
    this.filteredComunas = [];
  }
}