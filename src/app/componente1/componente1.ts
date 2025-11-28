import { Component } from '@angular/core';
import { ComunicacionService } from '../servicios/comunicacion';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.html',
  styleUrls: ['./componente1.scss']
})
export class Componente1Component {

  constructor(private comunicacion: ComunicacionService) {}

  cargarMenu(op: number) {
    if (op === 1) {
      this.comunicacion.actualizarDatos('Sección SENA', ['Presentación','Historia','Misión','Visión'], 0);
    }
    if (op === 2) {
      this.comunicacion.actualizarDatos('Ficha 3066474', ['Horario','Instructor','Aprendices'], 0);
    }
    if (op === 3) {
      this.comunicacion.actualizarDatos('Módulos', ['HTML','CSS','Angular'], 0);
    }
  }
}

