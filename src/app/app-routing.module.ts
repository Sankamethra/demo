import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { UploadComponent } from './upload/upload.component';
import { UpdateComponent } from './update/update.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"data",component:DataComponent},
  {path:"main",component:MainComponent},
  {path:"upload",component:UploadComponent},
  {path:"update",component:UpdateComponent},
  {path:"table",component:TableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
