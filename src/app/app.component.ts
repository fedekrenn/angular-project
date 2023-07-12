import { Component } from '@angular/core';

type Producto = {
  nombre: string;
  costo: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  listaProductos: Producto[] = [
    { nombre: 'iPhone 12', costo: 1000 },
    { nombre: 'PS5', costo: 500 },
    { nombre: 'MacBook Pro', costo: 2000 },
    { nombre: 'Xbox Series X', costo: 500 },
  ];

  mostrarLista: boolean = true;

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}
