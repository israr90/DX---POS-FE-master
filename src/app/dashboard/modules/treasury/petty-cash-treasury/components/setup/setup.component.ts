import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'underscore';
import { HeaderService } from '../../../../../../services/header.service';
// import { AddPettyCashComponent } from '../../../add-petty-cash/add-petty-cash.component';
// import { ModalImageComponent } from '../../modal-image/modal-image.component';
import { TreasuryService } from '../../services/treasury.service';
import { ModalEditSetupComponent } from './modal-edit-setup/modal-edit-setup.component';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent {
  expenses!: any[];
  totalRecords!: number;
  totalPages!: number;
  items = [1, 2, 1, 2, 1, 2];

  searchText: string = '';
  sort: number = 1;

  pageNo: number = 0;
  pagin!: number;
  pages!: number[];

  constructor(
    private treasuryService: TreasuryService,
    public headerService: HeaderService,
    private modalService: NgbModal,
    private router: Router,
    config: NgbModalConfig
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.headerService.setTitle('Petty Cash > Petty Cash Request');
    this.GetMainData();
  }
  goToPage(type) {
    if (type == 'request') {
      this.router.navigateByUrl('/petty-cash/requests');
      this.headerService.setTitle('Petty Cash > Petty Cash Request');
    } else {
      this.router.navigateByUrl('/petty-cash/setup');
      this.headerService.setTitle('Petty Cash > Petty Cash Setup');
    }
  }
  // addRole() {
  //   this.router.navigateByUrl('/petty-cash/add-petty-cash');
  //   this.headerService.setTitle('Petty Cash > Add Petty Cash');
  // }
  // viewExpense() {
  //   this.headerService.setTitle('petty-cash > View role');
  // }

  GetMainData() {
    return this.treasuryService
      .GetRegistersPettyCashLimits(this.searchText, this.pageNo)
      .subscribe((response: any) => {
        if (response) {
          this.expenses = response.data;
          this.totalRecords = response.info.totalRecordsCount;
          this.pagin = Math.ceil(this.totalRecords / 6);
          this.pages = _.range(this.pagin);
          console.log(this.pagin);
          console.log(this.pages);
        }
      });
  }
  searchRoles(event: any) {
    console.log(event?.target.value);
    const text = event.target.value;
    console.log(text.length);
    if (text.length >= 3) {
      this.searchText = text;
      this.pageNo = 0;
      this.GetMainData();
    }
    if (text.length == 0) {
      this.GetMainData();
    }
  }
  removeSearch() {
    this.searchText = '';
    this.sort = 1;
    this.GetMainData();
  }

  sortByInvoice() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.GetMainData();
  }
  sortByCategory() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.GetMainData();
  }
  sortByRegisterName() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.GetMainData();
  }
  sortByTax() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.GetMainData();
  }

  sortByAmount() {
    if (this.sort == 10) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 9 ? 10 : 9;
    }
    this.GetMainData();
  }
  setPage(page: number) {
    this.pageNo = page;
    this.GetMainData();
    window.scroll(0, 0);
  }

  openMdalEditLimit(item) {
    const modalRef = this.modalService.open(ModalEditSetupComponent);
    modalRef.componentInstance.registerDetails = item;
    modalRef.componentInstance.sendtoLoadData.subscribe((result: any) => {
      console.log('resendtoLoadDatasult', result);
      this.modalService.dismissAll();
      this.GetMainData();
    });
  }
}
