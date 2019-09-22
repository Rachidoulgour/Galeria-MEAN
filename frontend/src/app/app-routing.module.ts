import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoListComponent} from './components/photo-list/photo-list.component'
import {PhotoFormComponent} from './components/photo-form/photo-form.component';
import {PhotoPreviewComponent} from './components/photo-preview/photo-preview.component';

const routes: Routes = [
  {
    path: 'public',
    component: PhotoListComponent
  },
  {
    path:'public/new',
    component: PhotoFormComponent
  },
  {
    path: 'public/:id',
    component: PhotoPreviewComponent
  },
  {
    path: '',
    redirectTo: '/public',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
