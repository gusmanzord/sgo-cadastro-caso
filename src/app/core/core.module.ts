import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalharCasoComponent } from './detalhar-caso/detalhar-caso.component';
import { EditarCasoComponent } from './editar-caso/editar-caso.component';
import { CadastroTagComponent } from './cadastro-tag/cadastro-tag.component';
import { BuscarCasoDialog } from './buscar-caso/buscar-caso.component';
import { BuscarCasoPromoverDialog } from './buscar-caso/buscar-caso.component';

@NgModule({
  declarations: [
  DashboardComponent,
  DetalharCasoComponent,
  EditarCasoComponent,
  CadastroTagComponent,
  BuscarCasoDialog,
  BuscarCasoPromoverDialog
  
],

  imports: [
    RouterModule,
    MaterialModule,
  ],
 exports: [
    RouterModule,
    MaterialModule,
  ],
  entryComponents:[BuscarCasoDialog, BuscarCasoPromoverDialog],
  providers: []
})
export class CoreModule {}
