import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginComponent } from './login/login.component';
import { MealComponent } from './meal/meal.component';
import { RegisterComponent } from './register/register.component';
import { SnackComponent } from './snack/snack.component';
import { TiffinComponent } from './tiffin/tiffin.component';
import { UploadComponent } from './upload/upload.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ItemsComponent } from './items/items.component';
import { Tiffin1Component } from './tiffin1/tiffin1.component';
import { OrdersComponent } from './orders/orders.component';
import { Meal1Component } from './meal1/meal1.component';
import { Snack1Component } from './snack1/snack1.component';
import { EmpComponent } from './emp/emp.component';
import { FinalorderComponent } from './finalorder/finalorder.component';
import { PrevorderComponent } from './prevorder/prevorder.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"prevorders",
    component:PrevorderComponent
  },
  {
    path:"finalorder",
    component:FinalorderComponent
  },
  {
    path:"categories",
    component:ItemsComponent
  },
  {
    path:"meals1",
    component:Meal1Component
  },
  {
    path:"snacks1",
    component:Snack1Component
  },
  {
    path:"tiffins1",
    component:Tiffin1Component
  },
  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"upload",
    component:UploadComponent
  },
  {
    path:"item-list",
    component:ItemListComponent
  },
  {
    path:"contactus",
    component:EmpComponent
  },
  {
    path:"tiffins",
    component:TiffinComponent
  },
  {
    path:"meals",
    component:MealComponent
  },
  {
    path:"snacks",
    component:SnackComponent
  },
  {
    path:"orders",
    component:OrdersComponent
  },
  {
    path:"item-edit/:id",
    component:ItemEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
