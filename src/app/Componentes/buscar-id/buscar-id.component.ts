import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServidorService } from '../../Servidor/servidor.service';
import { Registro } from '../../Entidad/Registro';

@Component({
  selector: 'app-buscar-id',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscar-id.component.html',
  styleUrl: './buscar-id.component.css',
})
export class BuscarIdComponent {
  constructor(private service: ServidorService) {}

  user: Registro = new Registro();
  userBuscado: Registro = new Registro();

  buscarPorId(id: number) {
    if (id == null) {
      this.userBuscado = { id: 0, usuario: '', password: '' };
    } else {
      this.service.buscarRegistroId(id).subscribe((data) => {
        this.userBuscado = data;
      });
    }
  }
}
