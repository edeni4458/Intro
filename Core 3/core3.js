document.addEventListener("DOMContentLoaded", () => {


// function over(element){
    
    
// }
// function out(element){
    
// }

// onmouseover="over(this)" onmouseout="out(this)"
function changeImage(){
    // let images = document.querySelectorAll(".img1");
    let images = document.getElementsByClassName("img1");
    console.log(images);

    for(let image of images){
        nextImage(image);
        prevImage(image);
    }
    
    
}

changeImage()



function nextImage(image) {
    console.log("go to the next image");
    let imageSrc = image.getAttribute("src");
    console.log(imageSrc);
    // var giF = document.querySelector
    //     ("#jSp");
    image.src="imageSrc"
}  

function prevImage() {
// var giF = document.querySelector
//     ("#jSp");
    image.src="./Images/spidertocat.png"
}


// function nextImage() {
//     console.log("go to the next image");
//     var giF = document.querySelector
//         ("#jSp");
//     jSp.src="./Images/spidertocat.png"
// }

// function prevImage() {
// var giF = document.querySelector
//     ("#jSp");
// jSp.src="./Images/Terracottocat_Single.png"
// }


})