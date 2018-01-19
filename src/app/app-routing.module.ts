import { NgModule } from '@angular/core';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { BuscarCasoComponent } from './core/buscar-caso/buscar-caso.component';
import { CriarCasoComponent } from './core/criar-caso/criar-caso.component';
import { DetalharCasoComponent } from './core/detalhar-caso/detalhar-caso.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'buscar-caso', component: BuscarCasoComponent },
  { path: 'criar-caso', component: CriarCasoComponent },
  { path: 'detalhar-caso', component: DetalharCasoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    // The preloading configuration will load all the lazy loading modules after
    // the user access the main page. This configurations continue loading in a
    // different javascript file (in the browser's client) and when the lazy
    // load modules to be access (with de URL), the lazy load module has been loaded,
    // avoiding the user to wait a download to chuck.js
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


