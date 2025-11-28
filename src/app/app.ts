// src/app/app.ts
import { Component } from '@angular/core';
import { ComponenteSenaComponent } from "./componente-sena/componente-sena";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponenteSenaComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {}


