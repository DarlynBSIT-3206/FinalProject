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
    path: 'pizza-form1',
    loadChildren: () => import('./pizza-form1/pizza-form1.module').then( m => m.PizzaForm1PageModule)
  },
  {
    path: 'pizza-form2',
    loadChildren: () => import('./pizza-form2/pizza-form2.module').then( m => m.PizzaForm2PageModule)
  },
  {
    path: 'pizza3',
    loadChildren: () => import('./pizza3/pizza3.module').then( m => m.Pizza3PageModule)
  },
  {
    path: 'pizza4',
    loadChildren: () => import('./pizza4/pizza4.module').then( m => m.Pizza4PageModule)
  },
  {
    path: 'pizza5',
    loadChildren: () => import('./pizza5/pizza5.module').then( m => m.Pizza5PageModule)
  },
  {
    path: 'pizza6',
    loadChildren: () => import('./pizza6/pizza6.module').then( m => m.Pizza6PageModule)
  },
  {
    path: 'pizza7',
    loadChildren: () => import('./pizza7/pizza7.module').then( m => m.Pizza7PageModule)
  },
  {
    path: 'pizza8',
    loadChildren: () => import('./pizza8/pizza8.module').then( m => m.Pizza8PageModule)
  },
  {
    path: 'pizza9',
    loadChildren: () => import('./pizza9/pizza9.module').then( m => m.Pizza9PageModule)
  },
  {
    path: 'pizza10',
    loadChildren: () => import('./pizza10/pizza10.module').then( m => m.Pizza10PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
