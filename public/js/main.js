// --------------------------------------------------------------------------
// Exercice 1
// -----------------------------------------------------------------------------

let egale = document.body.getElementsByClassName('fa-equals')
let input = document.getElementsByTagName('input')
let response1 = document.getElementById('response1')
let reponse

egale[0].addEventListener('click', function () {
    reponse = parseInt(input[0].value) + parseInt(input[1].value)
    response1.innerHTML = reponse

})


// --------------------------------------------------------------------------
// Exercice 2
// -----------------------------------------------------------------------------




let response2 = document.getElementById('response2')
let select = document.getElementsByTagName('select')


egale[1].addEventListener('click', function () {

    switch (select[0].value) {
        case "+":
            reponse = parseInt(input[2].value) + parseInt(input[3].value)
            response2.innerHTML = reponse
            console.log(response2)

            break;
        case "-":
            reponse = parseInt(input[2].value) - parseInt(input[3].value)
            response2.innerHTML = reponse

            break;

        case "*":
            reponse = parseInt(input[2].value) * parseInt(input[3].value)
            response2.innerHTML = reponse

            break;

        case "/":
            reponse = parseInt(input[2].value) / parseInt(input[3].value)
            response2.innerHTML = reponse

            break;


        default:
            break;
    }







})


// --------------------------------------------------------------------------
// Exercice 3
// -----------------------------------------------------------------------------


let response3 = document.getElementById('response3')
let operation;
let operateur = document.body.querySelectorAll('.fas')

for (let i = 5; i < 9; i++) {
    operateur[i].addEventListener('click', function () {
        operation = operateur[i].classList[1]
        


        
    })

}



egale[2].addEventListener('click', function () {

    switch (operation) {
        case "fa-plus":
            reponse = parseInt(input[4].value) + parseInt(input[5].value)
            response3.innerHTML = reponse
            console.log(response2)

            break;
        case "fa-minus":
            reponse = parseInt(input[4].value) - parseInt(input[5].value)
            response3.innerHTML = reponse

            break;

        case "fa-times":
            reponse = parseInt(input[4].value) * parseInt(input[5].value)
            response3.innerHTML = reponse

            break;

        case "fa-divide":
            reponse = parseInt(input[4].value) / parseInt(input[5].value)
            response3.innerHTML = reponse

            break;


        default:
            break;
    }







})




// --------------------------------------------------------------------------
// Exercice 4
// -----------------------------------------------------------------------------









let button = document.getElementsByTagName('button')
let input1
let input2
let response4 = document.getElementById('response4')

input[6].addEventListener('focus' ,function(){
    console.log("input1")
    input1 = true
    input2 = false
})



input[7].addEventListener('focus' ,function(){
    console.log("input2")
    input2 = true
    input1= false
})

for (let i = 8; i < 18; i++) {
    button[i].addEventListener('click',function(){
        console.log(button[i].innerHTML)

        if(input1){
            input[6].value += parseInt(button[i].innerHTML)

        }else if(input2){
            input[7].value += parseInt(button[i].innerHTML)

        }
        

    })
    
}
console.log(input[6])

console.log(operateur)
for (let i = 11; i < 15; i++) {
    operateur[i].addEventListener('click', function () {
        operation = operateur[i].classList[1]
        


        
    })

}


egale[3].addEventListener('click', function () {

    switch (operation) {
        case "fa-plus":
            reponse = parseInt(input[6].value) + parseInt(input[7].value)
            response4.innerHTML = reponse
            console.log(response2)

            break;
        case "fa-minus":
            reponse = parseInt(input[6].value) - parseInt(input[7].value)
            response4.innerHTML = reponse

            break;

        case "fa-times":
            reponse = parseInt(input[6].value) * parseInt(input[7].value)
            response4.innerHTML = reponse

            break;

        case "fa-divide":
            reponse = parseInt(input[6].value) / parseInt(input[7].value)
            response4.innerHTML = reponse

            break;


        default:
            break;
    }







})