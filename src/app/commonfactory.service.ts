import { Category } from './child1/category.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonfactoryService {
  eventType: string;
  //modalType: EventEmitter<any, any>;

  constructor() {}
  selectedCategory: Category;

  setCategory(cat: Category) {
    this.selectedCategory = cat;
  }
  getCategory() {
    return this.selectedCategory;
  }
  openModal(event) {
    this.eventType = event;
  }
}
