import { Component, OnInit } from "@angular/core";
import { ProductService } from '../shared/services/product.service';
import { Category } from '../shared/models/category';
import { Banner } from '../shared/models/banner';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
	categoryList: Category[];
	bannerList: Banner[];
	loading = false;
  constructor(
  		private productService: ProductService,
  		private toastrService: ToastrService
  	) {}

  ngOnInit() {
  	this.getAllCategory();
  	this.getAllBanner();
  }

  getAllCategory() {
		// this.spinnerService.show();
		this.loading = true;
		const x = this.productService.getCategories();
		x.snapshotChanges().subscribe(
			(category) => {
				this.loading = false;
				// this.spinnerService.hide();
				this.categoryList = [];
				category.forEach((element) => {
					const y = element.payload.toJSON();
					y['$key'] = element.key;
					this.categoryList.push(y as Category);
				});
			},
			(err) => {
				this.toastrService.error('Error while fetching Category', err);
			}
		);
	}

	getAllBanner() {
		// this.spinnerService.show();
		this.loading = true;
		const x = this.productService.getBanner();
		x.snapshotChanges().subscribe(
			(banner) => {
				this.loading = false;
				// this.spinnerService.hide();
				this.bannerList = [];
				banner.forEach((element) => {
					const y = element.payload.toJSON();
					y['$key'] = element.key;
					this.bannerList.push(y as Banner);
				});
			},
			(err) => {
				this.toastrService.error('Error while fetching Banner', err);
			}
		);
	}

}
