import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  mostrar: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
