import { Component, Input } from '@angular/core';
import { Iarticulo } from '../../interfaces/iarticulo.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {;
  @Input() articulos: Iarticulo[] = [];
  articulosIniciales: Iarticulo[] = [{title: "Título de noticia 1", image: "https://iconape.com/wp-content/png_logo_vector/asterix-nestorix-logo.png", content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa placerat. In arcu cursus euismod quis viverra nibh cras pulvinar. Turpis tincidunt id aliquet risus feugiat in ante metus. Nibh sit amet commodo nulla facilisi nullam vehicula. Sit amet risus nullam eget felis. Id velit ut tortor pretium. Dictum fusce ut placerat orci nulla pellentesque dignissim. Netus et malesuada fames ac turpis egestas integer. Tempus iaculis urna id volutpat lacus laoreet non. Fames ac turpis egestas maecenas pharetra convallis posuere. Nisi vitae suscipit tellus mauris a diam maecenas. Accumsan tortor posuere ac ut. Integer vitae justo eget magna fermentum. Pharetra magna ac placerat vestibulum lectus mauris. Dictum at tempor commodo ullamcorper. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Vestibulum rhoncus est pellentesque elit ullamcorper. Maecenas sed enim ut sem viverra aliquet eget. Integer vitae justo eget magna fermentum iaculis eu.

Ultricies mi eget mauris pharetra et. Aenean vel elit scelerisque mauris. Quis blandit turpis cursus in hac habitasse platea dictumst. Sem viverra aliquet eget sit. Quis enim lobortis scelerisque fermentum. Tristique senectus et netus et malesuada fames ac turpis. Facilisis volutpat est velit egestas dui id ornare arcu. Condimentum mattis pellentesque id nibh. Interdum posuere lorem ipsum dolor sit amet. Commodo odio aenean sed adipiscing diam donec. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Dignissim cras tincidunt lobortis feugiat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nibh cras pulvinar mattis nunc sed blandit libero. Bibendum ut tristique et egestas quis. Sem fringilla ut morbi tincidunt augue interdum. In hendrerit gravida rutrum quisque non tellus.`, date: "01/07/2024"},
{title: "Título de noticia 2", image: "https://seeklogo.com/images/A/asterix-druide-logo-5492D7644D-seeklogo.com.png", content: `Lorem ipsum dolor sit amet consectetur adipiscing elit mi aliquam metus, habitasse diam donec pellentesque ultricies orci facilisis lectus neque, vehicula sociosqu odio magna lobortis penatibus faucibus suscipit dictum. Luctus sodales nullam lectus interdum urna quis euismod risus mi tempus, condimentum hac parturient aptent sociis sociosqu dictumst conubia. Rhoncus mollis leo vestibulum facilisi cras inceptos eu cursus, vivamus platea sagittis praesent curabitur libero luctus ornare molestie, justo proin phasellus malesuada netus quisque felis. Suscipit dictumst mattis pharetra interdum nec blandit mauris, faucibus hac sociosqu ornare congue tellus eleifend ultricies, velit dui in cum eu sollicitudin.

Habitant blandit lobortis massa iaculis rhoncus quam, facilisis vel sociosqu tempor pharetra, nunc fames quis velit euismod. Leo ornare metus senectus feugiat placerat sagittis condimentum, dignissim dapibus cubilia fusce ullamcorper pharetra iaculis libero, augue ac ridiculus urna egestas sodales. Aenean eu cum sociis est ligula vulputate, euismod purus malesuada cubilia commodo fermentum fusce, elementum leo pulvinar dictum penatibus. Luctus ad non vel metus convallis diam pretium, velit hac a lacinia sollicitudin donec massa, netus tempor penatibus habitant sed placerat.`, date: "01/07/2024"}];


  constructor(){
    this.articulos = [...this.articulosIniciales];
  }
  ngOnInit() {
    this.cargarArticulos();
  }

  cargarArticulos(){
    debugger;
    let html = "";
    this.articulos.forEach((articulo: Iarticulo) => {
      html += `<article class="articulo">
                  <h3 class="tituloArticulo">${articulo.title}</h3>
                  <p class="fecha">Fecha de publicación: ${articulo.date}</p>
                  <img class="imagen" src="${articulo.image}" alt="${articulo.title}"/>
                  <p>${articulo.content}</p>
                </article>`
    });
    console.log(html);
    return html;
  }

}
