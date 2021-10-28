import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsComponent } from './items/items.component';
import { TiffinComponent } from './tiffin/tiffin.component';
import { MealComponent } from './meal/meal.component';
import { SnackComponent } from './snack/snack.component';
import { UploadComponent } from './upload/upload.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemListComponent } from './item-list/item-list.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Tiffin1Component } from './tiffin1/tiffin1.component';
import { Meal1Component } from './meal1/meal1.component';
import { Snack1Component } from './snack1/snack1.component';
import { OrdersComponent } from './orders/orders.component';
import { EmpComponent } from './emp/emp.component';
import { FinalorderComponent } from './finalorder/finalorder.component';
import { PrevorderComponent } from './prevorder/prevorder.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ItemsComponent,
    TiffinComponent,
    MealComponent,
    SnackComponent,
    UploadComponent,
    ItemEditComponent,
    ItemListComponent,
    RegisterComponent,
    AboutusComponent,
    Tiffin1Component,
    Meal1Component,
    Snack1Component,
    OrdersComponent,
    EmpComponent,
    FinalorderComponent,
    PrevorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
