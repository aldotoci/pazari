import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent as AdminLogin } from './admin/admin_login/admin.component';
import { AdminComponent } from './admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { EditComponent } from './admin/edit/edit.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ErrorComponent } from './error/error.component';
import { MiniSearchResultComponent } from './navbar/mini-search-result/mini-search-result.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListComponent,
    ProductComponent,
    HomeComponent,
    AdminLogin,
    AdminComponent,
    AdminNavbarComponent,
    AddProductsComponent,
    EditComponent,
    EditProductComponent,
    ProductDetailsComponent,
    ErrorComponent,
    MiniSearchResultComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
