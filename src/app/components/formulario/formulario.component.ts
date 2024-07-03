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
    if (this.newArticulo.title !=="" && this.newArticulo.image !== "" && this.newArticulo.content !== "" && this.newArticulo.date !== ""){
      this.newArticulo.date = this.newArticulo.date.split("-").reverse().join("/");
      this.publicaArticulo.emit(this.newArticulo);
      this.newArticulo = { title: "", image: "", content: "", date: ""};
    }else{
      alert ("Todos los campos son obligatorios");
    }
  }

  isValidUrl(urlString: string) {
    try {
      return Boolean(new URL(urlString));
    }
    catch(e){
      return false;
    }
  }

  onChangeURL(){
    if (!this.isValidUrl(this.newArticulo.image)){
      alert("Formato de URL de imagen inválido");
    }
  }
}
