import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClgComponent } from './clg/clg.component';
import { SnService } from './sn.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
