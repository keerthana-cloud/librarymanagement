import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path:'book-details', component:BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }