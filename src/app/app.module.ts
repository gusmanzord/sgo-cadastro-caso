import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { BuscarCasoComponent } from './core/buscar-caso/buscar-caso.component';
import { AppnameComponent } from './appname/appname.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CriarCasoComponent } from './core/criar-caso/criar-caso.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuscarCasoComponent,
    AppnameComponent,
    MenuComponent,
    LogoComponent,
    PerfilComponent,
    CriarCasoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







