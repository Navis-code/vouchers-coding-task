import { VoucherType } from './../../enum/voucherType.enum';
import { Injectable } from '@angular/core';
import { Voucher } from 'src/models/Voucher.model';

@Injectable({
  providedIn: 'root',
})
export class VouchersService {
  constructor() {}

  getVoucherByType(voucher: Voucher): string[] {
    if (voucher.type === VoucherType.odd) {
      return this.getOddVoucher(voucher.qty);
    } else {
      return this.getTenTimesVoucher(voucher.qty);
    }
  }

  getOddVoucher(qty: number): string[] {
    const initialVoucher = 1;
    const voucherVariation = 2;
    return this.generatePadNumberVoucher(initialVoucher, qty, voucherVariation);
  }

  getTenTimesVoucher(qty: number): string[] {
    const initialVoucher = 10;
    const voucherVariation = 10;
    return this.generatePadNumberVoucher(initialVoucher, qty, voucherVariation);
  }

  generatePadNumberVoucher(
    initialVoucher: number,
    voucherQty: number,
    variation: number
  ): string[] {
    let initial = initialVoucher;
    let vouchers = [];
    for (let index = 0; index < voucherQty; index++) {
      let withPad = initial.toString().padStart(voucherQty, '0');
      vouchers.push(withPad);
      initial += variation;
    }
    return vouchers;
  }
}
