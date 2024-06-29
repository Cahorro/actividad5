import { Component, Input } from '@angular/core';
import { Iarticulo } from '../../interfaces/iarticulo.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() articulos: Iarticulo[] = [];

  ngOnInit() {
    this.cargarArticulos();
  }

  cargarArticulos(){
    let html = "";
    this.articulos.forEach((articulo: Iarticulo) => {
      html += `<article class="articulo">
                  <h3>${articulo.title}</h3>
                  <p>Fecha de publicación: ${articulo.date}
                  <img src="${articulo.image}" />
                  <p>${articulo.content}</p>
                </article>`
    });
    console.log(html);
    return html;
  }

}
