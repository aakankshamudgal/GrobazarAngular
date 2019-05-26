import { Component, OnInit } from "@angular/core";
import { ProductService } from '../../shared/services/product.service';
import { Category } from '../../shared/models/category';
import { Banner } from '../../shared/models/banner';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
	categoryList: Category[];
	loading = false;
  constructor(
  		private productService: ProductService,
  		private toastrService: ToastrService
  	) {}

  ngOnInit() {
  	this.getAllCategory();
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

}
