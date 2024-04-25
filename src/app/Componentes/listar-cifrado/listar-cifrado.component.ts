import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../Servidor/servidor.service';
import { Registro } from '../../Entidad/Registro';

@Component({
  selector: 'app-listar-cifrado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listar-cifrado.component.html',
  styleUrl: './listar-cifrado.component.css'
})
export class ListarCifradoComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	usuarios !: Registro[];
	user : Registro = new Registro();

	ngOnInit(): void {
		this.listar();
	}

	listar(){
		this.service.listarRegistrosCifrados().subscribe(data => {
			this.usuarios = data;
		})
	}

}
