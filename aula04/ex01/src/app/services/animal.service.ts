import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: "root"
})

export class AnimalService{
  constructor(private http: HttpClient){}

  public getAnimais(): Observable<Animal[]>{
    return this.http.get<Animal[]>("http://localhost:8050/listar-animais")
  }

  public adicionarAnimal(animal: Animal): Observable<string>{
    return this.http.post<string>("http://localhost:8050/adicionar-animal", animal)
  }
}
