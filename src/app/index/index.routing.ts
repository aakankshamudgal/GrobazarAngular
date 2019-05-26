import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { IndexComponent } from "./index.component";
import { AuthGuard } from '../shared/services/auth_gaurd';
import { PrivacyPolicyComponent } from './privacypolicy/privacypolicy.component';
import { FAQComponent } from './faq/faq.component';
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
        path: "privacypolicy",
        component: PrivacyPolicyComponent
      },
      {
        path: "faq",
        component: FAQComponent
      }
    ]
  }
];
