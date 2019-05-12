import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { IndexComponent } from "./index.component";
import { YourdesignComponent } from "./yourdesign/yourdesign.component";
import { AuthGuard } from '../shared/services/auth_gaurd';
import { MakeusdoComponent } from "./makeusdo/makeusdo.component";

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
      },
      {
        path: "YourDesign",
        component: YourdesignComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: "makeusdo",
        component: MakeusdoComponent
      }
    ]
  }
];
