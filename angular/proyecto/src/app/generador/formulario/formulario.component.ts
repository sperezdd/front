import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Meme } from '../meme';
import { MemeServiceService } from '../meme-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  memes: Meme[];
  obj = {
    prop: '',
    value: ''
  };

  @Output() enviarObj = new EventEmitter<object>();

  constructor(private memeService: MemeServiceService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.memes = this.memeService.getMemes();
    this.form = this.formBuilder.group({
      // username: new FormControl('sandra',  [Validators.required, this.esUnStark]),
      textoarriba: this.formBuilder.control('', Validators.required),
      textoabajo: this.formBuilder.control('', Validators.required),
      imagenUrl: this.formBuilder.control('', Validators.required),
      color: this.formBuilder.control('black', Validators.required)
    });
  }

  enviarTodo(event) {
    this.obj.prop = event.target.name;
    this.obj.value = event.target.value;
    this.enviarObj.emit(this.obj);
  }
  enviarCheckBox(event) {
    this.obj.prop =  event.target.name;
    this.obj.value = event.target.checked;
    this.enviarObj.emit(this.obj);
  }
  guardarMeme(textoArriba: string, textoAbajo: string, url: string, color: string, isFav: boolean) {
    const meme = new Meme('', textoArriba, textoAbajo, url, color, isFav);
    this.memeService.addMeme(meme);
    console.log(this.form);
  }



}
