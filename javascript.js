/*Link som jeg har brugt til inspiration: https://www.tutorialspoint.com/how-to-create-a-tabbed-image-gallery-with-css-and-javascript */
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


