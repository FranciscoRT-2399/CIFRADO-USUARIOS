import { Routes } from '@angular/router';
import { ListarComponent } from './Componentes/listar/listar.component';
import { ListarCifradoComponent } from './Componentes/listar-cifrado/listar-cifrado.component';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { BuscarIdComponent } from './Componentes/buscar-id/buscar-id.component';
import { BuscarUsuarioComponent } from './Componentes/buscar-usuario/buscar-usuario.component';

export const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent,
  },
  {
    path: 'listarCifrado',
    component: ListarCifradoComponent,
  },
  {
    path: 'guardar',
    component: GuardarComponent,
  },
  {
    path: 'buscarId',
    component: BuscarIdComponent,
  },
  {
    path: 'buscarUsuario',
    component: BuscarUsuarioComponent,
  },
];
