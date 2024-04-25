import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServidorService } from '../../Servidor/servidor.service';
import { Router } from '@angular/router';
import { Registro } from '../../Entidad/Registro';

@Component({
  selector: 'app-buscar-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscar-usuario.component.html',
  styleUrl: './buscar-usuario.component.css',
})
export class BuscarUsuarioComponent {
  constructor(private router: Router, private service: ServidorService) {}

  user: Registro = new Registro();
  userBuscado: Registro = new Registro();

  buscarPorUsuario(usuario: String) {
    if (usuario.trim() == '') {
      this.userBuscado = { id: 0, usuario: '', password: '' };
    } else {
      this.service.buscarRegistroUsuario(usuario).subscribe((data) => {
        this.userBuscado = data;
      });
    }
  }
	
}
