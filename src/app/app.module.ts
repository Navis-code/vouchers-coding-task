import { VouchersProvider } from './providers/vouchers.provider';
import { VouchersService } from './services/vouchers.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoucherCardComponent } from './components/voucher-card/voucher-card.component';

@NgModule({
  declarations: [AppComponent, VoucherCardComponent, VoucherCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [VouchersService, VouchersProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
