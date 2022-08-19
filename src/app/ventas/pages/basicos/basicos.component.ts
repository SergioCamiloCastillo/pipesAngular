import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  nombreLower: string = 'Sergio';
  nombreUpper: string = 'SERGIO';
  nombreCompleto: string = 'sErgIO CasTIlLo';

  fecha: Date = new Date();
}
