import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'my-course/index', pathMatch: 'full' },
//   { path: 'my-course/index', component: IndexComponent },
//   { path: 'my-course/:Id/view', component: ViewComponent },
//   { path: 'my-course/create', component: CreateComponent },
//   { path: 'my-course/:mycourseId/edit', component: EditComponent }
// ];
const routes: Routes = [
  { path: '', redirectTo: 'course/index', pathMatch: 'full' },
  { path: 'course/index', component: IndexComponent },
  { path: 'course/:myCourseId/view', component: ViewComponent },
  { path: 'course/create', component: CreateComponent },
  { path: 'course/:myCourseId/edit', component: EditComponent }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class MyCourseRoutingModule { }
