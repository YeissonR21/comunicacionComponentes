import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  imports: [],
  templateUrl: './componente1.html',
  styleUrl: './componente1.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Componente1 {

}
