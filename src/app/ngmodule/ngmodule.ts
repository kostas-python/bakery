import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    LazyLoadImageModule
  ],
  exports: [
    LazyLoadImageModule
  ]
})
export class LazyLoadingModule {}
