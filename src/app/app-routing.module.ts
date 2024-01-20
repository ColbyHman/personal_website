import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectTemplateComponent } from './components/project-template/project-template.component';
import { FunStuffComponent } from './components/fun-stuff/fun-stuff.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects/:projectId', component: ProjectTemplateComponent},
    { path: 'fun-stuff/:projectId', component: FunStuffComponent}
    // ... other routes
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}