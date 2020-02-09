import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuContraComponent } from './recu-contra/recu-contra.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioPenalComponent } from './formulario-penal/formulario-penal.component';
import { FormularioCivilComponent } from './formulario-civil/formulario-civil.component';
import { FormularioConstitucionalComponent } from './formulario-constitucional/formulario-constitucional.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';


const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'recu-contra', component: RecuContraComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'formulario-penal', component:FormularioPenalComponent },
  { path: 'formulario-civil', component:FormularioCivilComponent },
  { path: 'formulario-constitucional', component:FormularioConstitucionalComponent },
  { path: 'estadistica', component:EstadisticaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
