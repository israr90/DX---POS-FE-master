import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reg-confirm',
  templateUrl: './reg-confirm.component.html',
  styleUrls: ['./reg-confirm.component.scss'],
})
export class RegConfirmComponent {
  @Input() name;
  @Output() semdToConfirm = new EventEmitter<string>();
  @Output() sendToClose = new EventEmitter<string>();

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private router: Router
  ) {}

  confirm() {
    this.semdToConfirm.emit();
  }
  close(){
    this.sendToClose.emit();
  }
}
