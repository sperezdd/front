import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {

  @Input() textoArriba = '';
  @Input() textoAbajo = '';
  @Input() imagenUrl = 'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg';
  @Input() color = '';
  @Input() isFav = false;

  constructor(  ) { }

  ngOnInit() {
  }


}
