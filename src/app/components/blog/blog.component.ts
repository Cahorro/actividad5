import { Component, Input } from '@angular/core';
import { Iarticulo } from '../../interfaces/iarticulo.interface';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {;
  @Input() articulos: Iarticulo[] = [];

  ngOnInit() {
    this.cargarArticulos();
  }

  cargarArticulos(){
    let html = "";
    this.articulos.forEach((articulo: Iarticulo) => {

      html += `<article class="articulo">
                  <h3 class="tituloArticulo">${articulo.title}</h3>
                  <p class="fecha">Fecha de publicación: ${articulo.date}</p>
                  <img class="imagen" src="${articulo.image}" alt="${articulo.title}"/>
                  <p class="contenido">${articulo.content}</p>
                </article>`
    });
    //console.log(html);
    return html;
  }

}
