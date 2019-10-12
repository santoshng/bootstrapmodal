import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonfactoryService } from '../commonfactory.service';
import { Category } from './category.model';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, AfterViewChecked {
  category: Category;
  constructor(
    private modalService: NgbModal,
    private commonfactoryService: CommonfactoryService
  ) {}
  @ViewChild('child1content', { static: false }) childContent: ElementRef;
  ngOnInit() {
    this.category = this.commonfactoryService.getCategory();
    // console.log(this.category);
  }
  ngOnChanges() {
    this.category = this.commonfactoryService.getCategory();
    console.log(this.category);
  }
  childvalue: any;
  ngAfterViewChecked() {
    // console.log(this.childContent.nativeElement.value);
    //  this.childvalue = this.childContent
  }
  // nameParent: string;
  public open() {
    this.category = this.commonfactoryService.getCategory();
    //  this.nameParent = name;
    // console.log(this.nameParent);
    // console.log(this.category);
    this.modalService.open(this.childContent, {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'dark-modal'
    });
  }
}
