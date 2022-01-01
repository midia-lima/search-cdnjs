import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reactive-search'

  },

  {
    path: 'reactive-search',
    loadChildren: () => import('./reactive-search/reactive-search-cdnjs.module').then((m) => m.ReactiveSearchCdnjsModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
