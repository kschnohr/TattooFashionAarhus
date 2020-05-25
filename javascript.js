
/*modal box with multiple triggers*/

var triggerJohn = document.querySelectorAll(".john_gallery_pics");
var containerJohn = document.querySelector(".modal_gallery_container_john");
var triggerMarie = document.querySelectorAll(".marie_gallery_pics");
var containerMarie = document.querySelector(".modal_gallery_container_marie");
var triggerLuna = document.querySelectorAll(".luna_gallery_pics");
var containerLuna = document.querySelector(".modal_gallery_container_luna");


var closeModal = document.querySelector(".close");
var focusJohn = document.querySelector(".john_gallery_focus");
var focusMarie = document.querySelector(".marie_gallery_focus");
var focusLuna = document.querySelector(".luna_gallery_focus");


function toggleActiveJohn (){
    for(i = 0; i < triggerJohn.length; i++) {
        triggerJohn[i].addEventListener("click", function(){ 
            console.log("trigger clicked")
            containerJohn.classList.toggle("modal_active");
           focusJohn.src=event.target.src;
        })
    };
  }  
  function toggleActiveMarie (){
    for(i = 0; i < triggerMarie.length; i++) {
        triggerMarie[i].addEventListener("click", function(){ 
            console.log("trigger clicked")
            containerMarie.classList.toggle("modal_active");
           focusMarie.src=event.target.src;
        })
    };
  }  
  function toggleActiveLuna (){
    for(i = 0; i < triggerLuna.length; i++) {
        triggerLuna[i].addEventListener("click", function(){ 
            console.log("trigger clicked")
            containerLuna.classList.toggle("modal_active");
           focusLuna.src=event.target.src;
        })
    };
  }  
    closeModal.addEventListener("click", function (){
        containerJohn.classList.remove("modal_active")
        containerMarie.classList.remove("modal_active")
        containerLuna.classList.remove("modal_active")
        console.log("close modal")
    });

    containerJohn.addEventListener("click", function(){
        containerJohn.classList.remove("modal_active")
    })

    
    containerMarie.addEventListener("click", function(){
        containerMarie.classList.remove("modal_active")
    })

    
    containerLuna.addEventListener("click", function(){
        containerLuna.classList.remove("modal_active")
    })

toggleActiveJohn();
toggleActiveMarie();
toggleActiveLuna();
/*Background on menu when scrolling*/

var menu = document.querySelector(".menu_bar");


window.addEventListener("scroll", function(){
    menu.classList.add("menu_scrolled");
    backgroundOff();

});

function backgroundOff (){
    console.log(window.pageYOffset);
    if (window.pageYOffset <= 390) {
        menu.classList.remove("menu_scrolled");
        }
}



var burger = document.querySelector(".burger_menu");
var activeMenu = document.querySelector(".menu_content");
var closeMenu = document.querySelector(".close_menu");



burger.addEventListener("click", function(){
    console.log("da burger is clicked");
    activeMenu.classList.toggle("menu_active")
});

closeMenu.addEventListener("click", function(){
    activeMenu.classList.toggle("menu_active");
});


/*slide menu*//*

var burger = document.querySelector(".burger_menu");
var activeMenu = document.querySelector(".menu_content");
var closeMenu = document.querySelector(".close_menu");


burger.addEventListener("click", function(){
    console.log("da burger is clicked");
    activeMenu.style.opacity ="1";
});



closeMenu.addEventListener("click", function(){
    activeMenu.style.opacity ="0";
});








*/




/*    var num = 1;
    var next = document.querySelector(".next");
    var prev = document.querySelector(".prev"); 
    var currentSlide = focus[num].src;

    next.addEventListener('click', galleryNext);
    prev.addEventListener('click', galleryPrevious);
function showSlide (num){
    if (currentSlide = 1){
         
    }
}
    function galleryNext(){
        console.log("next is pressed")
        num = num + 1;
        if (num == 10){
                num = 1;
            }
        };
    

function galleryPrevious(){
    console.log("prev is pressed");
    num = num-1;
    
    if (num == 0){
        num = 3;
    }
    };



galleryNext();
galleryPrevious();
showSlide(num);
}; 




næste og forrige slides


function showSlide (){
    
}
    function galleryNext(){
        console.log("next is pressed")
        num = num + 1;
        if (num == 10){
                num = 1;
            }
        };
    

function galleryPrevious(){
    console.log("prev is pressed");
    num = num-1;
    
    if (num == 0){
        num = 3;
    }
    };


function showSlide (){
    currentSlide + 1
}

galleryNext();
galleryPrevious();
showSlide();
};

toggleActive();

closeModal.addEventListener("click", function (){
    container.classList.remove("modal_active")
});







slideshow baseret på array


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function prevSlides(n) {
    showSlides(slideIndex -= n);
  }


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var trigger = document.getElementsByClassName("trigger");

  if (n >trigger.length) {
      slideIndex = 1
    } 

  if (n < 1) {
      slideIndex = trigger.length
    }
  for (i = 0; i < trigger.length; i++) {
      trigger[i].style.display = "none"; 
  }

  trigger[slideIndex-1].style.display = "block"; 
  
};



*/
