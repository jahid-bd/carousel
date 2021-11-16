// Select All Slider items
const sliderParent = document.querySelector('.slider-items')
const track = document.querySelectorAll('.slider-item')
const sliderItems = Array.from(track)
const slideWidth = sliderItems[0].getBoundingClientRect().width

// sliderItems[0].style.left = slideWidth * 0 + "px"
// sliderItems[1].style.left = slideWidth * 1 + "px"
// sliderItems[2].style.left = slideWidth * 2 + "px"

// Select all Button
const dotBtn = document.querySelectorAll('.dot')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')


sliderItems.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px"
})

var sliderIndex = 0

nextBtn.addEventListener('click', function(e){
    showSliders(sliderIndex += 1)
})

prevBtn.addEventListener('click', function(e){
    showSliders(sliderIndex -= 1)
})

function showSliders(n){
   if(n > sliderItems.length - 3){sliderIndex = 0}
   if(n < 0){sliderIndex = sliderItems.length - 1}

   dotBtn.forEach((dots, index) => {
        dots.className = dots.className.replace("active-dot", "") 
    })
    dotBtn[sliderIndex].className += " active-dot"

   sliderParent.style.transform = `translateX(-${sliderItems[sliderIndex].style.left})`

//    sliderItems[sliderIndex].style.transform = `translateX(+${sliderItems[sliderItems.length - 1].style.left})`

}

// // Dot Button Onclick Event
dotBtn.forEach((dots, index) => {
    dots.addEventListener('click', function(e){
        showSliders(sliderIndex = index)
    })
})