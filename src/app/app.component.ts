import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  endereco = {
    logradouro: 'Rua K',
    numero: 121,
    bairro: 'Vila J',
    cidade: 'Itu',
  }

  valorDoDolar = 5.05;
  data = new Date();
  inflacao = 0.03;
  valorDecimal = 0.55431;
  nome = 'José da Silva';
}
