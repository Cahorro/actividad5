import { Component, EventEmitter, Output } from '@angular/core';
import { Iarticulo } from '../../interfaces/iarticulo.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  newArticulo: Iarticulo = { title: "", image: "", content: "", date: ""};
  @Output() publicaArticulo = new EventEmitter();
  publicar(){
    this.publicaArticulo.emit(this.newArticulo);
    this.newArticulo = { title: "", image: "", content: "", date: ""};
  }
}
