import { Component } from '@angular/core';
import { Componente1Component } from "../componente1/componente1";
import { Componente2Component } from "../componente2/componente2";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-componente-sena',
  templateUrl: './componente-sena.html',
  styleUrls: ['./componente-sena.scss'],
  imports: [Componente1Component, Componente2Component, RouterOutlet]
})
export class ComponenteSenaComponent {}

