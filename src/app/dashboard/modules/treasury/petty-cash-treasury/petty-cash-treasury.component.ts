import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../../services/header.service';

@Component({
  selector: 'app-petty-cash-treasury',
  templateUrl: './petty-cash-treasury.component.html',
  styleUrls: ['./petty-cash-treasury.component.scss'],
})
export class PettyCashTreasuryComponent implements OnInit {
  constructor(public headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.setTitle('Petty Cash');

  }
  selected: number = 1;

  goToPage(value) {
    this.selected = value;

    if (value == 1) {
      this.headerService.setTitle('Petty Cash > Petty Cash Request');
    } else {
      this.headerService.setTitle('Petty Cash > Petty Cash Setup');
    }
    // Petty Cash > Petty Cash Requeste
  }
}
