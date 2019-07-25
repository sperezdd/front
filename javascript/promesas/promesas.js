const axios = require('axios');


function getGeneros() {
    return axios.get('https://ejemplos-dc1c1.firebaseio.com/generos.json')
}

function getPeliculas(genero){ 
    return axios.get(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)
}

 getGeneros()
    .then((resp) => {
        const datos = resp.data;
        const generos = Object.values(datos);
        //console.log(generos);
        let genero = 'sci-fi';
        return getPeliculas(genero);
    })
    .then((resp) => {
        const peliculas = Object.values(resp.data);
        console.log(peliculas);
    });


    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        },2000)
    })
    .then((resp) => {
        console.log(resp);
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(2)        
            },1400); 
        })

    })
    .then((resp) => {
        console.log(resp)
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(3)        
            },1000); 
        })
    })
    .then((resp) => {
        console.log(resp)
    })

    
    function PromesaSiTePortasBienTeComproElJuguete (portadoBien){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(portadoBien){
                    console.log('me he portao bien');
                    resolve(true);
                } else {
                    console.log('no me he portao bien');
                    reject(false);
                }
                
            },1000);
        })
    }

    PromesaSiTePortasBienTeComproElJuguete(false)
        .then(resp => console.log('vamos a comprarte el juguete'))
        .catch(err => console.log('no hay juguete'));


    // function fn1() { 
 
    //     setTimeout(() => {
    //         console.log(1)
    //     },2000);
        
    // }
    
    // function fn2() { 
    //     setTimeout(() => {
    //         console.log(2)
    //     },1400);
    // }
    
    // function fn3() { 
    //     setTimeout(() => {
    //         console.log(3)
    //     },1000);
    // }
    
