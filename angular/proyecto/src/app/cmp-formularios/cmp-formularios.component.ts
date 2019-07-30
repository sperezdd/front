import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
/*
Clases que se asignan a los input seghurn el punto en el que esten.
  pristine -> valor inicial
  dirty -> valor modificado
  untouched -> mp ha perdido el fco ninguna vez
  touched .-> el campo ha perdido el foco una vez
  invalid -> el campo es invalido
  valid -> el campo es valido

  formBuilder hace lo mismo que antes pero mas ordenado
*/

@Component({
  selector: 'app-cmp-formularios',
  templateUrl: './cmp-formularios.component.html',
  styleUrls: ['./cmp-formularios.component.css']
})
export class CmpFormulariosComponent implements OnInit {

  form: FormGroup;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      // username: new FormControl('sandra',  [Validators.required, this.esUnStark]),
      username: this.formBuilder.control('sandra',
        [Validators.required, this.esUnStark(['robb', 'arya', 'rickon', 'sansa', 'bran', 'tony'])]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    });
  }

  login() {
    console.log(this.form);
  }

  esUnStark(nombresValidos: Array<string>) {
    return (control: FormControl) => {
    // const nombresValidos = ['robb', 'arya', 'rickon', 'sansa', 'bran', 'tony'];
      if (nombresValidos.includes(control.value.toLowerCase())) {
        return null;
      }

      return {
        esUsStark: false
      };
    };
}

}
