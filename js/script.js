const contenitore = document.querySelector(".container")
const casella = document.querySelector(".box")


for (let i = 0; i <= 100 ; i++) {

    let buzz = "Buzz"
    let fizzBuzz = "FizzBuzz"
    let fizz = "Fizz"
    let numero = i

    contenitore.innerHTML += `<div class="box">${numero}</div>`
    
   

    if (i % 3 == 0 && i % 5 == 0)
    console.log (fizzBuzz)
    else if (i % 3 == 0)
    console.log (fizz)
    else if ( i % 5 == 0)
    console.log (buzz)
    else
    console.log (i)
    
}