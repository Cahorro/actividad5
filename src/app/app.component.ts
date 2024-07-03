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
  arrayArticulos: Iarticulo[] = [{title: "Título de noticia 1", image: "https://p1.storage.canalblog.com/12/87/695862/95805936.png", content: `Lorem fistrum ahorarr de la pradera condemor apetecan me cago en tus muelas ese que llega a gramenawer está la cosa muy malar sexuarl de la pradera. Llevame al sircoo se calle ustée mamaar papaar papaar está la cosa muy malar llevame al sircoo. Está la cosa muy malar a peich está la cosa muy malar ese que llega a peich diodeno. Pecador se calle ustée papaar papaar mamaar a peich te va a hasé pupitaa mamaar. Tiene musho peligro condemor diodenoo sexuarl. Al ataquerl ese pedazo de fistro a wan fistro. No puedor tiene musho peligro a peich pupita condemor qué dise usteer amatomaa.

No te digo trigo por no llamarte Rodrigor no puedor llevame al sircoo ahorarr. Diodenoo condemor llevame al sircoo ese pedazo de se calle ustée tiene musho peligro diodeno diodenoo pecador pecador por la gloria de mi madre. Fistro quietooor ese que llega me cago en tus muelas no te digo trigo por no llamarte Rodrigor hasta luego Lucas pecador por la gloria de mi madre diodenoo a gramenawer. Ahorarr condemor apetecan fistro apetecan de la pradera a peich llevame al sircoo benemeritaar. Tiene musho peligro tiene musho peligro torpedo pecador ese pedazo de llevame al sircoo. Diodenoo ese hombree ese que llega mamaar te voy a borrar el cerito. Ahorarr jarl diodeno ese pedazo de de la pradera pecador la caidita. Ese que llega quietooor fistro te va a hasé pupitaa ese hombree jarl se calle ustée está la cosa muy malar benemeritaar se calle ustée no puedor. No te digo trigo por no llamarte Rodrigor quietooor condemor te voy a borrar el cerito ahorarr por la gloria de mi madre a peich.`, date: "01/07/2024"},
    {title: "Título de noticia 2", image: "https://seeklogo.com/images/A/asterix-druide-logo-5492D7644D-seeklogo.com.png", content: `Lorem fistrum papaar papaar quietooor a gramenawer condemor. Ese hombree hasta luego Lucas caballo blanco caballo negroorl mamaar apetecan diodenoo apetecan torpedo no puedor no te digo trigo por no llamarte Rodrigor. Diodeno te voy a borrar el cerito amatomaa sexuarl tiene musho peligro torpedo diodenoo. Me cago en tus muelas apetecan papaar papaar a peich a wan a wan quietooor a peich al ataquerl ahorarr. A gramenawer ahorarr llevame al sircoo a gramenawer mamaar a gramenawer torpedo a gramenawer ahorarr no puedor sexuarl. Mamaar diodeno benemeritaar caballo blanco caballo negroorl la caidita tiene musho peligro sexuarl jarl. De la pradera apetecan te va a hasé pupitaa te voy a borrar el cerito a peich. Fistro no te digo trigo por no llamarte Rodrigor apetecan a peich te voy a borrar el cerito va usté muy cargadoo.

Te va a hasé pupitaa benemeritaar apetecan mamaar se calle ustée va usté muy cargadoo me cago en tus muelas no te digo trigo por no llamarte Rodrigor. Condemor va usté muy cargadoo va usté muy cargadoo no te digo trigo por no llamarte Rodrigor pupita benemeritaar papaar papaar ese hombree se calle ustée. Me cago en tus muelas hasta luego Lucas te va a hasé pupitaa a wan diodeno benemeritaar a gramenawer a gramenawer. Benemeritaar llevame al sircoo va usté muy cargadoo a wan amatomaa. Llevame al sircoo condemor qué dise usteer no te digo trigo por no llamarte Rodrigor jarl diodeno. Caballo blanco caballo negroorl fistro jarl no te digo trigo por no llamarte Rodrigor me cago en tus muelas ese pedazo de a wan diodenoo la caidita.`, date: "01/07/2024"}];

  handlePublicacion($event: any) {
    debugger;
    this.arrayArticulos.push($event);
  }
}
