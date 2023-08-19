export class Animal{
  _id!: String;
  nome: String;
  raca: String;
  peso: number;

  constructor(nome: string, raca: string, peso: number){
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;
  }
}
