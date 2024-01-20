import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
      // Add other components used in your application
      AppComponent,
      NavbarComponent,
      HomeComponent
    ],
    imports: [
      BrowserModule,
      RouterModule,
      AppRoutingModule, // Include your routing module
      CarouselModule.forRoot(),
      // Add other modules (FormsModule, HttpClientModule, etc.) as needed
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
