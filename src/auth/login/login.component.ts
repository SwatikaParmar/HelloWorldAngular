import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  showPassword = false;
  loginModel: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.initialiseForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  initialiseForm(): void {
    this.loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    Type: ['', Validators.required]
  });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
          this.router.navigateByUrl('/supplier');
    this.spinner.show();
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.spinner.hide();
      return;
    }

    this.loginModel = this.loginForm.value;

    this.authService.login(this.loginModel).subscribe({
      next: (response) => {
        if (response.status === true) {
          this.loginForm.reset();
          this.toastrService.success(response.message);
          this.router.navigateByUrl('/dashboard');
        } else {
          this.toastrService.error(response.message);
        }
        this.spinner.hide();
      },
      error: () => {
        this.toastrService.error('Login failed. Please try again.');
        this.spinner.hide();
      }
    });
  }
}
