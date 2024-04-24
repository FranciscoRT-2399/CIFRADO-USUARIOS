import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServidorService } from '../../Servidor/servidor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Registro } from '../../Entidad/Registro';

@Component({
  selector: 'app-guardar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guardar.component.html',
  styleUrl: './guardar.component.css'
})
export class GuardarComponent{

	constructor(private router: Router, private service: ServidorService){}

	user: Registro = new Registro();

	guardar(){
		this.service.guardarRegistros(this.user).subscribe( data => {
			Swal.fire({
				icon: 'success',
				title: 'Registro guardado'
			})
			this.router.navigate(['listar'])			
		})
	}

	cancelar(){
		Swal.fire({
			icon: 'error',
			title: 'Cancelado'
		})
		this.router.navigate([''])
	}


}
