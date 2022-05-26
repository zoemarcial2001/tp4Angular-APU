import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  palabras!:Array<String>;
  secuencia!:number;
  intentos!:number;
  palabra!:String;
  palabraDesc!:String;

  abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() { 
    this.palabras = new Array<String>();
    this.palabras = ["computadora", "compilador", "software", "typescript"];
    this.palabra="";
    this.palabraDesc="";
    this.iniciar();
  }

  ngOnInit(): void {
  }

  iniciar(){
    this.intentos= 5;
    this.secuencia = 0;
    this.palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraDesc= this.palabra;
  }

  reintentar(){
    this.iniciar();
  }

  intento(a:String){

    if(this.intentos > 0){
      this.intentos = this.intentos - 1;
      this.secuencia = this.secuencia + 1;

    }
  }
  
}
