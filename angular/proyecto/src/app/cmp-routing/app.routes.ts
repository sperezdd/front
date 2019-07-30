import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { InfoUsuarioComponent } from './usuarios/info-usuario/info-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { USUARIOS_ROUTES } from './usuarios/usuarios.routes';
import { ErrorComponent } from './error/error.component';

/*
Configuracion del modulo, para definir las rutas
*/

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES},
    { path: 'nuevo-usuario', component: NuevoUsuarioComponent},
    { path: 'inicio', component: InicioComponent},
    { path: '**', component: ErrorComponent},
    // { path: ':id', component: InfoUsuarioComponent}
];


export const Routing = RouterModule.forRoot(APP_ROUTES) ;
