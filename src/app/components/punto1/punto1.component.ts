import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  noticia!:Noticia;
  noticias!:Array<Noticia>;
  indice!:number;

  constructor() { 

    this.noticia = new Noticia();
    this.indice = 0;
    this.noticias = new Array<Noticia>();
    this.noticias = [
      {titulo: "Netflix anunció un aumento de la tarifa en Argentina", noticia:"Netflix anuncia un aumento en sus tarifas a partir de mañana para nuevos suscriptores y en las próximas semanas para miembros. “Estamos actualizando los precios ofreciendo diferentes opciones para que los miembros puedan elegir un plan que se ajuste a su presupuesto”, explicaron desde la plataforma de streaming, a través de un comunicado. De esta manera, el plan básico de 1 pantalla queda en $429; el plan estándar de 2 pantallas y HD, en $799, y el plan premium de 4 pantallas y UHD, en $1199.", img:"netflix.jpg"},
      {titulo: "Rusia defiende con delfines entrenados una de sus bases navales en el Mar Negro", noticia: "Rusia buscó un nuevo aliado desde el comienzo de la guerra en Ucrania para defender su flota en la base naval de Sebastopol, en el extremo sur de la siempre disputada península de Crimea. No instaló ni nuevos satélites, misiles o barcos. El Kremlin desplegó dos corrales de delfines entrenados.", img:"delfines.jpg"},
      {titulo: "Estudiantes de la Técnica de Palpalá arreglan computadoras gratis", noticia: "La división de la especialidad de Técnico en Informática Profesional de la Escuela Técnica de Palpalá lleva adelante un taller abierto a la población en general con el objetivo de adquirir experiencia en la reparación y además brindar un servicio.", img:"computadora.png"}
    ];
    this.iniciar();
  }

  ngOnInit(): void {
  }

  iniciar(){
    if(this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
  }

  siguiente(){
    this.indice = this.indice + 1;
    if(this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
    else{
      if(this.indice == this.noticias.length){
        this.indice = 0;
        this.noticia = this.noticias[this.indice];
      }
    }
  }

  anterior(){
    this.indice = this.indice - 1;
    if(this.indice < this.noticias.length){
      if(this.indice == -1){
        this.indice = this.noticias.length;
      }
        this.noticia = this.noticias[this.indice];
    }
  }
}
