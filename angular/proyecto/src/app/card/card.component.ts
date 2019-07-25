import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  title = 'Title goes here';
  subtitle = 'Subtitle here';
  // tslint:disable-next-line: max-line-length
  text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
  textbutton1 = 'ACTION 1';
  textbutton2 = 'ACTION 2';
  constructor() { }

  ngOnInit() {
  }

}
