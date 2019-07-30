import { Routes, RouterModule } from '@angular/router';
import { GeneradorComponent } from './generador.component';
import { ListaMemesComponent } from './lista-memes/lista-memes.component';
import { ErrorComponent } from './error/error.component';



const APP_ROUTES: Routes = [
    { path: 'meme', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'meme/lista', component: ListaMemesComponent},
    { path: 'meme/inicio', component: GeneradorComponent},
    { path: 'meme/**', component: ErrorComponent},
];


export const Routing = RouterModule.forRoot(APP_ROUTES) ;
