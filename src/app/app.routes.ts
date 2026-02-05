
import { HomeComponent } from '../All-Components/home/home.component';
import { ExperienceComponent } from '../All-Components/experience/experience.component';
import { ProjectComponent } from '../All-Components/project/project.component';
import { ContactComponent } from '../All-Components/contact/contact.component';
import { SkillsComponent } from '../All-Components/skills/skills.component';

import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // or redirectTo:'home'

  { path: 'home', component: HomeComponent },

  // Experience routing
  { path: 'experience', component: ExperienceComponent },
  { path: 'cv', redirectTo: 'experience', pathMatch: 'full' }, // Redirect old route

  { path: 'projects', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: SkillsComponent },

  // Optional: 404 page
  { path: '**', redirectTo: 'home' } // or create a NotFoundComponent
];
