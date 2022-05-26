

function generator(){
    let odd_one = parseInt(document.getElementById("odd_one").value)
    let odd_two = parseInt(document.getElementById("odd_two").value) 
    let even_one = parseInt(document.getElementById("even_one").value)
    let even_two = parseInt(document.getElementById("even_two").value)
    let prime_one = parseInt(document.getElementById("prime_one").value)
    let prime_two = parseInt(document.getElementById("prime_two").value)
    
    let odd_collector = 'The odd numbers are '
    let even_collector = 'The even numbers are '
    let prime_collector = 'The prime numbers are '




// FOR THE ODD 
    for (let index = odd_one; index <= odd_two; index++) {
       
        if (index % 2 == 1){
            odd_collector = odd_collector + index.toString() + ', ' 
        }
        
    }
    
    if (odd_collector.length > 20){
        document.getElementById("odd_output").innerHTML = `${odd_collector.slice(0,-2)}.`
    }
    else{
        document.getElementById("odd_output").innerHTML = "There are no odd numbers in this range."

    }

    
// FOR THE EVEN
    for (let i = even_one; i <= even_two; i++) {
        
       
        if (i % 2 == 0){
            even_collector = even_collector + i.toString() + ', '
            
        }
        
    }

    document.getElementById("even_output").innerHTML = `${even_collector.slice(0,-2)}.`

//FOR THE PRIME
    for(let j = prime_one; j <= prime_two; j++){
        let determinant = 1
        for (let k = 2; k< j; k++){
            if(j % k == 0){
                determinant = 2
                break
            }
        }


        if (j > 1 && determinant == 1){
            prime_collector = prime_collector + j.toString() + ', '

        }


    }

    if (prime_collector.length > 22){
        document.getElementById("prime_output").innerHTML = `${prime_collector.slice(0,-2)}.`
    }
    else{
        document.getElementById("prime_output").innerHTML = "There are no prime numbers in this range."

    }








}
