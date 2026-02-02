
import { HomeComponent } from '../All-Components/home/home.component';
import { CvComponent } from '../All-Components/cv/cv.component';
import { ProjectComponent } from '../All-Components/project/project.component';
import { ContactComponent } from '../All-Components/contact/contact.component';

import {  Routes } from '@angular/router';


export const routes: Routes = [
  {path:'', component:HomeComponent}, // or redirectTo:'home'

  {path:'home', component:HomeComponent},

  // CV routing
  {path:'cv', component:CvComponent},

  {path:'projects', component:ProjectComponent},
  {path:'contact', component:ContactComponent},

  // Optional: 404 page
  {path:'**', redirectTo:'home'} // or create a NotFoundComponent
];
