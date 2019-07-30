import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-routing',
  templateUrl: './cmp-routing.component.html',
  styleUrls: ['./cmp-routing.component.css']
})
export class CmpRoutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrar(event) {
    event.preventDefault();
    console.log(event.target.href);
  }
}
