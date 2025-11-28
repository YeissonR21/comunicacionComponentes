import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicacionService } from '../servicios/comunicacion';
import { NgClass, NgFor } from '@angular/common';



@Component({
  selector: 'app-componente2',
  standalone: true,
  imports:[NgFor,NgClass],
  templateUrl: './componente2.html',
  styleUrls: ['./componente2.scss']
})
export class Componente2Component implements OnInit {

  titulo = '';
  opciones: string[] = [];
  seleccionado = -1;

  constructor(private comunicacion: ComunicacionService, private router: Router) {}

  ngOnInit() {
    this.comunicacion.titulo$.subscribe(t => this.titulo = t);
    this.comunicacion.opciones$.subscribe(o => this.opciones = o);
    this.comunicacion.seleccionado$.subscribe(s => this.seleccionado = s);
  }

  seleccionar(i: number) {
    this.seleccionado = i;
    if (i === 0) this.router.navigate(['/pagina1']);
    if (i === 1) this.router.navigate(['/pagina2']);
    if (i === 2) this.router.navigate(['/pagina3']);
  }
}

