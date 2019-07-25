function fn1() { 
    setTimeout(() => {
        console.log(1)
        Cb()
        //fn2();
    },2000);
    
}

function fn2() { 
    setTimeout(() => {
        console.log(2)
        fn3()
    },1400);
}

function fn3() { 
    setTimeout(() => {
        console.log(3)
    },1000);
}

fn1();