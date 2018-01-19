import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule,
  MatDialogModule,
  MatSelectModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatTabsModule,
  MatNativeDateModule
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatTabsModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }

