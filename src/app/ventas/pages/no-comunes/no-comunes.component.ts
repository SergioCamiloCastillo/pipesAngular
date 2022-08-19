import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {
  //i18n select
  nombre: string = 'Susana';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Ana', 'Sergio'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    other: 'tenemos # clientes esperando',
  };
  cambiarCliente(): void {
    this.nombre = 'Christian';
    this.genero = 'femenino';
  }
  borrarCliente(): void {
    this.clientes.pop();
  }
  //keyValuePipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Bogota engativa',
  };

  //JSON Pipe
  heroes = [
    { nombre: 'Iron Man', vuela: true },
    { nombre: 'Aquaman', vuela: false },
  ];

  //AsyncPipe
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3000);
  });
}
