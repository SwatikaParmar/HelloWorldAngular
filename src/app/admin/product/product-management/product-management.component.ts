import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ContentService } from '../../../../core/services/content.service';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']  // ✅ fixed
})
export class ProductManagementComponent {
 productForm!: FormGroup;
  submitted = false;
  Id: any;
  page: number = 0;
  Data: any;
  imagePreviews: string[] = [];
  List: any;
  images: File[] = [];
  rootUrl: any;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastrService: ToastrService,
    private contentService: ContentService,
    private fb: FormBuilder,
    private _location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.Id = this.route.snapshot.params['id'];
  this.rootUrl = environment.rootPathUrl;
    this.route.queryParams.subscribe(params => {
      this.page = +params['page'] || 0;
    });

    if (this.Id) {
      this.getDetail();
    }

    this.getProductList();
  }

  initForm() {
    this.productForm = this.fb.group({
      categoryName: ['', Validators.required],
      parentCategory: ['', Validators.required],
      Image: ['', Validators.required],
      sortOrder: ['', Validators.required],
      Status: ['', Validators.required],
    });
  }

  get f() {
    return this.productForm.controls;
  }

  getDetail() {
    this.contentService.categoryDetail(this.Id).subscribe(response => {
      if (response.isSuccess) {
        this.Data = response.data;
        const imageList: string[] = Array.isArray(this.Data.imageList)
          ? this.Data.imageList
          : [];

        this.imagePreviews = imageList.map((img: string) => this.rootUrl + img);

        this.productForm.patchValue({
          categoryName: this.Data.categoryName,
          parentCategory: this.Data.parentCategory,
          Image: this.Data.image, // Adjust based on your backend's field name
          sortOrder: this.Data.sortOrder,
          Status: this.Data.status
        });
      } else {
        this.toastrService.error('Failed to load category details.');
      }
    });
  }

  category() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }

    const payload = {
      Id: this.Id || 0,
      categoryName: this.productForm.value.categoryName,
      parentCategory: this.productForm.value.parentCategory,
      Image: this.productForm.value.Image, // This may need to be a URL or handled via separate upload
      sortOrder: this.productForm.value.sortOrder,
      Status: this.productForm.value.Status
    };

    this.spinner.show();
    this.contentService.addUpdateCategory(payload).subscribe(
      response => {
        this.spinner.hide();
        if (response.isSuccess) {
          this.toastrService.success(this.Id ? 'Updated successfully.' : 'Added successfully.');
          this.router.navigate(['/your-category-list'], { queryParams: { page: this.page } });
        } else {
          this.toastrService.error(response.messages || 'Failed to save category.');
        }
      },
      error => {
        this.spinner.hide();
        this.toastrService.error('Server error while saving category.');
      }
    );
  }

  backClicked() {
    this._location.back();
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const files = Array.from(target.files);
      for (const file of files) {
        if (this.images.length < 5) {
          this.images.push(file);
          const reader = new FileReader();
          reader.onload = () => {
            this.imagePreviews.push(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      }
    }
  }

  removesImages(index: number) {
    this.images.splice(index, 1);
    this.imagePreviews.splice(index, 1);
  }

  clearAllImages() {
    this.images = [];
    this.imagePreviews = [];
  }

  getProductList() {
    this.contentService.categoryList().subscribe(response => {
      if (response.isSuccess) {
        this.List = response.data;
      } else {
        this.toastrService.error('Failed to load category list.');
      }
    });
  }
}

