//micalculadora.suma(1,2)
//micalculadora.resta(1,2)
//micalculadora.multiplica(1,2)

//var micalculadora = 

var micalculadora = (function(){
    function suma(n1,n2){
        return n1+n2;
    }

    function resta(n1,n2){
        return n1-n2;
    }

    function multiplica(n1,n2){
        return n1*n2;
    }    
    
    function divide(n1,n2){
        return n1/n2;
    }

    console.log('Función autoejecutable');
    return {
        suma: suma,
        resta: resta,
        multiplica: multiplica,
        divide: divide,
    }
})()

console.log('suma: ' + micalculadora.suma(1,2))
console.log('resta: ' + micalculadora.resta(1,2))
console.log('multiplicacion: ' + micalculadora.multiplica(1,2))
console.log('division: ' + micalculadora.divide(1,2))

