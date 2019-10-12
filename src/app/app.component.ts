import { CommonfactoryService } from './commonfactory.service';
import { Child1Component } from './child1/child1.component';
import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Category, Categories } from './child1/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  closeResult: string;
  @ViewChild('labelImport', { static: false })
  labelImport: ElementRef;
  fileToUpload: File = null;
  cat: Category;
  cats = Categories;
  @ViewChild('child1', { static: false }) child1Content: Child1Component;
  @ViewChild('child2', { static: false }) child2Content: Child1Component;
  constructor(
    private modalService: NgbModal,
    private commonfactoryService: CommonfactoryService
  ) {}
  name: string = 'hello';
  public Open(category: Category) {
    this.commonfactoryService.setCategory(category);

    if (category.CatId === 101) {
      this.child1Content.open();
    }

    if (category.CatId === 102) {
      this.child2Content.open();
    }

    // if (event === 'Add') {
    //   console.log('Add');
    // }
    // if (event === 'Edit') {
    //   console.log('Edit');
    // }

    // if (event === 'Upload') {
    //   console.log('Upload');
    // }
  }

  open(event) {
    // this.modalService
    //   .open(content, {
    //     ariaLabelledBy: 'modal-basic-title',
    //     windowClass: 'dark-modal'
    //   })
    //   .result.then(
    //     result => {
    //       this.closeResult = `Closed with: ${result}`;
    //     },
    //     reason => {
    //       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //     }
    //   );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }
}
