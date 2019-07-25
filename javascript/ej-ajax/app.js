function getGenerosPeliculas(cb) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/generos.json');

    xhr.addEventListener('readystatechange', () => {
      console.log(xhr.status)
      if (xhr.status === 200 && xhr.readyState === 4) {
        let resp = JSON.parse(xhr.responseText);
        console.log(resp);
        let generos = getArrayFromObject(resp);
        cb(generos);
        rellenarSelect(generos)
        // return generos;
        elegirGenero();
        
        // getPeliculasDeGenero(genero);
      }
    })
    xhr.send();
  }

  function getArrayFromObject(obj){
    const valores = [];
    for (let key in obj){
      let val = obj[key];
      valores.push(val);
    }
    return valores;
  }
function elegirGenero() {
    let selector = document.getElementById("generos");
    selector.addEventListener('change',
        function(){
            var selectedOption  = this.options[selector.selectedIndex];
            getPeliculasDeGenero(selectedOption.text);
        });
}

function getPeliculasDeGenero(genero) {
    let lista = document.getElementById("lista"); 

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);

    xhr.addEventListener('readystatechange', () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const datos = JSON.parse(xhr.responseText);

        let peliculas = getArrayFromObject(datos)
        console.log(peliculas)
        lista.innerHTML=""
        for (let i =0 ; i < peliculas.length; i++){
            lista.append(peliculas[i])
        }

      }
    })
  
    xhr.send();
}

function rellenarSelect(generos){
    let selector = document.getElementById("generos");
    for(let i=0;i<generos.length;i++){ 
        selector.options[i] = new Option(generos[i]);
        console.log(generos[i]);
     }
}

getGenerosPeliculas((generos) => {
    let genero = elegirGenero(generos);
    console.log(genero)
    getPeliculasDeGenero(genero);
  });


