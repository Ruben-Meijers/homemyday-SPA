import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'HomeMyDay'
    },
    children: [
      {path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
      {path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
      {path: 'user', loadChildren: './pages/user/user.module#UserModule'},
      {path: 'results', loadChildren: './pages/results/results.module#ResultsModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
