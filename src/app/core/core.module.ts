import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
  ],

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
