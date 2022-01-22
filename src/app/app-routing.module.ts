import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { CoursesComponent } from './pages/courses/courses.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: '**',
    component: WelcomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
