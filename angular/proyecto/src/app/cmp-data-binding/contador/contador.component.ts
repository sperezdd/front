import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador: number = 0;
  constructor() { }

  ngOnInit() {
  }

  // toggleContador() {
  //   if (this.sumando) {
  //     this.contador++;
      
  //   } else {
  //     this.contador--;
  //   }
  // }

  SumarContador() {
    this.contador++;
  }

  RestarContador() {
    this.contador--;
  }
}
