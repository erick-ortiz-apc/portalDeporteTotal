import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true,
  imports: []
})
export class CarouselComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/img/carousel/img2.jpg',
    'assets/img/carousel/img1.png',
    'assets/img/carousel/img3.jpg',
    'assets/img/carousel/img4.jpg'
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // 5 segundos
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
