import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then( m => m.FirstPagePageModule)
  },
  {
    path: 'delivery-form',
    loadChildren: () => import('./delivery-form/delivery-form.module').then( m => m.DeliveryFormPageModule)
  },
  {
    path: 'thirdform',
    loadChildren: () => import('./thirdform/thirdform.module').then( m => m.ThirdformPageModule)
  },
  {
    path: 'third-form',
    loadChildren: () => import('./third-form/third-form.module').then( m => m.ThirdFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
