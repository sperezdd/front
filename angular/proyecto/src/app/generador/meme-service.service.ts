import { Injectable } from '@angular/core';
import { Meme } from './meme';

@Injectable({
  providedIn: 'root'
})
export class MemeServiceService {

  memes: Meme[] = [];
  id = 0;

  constructor() {
  }

  addMeme(meme: Meme): void {
    this.id += 1;
    meme.id = this.id.toString();
    this.memes.push(meme);
  }

  getMemes(): Meme[] {
    return this.memes;

  }
  deleteMeme(id: string): void {
    this.memes = this.memes.filter(m => m.id !== id);
  }
}
