import { ReactiveSearchCdnjsComponent } from './reactive-search-cdnjs/reactive-search-cdnjs.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ReactiveSearchCdnjsComponent },
];

export const ReactiveSearchCdnjsRoutes = RouterModule.forChild(routes);
