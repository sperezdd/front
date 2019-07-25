// Callbacks
// console.log(1)
// setTimeout(() => {
//   console.log(2)
// }, 0)
// console.log(3)

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
        // return generos;
        // let genero = elegirGenero(generos);
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
  
  function getPeliculasDeGenero(genero) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);
  
    xhr.addEventListener('readystatechange', () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        // console.log(xhr.responseText['-Lh0Z-ubcY_-5LvquB7H'])
        const datos = JSON.parse(xhr.responseText);
        console.log(datos)
      }
    })
  
    xhr.send();
  }
  
  function elegirGenero(generos) {
    let genero = prompt(`elige un genero de los siguientes:
    ${generos}`);
    return genero;
  }
  
  getGenerosPeliculas((generos) => {
    let genero = elegirGenero(generos);
    console.log(genero)
    getPeliculasDeGenero(genero);
    
  });

  getGenerosPeliculas((generos) => {
    //obtener todas las pelicuilas de todos los generos
  });

  //getGenerosPeliculas((generos) => {
    //console.log(`Hay ${generos.length} generos`);
    //obtener todas las pelicuilas de todos los generos
  //});
  // console.log(generos)
  
 // cb(generos)
  

 // --- PROMESAS ---
