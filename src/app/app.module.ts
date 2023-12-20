import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { CouponComponent } from './coupon/coupon.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowAllCouponComponent } from './show-all-coupon/show-all-coupon.component';
import { RedeemComponent } from './redeem/redeem.component';
import { DatePipe } from '@angular/common';
import { SortComponent } from './sort/sort.component';
import { MatRadioModule } from '@angular/material/radio';
import { DashboardTwoComponent } from './dashboard-two/dashboard-two.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    FilterComponent,
    CouponComponent,
    ShowAllCouponComponent,
    RedeemComponent,
    SortComponent,
    DashboardTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    ToastrModule.forRoot(),
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
