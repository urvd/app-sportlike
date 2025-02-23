import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from './foot/sport/sport.component';
import { DefaultComponent } from './default/default.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DefaultComponent },
  {
    path: 'sports',
    component: SportComponent
  }
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}*/
