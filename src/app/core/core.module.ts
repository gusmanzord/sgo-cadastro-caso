import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalharCasoComponent } from './detalhar-caso/detalhar-caso.component';
import { EditarCasoComponent } from './editar-caso/editar-caso.component';


@NgModule({
  declarations: [
  DashboardComponent,
  DetalharCasoComponent,
  EditarCasoComponent],

  imports: [
    RouterModule,
    MaterialModule,
  ],
 exports: [
    RouterModule,
    MaterialModule,
  ],
  providers: []
})
export class CoreModule {}
