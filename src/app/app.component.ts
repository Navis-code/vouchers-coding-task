import { Voucher } from './../models/Voucher.model';
import { VouchersProvider } from './providers/vouchers.provider';
import { VouchersService } from './services/vouchers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  vouchersRaw: Voucher[];

  voucherList: string[];

  constructor(
    private voucherService: VouchersService,
    private vouchersProvider: VouchersProvider
  ) {}
  ngOnInit(): void {
    this.vouchersRaw = this.vouchersProvider.getAllVouchers();
  }
  printVoucherByType(voucher: Voucher): void {
    this.voucherList = this.voucherService.getVoucherByType(voucher);
  }
}
