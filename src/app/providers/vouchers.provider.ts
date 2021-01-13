import { vouchersMock } from 'src/mock/vouchers.mock';
import { Voucher } from './../../models/Voucher.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VouchersProvider {
  constructor() {}

  getAllVouchers(): Voucher[] {
    return vouchersMock;
  }
}
