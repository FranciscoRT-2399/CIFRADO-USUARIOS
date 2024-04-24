import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServidorService } from '../../Servidor/servidor.service';
import { Router } from '@angular/router';
import { Registro } from '../../Entidad/Registro';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css',
})
export class ListarComponent implements OnInit {
  constructor(private router: Router, private service: ServidorService) {}

  usuarios!: Registro[];
  user: Registro = new Registro();

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.listarRegistros().subscribe((data) => {
      this.usuarios = data;
    });
  }
}
