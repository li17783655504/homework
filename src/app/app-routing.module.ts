import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StuEditComponent } from './stu-edit/stu-edit.component';
import { StuNewComponent } from './stu-new/stu-new.component';
const routes: Routes = [
  {
    path:'edit/:id',
    component:StuEditComponent
  },
  {
    path:'student',
    component:StudentComponent    
  },
  {
    path:'new',
    component:StuNewComponent
  },
  {
    path: '',
    redirectTo: '/student',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
