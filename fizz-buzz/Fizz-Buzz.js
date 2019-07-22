function fizzBuzz(){
    var numero = prompt('Intruduzca un numero: ')

    if(numero%3 == 0 && numero%5 == 0){
        return(numero + ': Fizz-Buzz')
    }else if(numero%3 == 0){
        return(numero + ': Fizz')
    }else if(numero%5 == 0){
        return(numero + ': Buzz')
    }
    else{
        return(numero)
    }
}

console.log(fizzBuzz())
