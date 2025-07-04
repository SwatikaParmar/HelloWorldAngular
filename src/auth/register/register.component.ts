import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    registerForm!: FormGroup;
  submitted = false;
countryList = ['India', 'USA', 'UK'];
tradeRoles = ['Retailer', 'Wholesaler', 'Distributor'];
passwordMismatch = false;

    constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      country: ['', Validators.required],
      emailOrMobile: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      companyName: ['', Validators.required],
      fullName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10,}$/)]],
      tradeRole: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue],
    },
      {
        validator: this.MustMatch('password', 'confirmPassword')
      });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      this.toastr.error('Please complete all required fields.');
      return;
    }

    const formData = this.registerForm.value;

    // Optional: Password match check
    if (formData.password !== formData.confirmPassword) {
      this.toastr.error('Passwords do not match.');
      return;
    }

    this.authService.Register(formData).subscribe({
      next: (response) => {
        if (response?.data) {
          this.toastr.success('Registration successful');
          this.router.navigate(['/dashboard']); // or '/login'
        } else {
          this.toastr.error('Registration failed. Please try again.');
        }
      },
      error: (err) => {
        console.error(err);
        this.toastr.error('Something went wrong.');
      }
    });
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
}
 
