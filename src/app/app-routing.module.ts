import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = ([
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
},
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent }
]);

@NgModule({
  imports: [RouterModule.forRoot([
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent }
])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
