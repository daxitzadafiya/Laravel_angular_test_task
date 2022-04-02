import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'students/index', pathMatch: 'full' },
  { path: 'students/index', component: IndexComponent },
  { path: 'students/:postId/view', component: ViewComponent },
  { path: 'students/create', component: CreateComponent },
  { path: 'students/:postId/edit', component: EditComponent }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class StudentRoutingModule { }
