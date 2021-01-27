import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule
  ]
})
export class AccountModule { }
