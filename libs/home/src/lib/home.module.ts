import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: HomeComponent,
    },
  ]),],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
