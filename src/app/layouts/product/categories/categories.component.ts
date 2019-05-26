
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: [ './categories.component.scss' ]
})
export class CategoriesComponent implements OnInit {
	categoryList: Category[];
	options: any;
	loading = false;
	constructor(
		private productService: ProductService,
		private toastrService: ToastrService,	
	) {}

	ngOnInit() {
		this.options = {
			dots: false,
			responsive: {
				'0': { items: 1, margin: 5 },
				'430': { items: 2, margin: 5 },
				'550': { items: 3, margin: 5 },
				'670': { items: 4, margin: 5 }
			},
			autoplay: true,
			loop: true,
			autoplayTimeout: 3000,
			lazyLoad: true
		};
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
