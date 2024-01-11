import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
      // Add other components used in your application
      AppComponent,
      NavbarComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule // Include your routing module
      // Add other modules (FormsModule, HttpClientModule, etc.) as needed
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
