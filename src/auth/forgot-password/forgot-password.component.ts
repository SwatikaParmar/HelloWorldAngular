import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  loginForm!: FormGroup;
  submitted: boolean = false;
  currentPassword = false;
  showPassword = false;
  showConfirmPassword = false;
  receivedOTP: any;
  verifiedEmail: any;
  otpSent = false;
  otpVerified = false;
  otp: any;

  constructor(
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private contentService: ContentService,) { }

  ngOnInit(): void {
    this.initialiseForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  initialiseForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      otp: ['', Validators.required],
       Type: ['', Validators.required]
    },
      {
        validator: this.MustMatch('newPassword', 'confirmPassword')
      });
  }



  togglecurrentPasswordVisibility() {
    this.currentPassword = !this.currentPassword;
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  emailVerify() {
    this.submitted = true;

    if (this.loginForm.controls['emailOrPhoneNumber'].invalid) {
      this.toastrService.error('Please enter a valid email or phonenumber');
      return;
    }
    this.spinner.show();
    let payload = {
      email: this.loginForm.value.emailOrPhoneNumber,
      isVerify: false
    }
    this.authService.otp(payload).subscribe(response => {
      this.spinner.hide();
      if (response.isSuccess) {
        this.receivedOTP = response.data.otp;

        this.loginForm.controls['otp'].enable();
        this.toastrService.success(response.messages, 'success');
        this.otpSent = true;
      }
      else {
        this.toastrService.error(response.messages, 'error');
      }
    });
  }

  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (input.value.length >= 5 && event.key !== 'Backspace' && event.key !== 'Delete') {
      event.preventDefault();
    }
  }
  verifyOTP() {
    if (!this.otpSent) {
      this.toastrService.error('Please send OTP first.');
      return;
    }

    const enteredOTP = this.loginForm.value.otp;
    if (enteredOTP === this.receivedOTP.toString()) {
      this.otpVerified = true;
      this.loginForm.controls['otp'].disable();
      this.toastrService.success('OTP verified successfully.');
    } else {
      this.toastrService.error('Invalid OTP. Please try again.');
    }
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  resetPassword() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    if (this.otpVerified == false) {
      this.toastrService.error('Please verify OTP first')
      return;
    }

    this.spinner.show();
    let payload = {
      emailOrPhoneNumber: this.loginForm.value.emailOrPhoneNumber,
      newPassword: this.loginForm.value.newPassword
    }
    this.contentService.resetPassword(payload).subscribe(response => {
      if (response.isSuccess == true) {


        sessionStorage.setItem('resetPasswordPayload', JSON.stringify(payload));

        this.toastrService.success(response.message, 'successful login');
        this.router.navigate(['/login'])
          .then(() => {
            window.location.reload();
          });

      }
      else {
        this.toastrService.error(response.message, 'error');
      }
    });
  }

  changePassword() {
    this.submitted = true;

    if (this.loginForm.invalid) {
    }

    if (this.otpVerified == false) {
      this.toastrService.error('Please verify OTP first')
      return;
    }

    this.spinner.show();
    let payload = {
      currentPassword: this.loginForm.value.currentPassword,
      newPassword: this.loginForm.value.newPassword,
      confirmPassword: this.loginForm.value.confirmPassword
    }
    this.contentService.changePassword(payload).subscribe(response => {
      if (response.isSuccess == true) {
        this.toastrService.success(response.message, 'success');
        this.router.navigate(['/login'])
          .then(() => {
            window.location.reload();
          });

      }
      else {
        this.toastrService.error(response.message, 'error');
      }
    });
  }
}



