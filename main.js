document.addEventListener("DOMContentLoaded", function(){

/* ================= POPUP IMAGE ================= */

const popup = document.getElementById("popupImage");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll(".card img");

images.forEach(function(img){

img.addEventListener("click", function(){

popup.style.display = "flex";
popupImg.src = this.src;

});

});

if(closeBtn){
closeBtn.addEventListener("click", function(){
popup.style.display = "none";
});
}


/* ================= IMAGE PREVIEW ================= */

const preview = document.getElementById("imgPreview");
const previewImg = document.getElementById("previewImg");

images.forEach(function(img){

img.addEventListener("mouseenter", function(){

if(preview && previewImg){
preview.style.display = "block";
previewImg.src = this.src;
}

});

img.addEventListener("mouseleave", function(){

if(preview){
preview.style.display = "none";
}

});

});

});
document.addEventListener("DOMContentLoaded", function(){

const popup = document.getElementById("popupImage");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close");

const images = document.querySelectorAll(".card img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

/* buka popup */

images.forEach((img,index)=>{

img.addEventListener("click", function(){

popup.style.display="flex";
popupImg.src=this.src;
currentIndex=index;

});

});

/* close */

closeBtn.addEventListener("click", function(){

popup.style.display="none";

});

/* klik background close */

popup.addEventListener("click", function(e){

if(e.target === popup){
popup.style.display="none";
}

});

/* next */

nextBtn.addEventListener("click", function(){

currentIndex++;

if(currentIndex >= images.length){
currentIndex=0;
}

popupImg.src=images[currentIndex].src;

});

/* prev */

prevBtn.addEventListener("click", function(){

currentIndex--;

if(currentIndex < 0){
currentIndex=images.length-1;
}

popupImg.src=images[currentIndex].src;

});

});
let index = 0;
let images = document.querySelectorAll(".card img");

function openImage(src){

document.getElementById("popup").style.display = "flex";
document.getElementById("popup-img").src = src;

}

function closeImage(){

document.getElementById("popup").style.display = "none";

}
let index = 0;
let images = document.querySelectorAll(".card img");

function openImage(src){

document.getElementById("popup").style.display = "flex";
document.getElementById("popup-img").src = src;

}

function closeImage(){

document.getElementById("popup").style.display = "none";

}
let images = [
"img/Website 2.jpeg",
"img/Website 3.jpeg",
"img/Website 4.jpeg",
"img/Website 5.jpeg",
];

let index = 0;

function openImage(i){

index = i;

document.getElementById("popup").style.display = "flex";
document.getElementById("popup-img").src = images[index];

}

function closeImage(){

document.getElementById("popup").style.display = "none";

}

function slide(n){

index += n;

if(index < 0){
index = images.length - 1;
}

if(index >= images.length){
index = 0;
}

document.getElementById("popup-img").src = images[index];

}
let images = [
"img/Website 2.jpg",
"img/Website 3.jpg",
"img/Website 4.jpg",
"img/Website 5.jpg"
];

let index = 0;

function openImage(i){

index = i;

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");

popup.style.display = "flex";
popupImg.src = images[index];

}

function closeImage(){

document.getElementById("popup").style.display = "none";

}

function slide(n){

index += n;

if(index < 0){
index = images.length - 1;
}

if(index >= images.length){
index = 0;
}

document.getElementById("popup-img").src = images[index];

}

