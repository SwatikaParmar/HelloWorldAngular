import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ContentService } from '../../../../core/services/content.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-attribute-management',
  templateUrl: './attribute-management.component.html',
  styleUrls: ['./attribute-management.component.css']
})
export class AttributeManagementComponent implements OnInit {
  list: any[] = [];
  page: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  rootUrl: any;

  constructor(
    private toastrService: ToastrService,
    private spinner: NgxSpinnerService,
    private contentService: ContentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.rootUrl = environment.rootPathUrl;
    this.route.queryParams.subscribe((params) => {
      this.page = +params['page'] || 1;
      this.attributeLists();
    });
  }

  attributeLists(): void {
    this.spinner.show();
    this.contentService.attributeList().subscribe(
      (response) => {
        this.spinner.hide();
        if (response.isSuccess && response.data) {
          this.totalItems = response.data.length;
          this.list = response.data;
        } else {
          this.toastrService.error(response.messages || 'Failed to load attribute list.');
        }
      },
      (error) => {
        this.spinner.hide();
        this.toastrService.error('Server error while loading attributes.');
      }
    );
  }

  onPageChange(page: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }
}
