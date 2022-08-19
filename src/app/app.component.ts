import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Sergio camilo castillo';
  valor: number = 1000;
  objeto: object = {
    apellido: 'Castillo',
  };
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  mostrarNombre(): void {
    console.log('hola=>', this.nombre);
  }
}
