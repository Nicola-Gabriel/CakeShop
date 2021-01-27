import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() closeModal: BsModalRef;
  form: any;
  constructor(private router: Router,
              private accountService: AccountService) { }
 
  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.form = new FormGroup({
      "email": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required),
  });
  }

  login()
  {
    return this.accountService.login(this.form.value).subscribe(next => {
      console.log(next);
      this.closeModal.hide();
    }, error => {
      console.log(error);
    });
  }


  toRegister()
  {
    this.router.navigate(['/account/register']);
    this.closeModal.hide();
  }
}
