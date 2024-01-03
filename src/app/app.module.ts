import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
      // Add other components used in your application
    ],
    imports: [
      BrowserModule,
      AppRoutingModule, // Include your routing module
      // Add other modules (FormsModule, HttpClientModule, etc.) as needed
    ],
    providers: [],
    bootstrap: [],
  })
  export class AppModule {}
