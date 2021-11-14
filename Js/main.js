// Select All Slider items
let sliderItems = document.querySelectorAll('.slider-items')

// Select all Button
let dotBtn = document.querySelectorAll('.dot')
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')

var itemIndex = 0
function showSliders(n){
    for(let i = 0; i < sliderItems.length; i++){
        sliderItems[i].style.display = "none"
    }

    if(n > sliderItems.length - 1){itemIndex = 0}
    if(n < 0){itemIndex = sliderItems.length - 1}

    for(let j = 0; j < dotBtn.length; j++){
        dotBtn[j].className = dotBtn[j].className.replace("active-dot", "") 
    }
    sliderItems[itemIndex].style.display = "block"
    dotBtn[itemIndex].className += " active-dot"
}

// Auto Slider
let timer = setInterval(function(){
    return showSliders(itemIndex += 1)
}, 3000)

// onclick stop auto sliding
document.querySelector('.slider-section').addEventListener('click', function(e){
    clearInterval(timer)
})

// Active the first item slider
showSliders(itemIndex)

// Dot Button Onclick Event
for(let j = 0; j < dotBtn.length; j++){
    dotBtn[j].addEventListener('click', function(e){
        showSliders(itemIndex = j)
    })
}

// Prev Button Onclick Event
prevBtn.addEventListener('click', function(e){
    showSliders(itemIndex -= 1)
})

// Prev Button Onclick Event
nextBtn.addEventListener('click', function(e){
    showSliders(itemIndex += 1)
})