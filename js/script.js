const contenitore = document.querySelector(".container")
const casella = document.querySelector(".box")


for (let i = 1; i <= 100 ; i++) {

    let buzz = "Buzz" 
    let fizzBuzz = "FizzBuzz"
    let fizz = "Fizz"
    let numero = i

    
    
    if (i % 3 == 0 && i % 5 == 0 )
    //console.log (fizzBuzz)
    contenitore.innerHTML += `<div class="box red">${fizzBuzz}</div>`
    else if (i % 3 == 0)
    //console.log (fizz)
    contenitore.innerHTML += `<div class="box blue">${fizz}</div>`
    else if ( i % 5 == 0)
    //console.log (buzz)
    contenitore.innerHTML += `<div class="box gold">${buzz}</div>`
    else
    //console.log (i)
    contenitore.innerHTML += `<div class="box">${numero}</div>`
    
}
    
   

    
   
