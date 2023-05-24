import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TreasuryService } from '../../services/treasury.service';

@Component({
  selector: 'app-modal-approve',
  templateUrl: './modal-approve.component.html',
  styleUrls: ['./modal-approve.component.scss'],
})
export class ModalApproveComponent {
  @Input() requestDetails: any;
  @Input() type: any;
  message: string;
  messageError: string;
  @Output() sendtoLoadData = new EventEmitter();

  constructor(
    private treasuryService: TreasuryService,
    private router: Router,
    private route: ActivatedRoute,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}
  amount: any;
  msgError: string;
  ApprovePettyCashRequest() {
    if (this.amount <= 0 || !this.amount) {
      console.log('invalid amount');
      this.msgError = ' Amount must be greater than 0 ';
      setTimeout(() => {
        this.msgError = '  ';
      }, 2000);
      return window.scroll();
    }

    const formData = new FormData();
    formData.append(
      'pettyCashRequestId',
      this.requestDetails.pettyCashRequestId
    );
    formData.append('approvedAmount', this.amount);

    console.log(formData);
    return this.treasuryService
      .ApprovePettyCashRequest(formData)
      .subscribe((response: any) => {
        console.log(response);

        if (response.isSuccess == true) {
          this.message = 'Approved successfully ';
          setTimeout(() => {
            this.modalService.dismissAll();
            window.location.reload();
          }, 4000);
        } else {
          console.log('error', response);
          this.messageError = response.Errors[0]?.ErrorMessageEn;
          setTimeout(() => {
            this.messageError = '';
            // this.modalService.dismissAll();
          }, 4000);
        }
      });
  }
  rejectionReason: string;
  RejectPettyCashRequest() {
    if (!this.rejectionReason) {
      this.msgError = ' Reason  is required';
      setTimeout(() => {
        this.msgError = '  ';
      }, 2000);
      return window.scroll();
    }

    const formData = new FormData();
    formData.append(
      'pettyCashRequestId',
      this.requestDetails.pettyCashRequestId
    );
    formData.append('rejectionReason', this.rejectionReason);

    console.log(formData);
    return this.treasuryService
      .RejectPettyCashRequest(formData)
      .subscribe((response: any) => {
        console.log(response);

        if (response.isSuccess == true) {
          this.message = 'Reject successfully ';
          setTimeout(() => {
            this.modalService.dismissAll();
            window.location.reload();
          }, 4000);
        } else {
          console.log('error', response);
          this.messageError = response.Errors[0]?.ErrorMessageEn;
          setTimeout(() => {
            this.messageError = '';
            // this.modalService.dismissAll();
          }, 4000);
        }
      });
  }
}
