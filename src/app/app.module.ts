import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuContraComponent } from './recu-contra/recu-contra.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioPenalComponent } from './formulario-penal/formulario-penal.component';
import { FormularioCivilComponent } from './formulario-civil/formulario-civil.component';
import { FormularioConstitucionalComponent } from './formulario-constitucional/formulario-constitucional.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    RecuContraComponent,
    MenuComponent,
    FormularioPenalComponent,
    FormularioCivilComponent,
    FormularioConstitucionalComponent,
    NavBarComponent,
    EstadisticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
