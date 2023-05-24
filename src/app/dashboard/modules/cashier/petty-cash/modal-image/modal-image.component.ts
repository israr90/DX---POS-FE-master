import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss'],
})
export class ModalImageComponent {
  @Input() expenseDetails: any;
  @Input() imageUploadedView: any;
  isPdf: boolean;
  imagePath: string;
  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.expenseDetails) {
      // console.log(this.expenseDetails);

      if (this.expenseDetails?.files[0]?.attachmentPath.slice(-3) == 'pdf') {
        this.isPdf = true;
        this.imagePath = this.expenseDetails?.files[0]?.attachmentPath;
      } else {
        this.imagePath = this.expenseDetails?.files[0]?.attachmentPath;
        // console.log(this.imagePath);
      }
    }

    if (this.imageUploadedView) {
      // console.log(this.imageUploadedView);
      // console.log(this.imageUploadedView.slice(-3));

      if (this.imageUploadedView.slice(-3) == 'pdf') {
        this.isPdf = true;
        this.imagePath = this.imageUploadedView;
      } else {
        this.imagePath = this.imageUploadedView;
        // console.log(this.imagePath);
      }
    }
  }
}
