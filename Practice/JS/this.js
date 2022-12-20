// function removeWhat(element) {
//     if(element.innerText == 'Oh yea!') {
//         element.innerText = 'Does it work?'
//     }   else {
//             element.innerText = 'Oh yea!'
//         }
//     }


//     // How to use this w/o this, namely querery Selector



// function hideText(element){
//     element.remove();
// }

function letsGoSuper(element) {
    var sForm = document.querySelector('#base')
    var sImg = document.querySelector("#super")
    
    sForm.innerText = 'Super Saiyan'

    sImg.src="./Images.Goku/goku_super1.jpg"
    sImg.alt="Super Sayin Goku"
    element.remove();
}

// function removeBut(){
// }