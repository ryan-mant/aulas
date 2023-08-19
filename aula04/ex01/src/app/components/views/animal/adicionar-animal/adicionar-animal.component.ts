import { AnimalService } from './../../../../../../../../aula03/src/app/services/animais.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent {
  public nome!: string;
  public raca!: string;
  public peso!: number;

  constructor(private animalService: AnimalService, private router: Router){

  }

  public adicionarAnimal(){
    let animal = new Animal(this.nome, this.raca, this.peso);
    this.animalService.adicionarAnimal().subscribe((response: any)=>{
      console.log(response)
    })
  }

}
