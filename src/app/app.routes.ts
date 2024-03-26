import { Routes } from '@angular/router';
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";

export const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", component: HomeComponent},
  {path: "navbar", component: NavComponent},
  {path: "footer", component: FooterComponent},
  {path: "products", component: ProductComponent}
];
