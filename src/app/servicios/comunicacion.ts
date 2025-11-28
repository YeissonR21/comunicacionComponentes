import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComunicacionService {
  private tituloSource = new BehaviorSubject<string>('Título inicial');
  titulo$ = this.tituloSource.asObservable();

  private opcionesSource = new BehaviorSubject<string[]>([]);
  opciones$ = this.opcionesSource.asObservable();

  private seleccionadoSource = new BehaviorSubject<number>(-1);
  seleccionado$ = this.seleccionadoSource.asObservable();

  actualizarDatos(titulo: string, opciones: string[], seleccionado: number) {
    this.tituloSource.next(titulo);
    this.opcionesSource.next(opciones);
    this.seleccionadoSource.next(seleccionado);
  }
}


