function getGenerosPeliculas(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/generos.json');

    xhr.addEventListener('readystatechange', () =>{
        if(xhr.status === 200 && xhr.readyState === 4) {
            console.log(xhr.status)
            let resp = JSON.parse(xhr.responseText);
            console.log(resp)
        }
    })
    xhr.send()
}