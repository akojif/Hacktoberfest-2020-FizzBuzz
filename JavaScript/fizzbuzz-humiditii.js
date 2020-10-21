const modulo = (num) => {
    let x = 0
    for (  x; x <= 50; x++) {
        if ( x % 3 ==0 && x % 5 == 0) {
            console.log(x + ' fizzbuzz');
        }else if (x%5 == 0) {
            console.log(x+' buzz')
        }else if(x % 3 == 0){
            console.log(x+ ' fizz');
        }
         
    }
}