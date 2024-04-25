import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../Entidad/Registro';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(private http: HttpClient) { }

	url = 'http://localhost:8020/Registros';

	listarRegistros(){
		return this.http.get<Registro[]>(this.url + "/listar")
	}

	listarRegistrosCifrados(){
		return this.http.get<Registro[]>(this.url + "/listarCifrados")
	}

	guardarRegistros(usuario: Registro){
		return this.http.post<String>(this.url + "/guardar", usuario)
	}

	buscarRegistroId(id: number){
		return this.http.get<Registro>(`${this.url}/buscarPorId/${id}`,{})
	}

	buscarRegistroUsuario(usuario: String){
		return this.http.get<Registro>(`${this.url}/buscarPorUsuario/${usuario}`, {})
	}

}
