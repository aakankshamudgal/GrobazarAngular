import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { AuthService } from '../../../shared/services/auth.service';
import { ProductService } from '../../../shared/services/product.service'; 
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { element } from '@angular/core/src/render3';
import { SubCategory } from 'src/app/shared/models/subCategory';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	productList: Product[];
	subCategoryList: SubCategory[];
	loading = false;
	brands = ['All', 'Poster' ,'Notebooks' , 'Badges' , 'Special Kits'];

	selectedBrand: 'All';

	page = 1;
	constructor(
		private route: ActivatedRoute,
		public authService: AuthService,
		private productService: ProductService,
		private toastrService: ToastrService
	) { }

	ngOnInit() {
		this.route.url.subscribe((params) => {
			if(params.length == 2) {
				const category = params[1].path;
				this.getCategoryProduct(category);
			}
			else if (params.length == 3 ) {
				const category = params[1].path;
				const catsub = params[2].path;
				this.getSubCategoryProduct(category,catsub);
			}
			else {
				this.getAllProducts();
			}
		});
	}

	getSubCategoryProduct(category,subcategory) {
		this.loading = true;
		const x = this.productService.getSubCategoryProduct(subcategory);
		const subCat = this.productService.getSubCategories(category);
		x.snapshotChanges().subscribe(
			(product) => {
				this.loading = false;
				this.productList = [];
				product.forEach((element) => {
					const y = element.payload.toJSON();
					y['$key'] = element.key;
					this.productList.push(y as Product);
				});
			},
			(err) => {
				this.toastrService.error('Error while fetching Products', err);
			}
		);

		subCat.snapshotChanges().subscribe(
			(subCategory) => {
				this.loading = false;
				this.subCategoryList = [];
				subCategory.forEach((element) => {
					const z = element.payload.toJSON();
					z['$key'] = element.key;
					this.subCategoryList.push(z as SubCategory);
				});
			},
			(err) => {
				this.toastrService.error('Error while fetching SubCategories', err);
			}
		);
	}

	getCategoryProduct(category) {
		this.loading = true;
		const x = this.productService.getCategoryProduct(category);
		const subCat = this.productService.getSubCategories(category);
		x.snapshotChanges().subscribe(
			(product) => {
				this.loading = false;
				this.productList = [];
				product.forEach((element) => {
					const y = element.payload.toJSON();
					y['$key'] = element.key;
					this.productList.push(y as Product);
				});
			},
			(err) => {
				this.toastrService.error('Error while fetching Products', err);
			}
		);

		subCat.snapshotChanges().subscribe(
			(subCategory) => {
				this.loading = false;
				this.subCategoryList = [];
				subCategory.forEach((element) => {
					const z = element.payload.toJSON();
					z['$key'] = element.key;
					this.subCategoryList.push(z as SubCategory);
				});
			},
			(err) => {
				this.toastrService.error('Error while fetching SubCategories', err);
			}
		);
	}

	getAllProducts() {
		// this.spinnerService.show();
		this.loading = true;
		const x = this.productService.getProducts();
		x.snapshotChanges().subscribe(
			(product) => {
				this.loading = false;
				// this.spinnerService.hide();
				this.productList = [];
				product.forEach((element) => {
					const y = element.payload.toJSON();
					y['$key'] = element.key;
					this.productList.push(y as Product);
				});
			},
			(err) => {
				this.toastrService.error('Error while fetching Products', err);
			}
		);
	}

	removeProduct(key: string) {
		this.productService.deleteProduct(key);
	}

	addFavourite(product: Product) {
		this.productService.addFavouriteProduct(product);
	}

	addToCart(product: Product) {
		this.productService.addToCart(product);
	}
}
