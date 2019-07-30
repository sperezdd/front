import { Component, OnInit } from '@angular/core';
import { MemeServiceService } from '../meme-service.service';
import { Meme } from '../meme';

@Component({
  selector: 'app-lista-memes',
  templateUrl: './lista-memes.component.html',
  styleUrls: ['./lista-memes.component.css']
})
export class ListaMemesComponent implements OnInit {

  memes: Meme[] = [];
  constructor(private servicioMeme: MemeServiceService) { }

  ngOnInit() {
    this.memes = this.servicioMeme.getMemes();
  }
}
