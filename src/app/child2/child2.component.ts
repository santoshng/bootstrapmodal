import { Category } from './../child1/category.model';
import { CommonfactoryService } from './../commonfactory.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  category: Category;
  @ViewChild('child2content', { static: false }) childContent: ElementRef;
  constructor(
    private modalService: NgbModal,
    private commonfactoryService: CommonfactoryService
  ) {}

  ngOnInit() {
    this.category = this.commonfactoryService.getCategory();
  }

  public open() {
    this.category = this.commonfactoryService.getCategory();
    // this.nameParent = name;
    console.log(this.category);
    this.modalService.open(this.childContent, {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'dark-modal'
    });
  }
}
