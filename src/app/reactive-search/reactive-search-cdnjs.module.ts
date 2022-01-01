import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveSearchCdnjsRoutes } from './reactive-search-cdnjs.routing';
import { ReactiveSearchCdnjsComponent } from './reactive-search-cdnjs/reactive-search-cdnjs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ReactiveSearchCdnjsComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ReactiveSearchCdnjsRoutes,  HttpClientModule,],
})
export class ReactiveSearchCdnjsModule {}
