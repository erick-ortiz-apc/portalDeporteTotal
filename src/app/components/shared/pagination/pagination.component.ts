import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class PaginationComponent {

  @Input() currentPage = 1;
  @Input() totalPages = 1;
  @Output() pageChange = new EventEmitter<number>();

  itemsPerPageOptions: number[] = [5, 10, 25, 50];
  dropdownVisible: boolean = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  get pages(): (number | string)[] {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (this.totalPages <= maxVisible + 2) {
      for (let i = 1; i <= this.totalPages; i++) pages.push(i);
    } else {
      if (this.currentPage <= 3) {
        pages.push(...[1, 2, 3, 4, 5, '...', this.totalPages]);
      } else if (this.currentPage >= this.totalPages - 2) {
        pages.push(1, '...');
        for (let i = this.totalPages - 4; i <= this.totalPages; i++) pages.push(i);
      } else {
        pages.push(1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages);
      }
    }

    return pages;
  }

  changePage(page: number | string) {
    if (typeof page === 'number' && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }

  prevPage() {
    if (this.currentPage > 1) this.pageChange.emit(this.currentPage - 1);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.pageChange.emit(this.currentPage + 1);
  }
}
