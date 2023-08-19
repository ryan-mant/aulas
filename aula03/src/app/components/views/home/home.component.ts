import { AnimalService } from 'src/app/services/animais.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private animaisService: AnimalService) { }
  public animais!: Animal[];
  ngOnInit(): void {
    this.animaisService.buscarAnimais().subscribe((response) => {
      this.animais = response
      console.log(response)
    })
  }
}
