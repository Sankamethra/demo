import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AuthlogService } from './authlog.service';



import { filter } from 'rxjs/operators';
import { interval, timer } from 'rxjs'
import { map } from 'rxjs/operators'
import { bufferMap } from 'rxjs-operators'
import { ReactiveFormsModule} from '@angular/forms';


import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from './upload/upload.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    UpdateComponent,
    UploadComponent,
    TableComponent,
    RegisterComponent,
    DataComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService,AuthService],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
