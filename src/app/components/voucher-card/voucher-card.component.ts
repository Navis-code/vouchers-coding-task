import { Component, Input, OnInit } from '@angular/core';
import { Voucher } from 'src/models/Voucher.model';

@Component({
  selector: 'app-voucher-card',
  templateUrl: './voucher-card.component.html',
  styleUrls: ['./voucher-card.component.scss'],
})
export class VoucherCardComponent implements OnInit {
  @Input() voucher: string;

  constructor() {}

  ngOnInit(): void {}
}
