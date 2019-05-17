import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { IndexComponent } from "./index.component";
import { AuthGuard } from '../shared/services/auth_gaurd';

export const IndexRoutes: Routes = [
  {
    path: "",
    
    children: [
      {
        path: "",
        component: IndexComponent
      },
      {
        path: "login",
        component: LoginComponent
      }
    ]
  }
];
