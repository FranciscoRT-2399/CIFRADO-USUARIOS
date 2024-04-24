import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CIFRADO-USUARIOS';

	constructor(private router: Router){}

	registrar(){
		this.router.navigate(['guardar'])
	}

	listar(){
		this.router.navigate(['listar'])
	}

	listarCifrado(){
		this.router.navigate(['listarCifrado'])
	}

	buscarId(){
		this.router.navigate(['buscarId'])
	}

	buscarUsuario(){
		this.router.navigate(['buscarUsuario'])
	}
}
