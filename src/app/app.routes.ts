// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Importa tus páginas desde sus carpetas reales
import { Pagina1Component } from './paginas/pagina1/pagina1';
import { Pagina2Component } from './paginas/pagina2/pagina2';
import { Pagina3Component } from './paginas/pagina3/pagina3';

// Importa tu componente padre
import { ComponenteSenaComponent } from './componente-sena/componente-sena';

export const routes: Routes = [
  { path: '', component: ComponenteSenaComponent },

  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'pagina3', component: Pagina3Component },

  { path: '**', redirectTo: '' }
];



