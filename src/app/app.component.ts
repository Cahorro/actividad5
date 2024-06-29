import { Component } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BlogComponent } from './components/blog/blog.component';
import { Iarticulo } from './interfaces/iarticulo.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrayArticulos: Iarticulo[] = [];

  handlePublicacion($event: any) {
    this.arrayArticulos.push($event);
    console.log(this.arrayArticulos);
  }
}
