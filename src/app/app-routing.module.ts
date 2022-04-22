import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent as AdminLogin } from './admin/admin_login/admin.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component'
import { ProductsListComponent } from './product/products-list/products-list.component'
import { AdminComponent } from './admin/admin.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { EditComponent } from './admin/edit/edit.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {
      path: '',
      component: ProductsListComponent
    },
    {
      path: 'product',
      children: [
        {
          path:'',
          component: ErrorComponent
        },
        {
          path:'**',
          component: ProductDetailsComponent
        }
      ]
    }
  ]},
  {path: 'admin', component: AdminComponent, children: [
    {
      path: 'products', // child route path
      component: AddProductsComponent, // child route component that the router renders
    },
    {
      path: 'edit',
      // another child route component that the router renders
      children: [
        {
          path: '',
          component: EditComponent,
        },
        {
          path: ':id',
          component: EditProductComponent
        },
    ]
    },
  ],},
  {path: 'admin_login', component: AdminLogin},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
