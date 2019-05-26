import {
  Component,
  OnInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service";
import { ProductService } from "../../shared/services/product.service";
import { Category } from '../../shared/models/category';
import { ToastrService } from 'src/app/shared/services/toastr.service';

declare var $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  categoryList: Category[];
  loading = false;
  constructor(
    public authService: AuthService,
    private router: Router,
    public productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {  this.getAllCategory(); }
  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
   
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
