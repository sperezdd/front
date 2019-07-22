

var traductor = (function(){
    const IDIOMAS= {
        IT: {
            'hola': 'ciao',
            'adios': 'addio',
        },
        EN: {
            'hola': 'hello',
            'adios': 'bye bye',
        },
        FR: {
            'hola': 'bonjour',
            'adios': 'aurevoir',
        }
    }
    function traducir(texto, idioma){
        return IDIOMAS[idioma.toUpperCase()][texto]
    }

    return{
        traducir: traducir,
        translate: traducir,     
    }
})()

console.log('hola en ingles: ' + traductor.traducir("hola", 'en'))
console.log('adios en frances: ' + traductor.translate("adios", 'fr'))
console.log('adios en italiano: ' + traductor.traducir("adios", 'it'))


