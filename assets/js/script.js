// document.write("Hello")


// Sticky navbar 
window.onscroll =function () {myFunction()};

var navbar = document.getElementById ("navbar");
var sticky = navbar.offsetTop;

function myFunction () {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }

function {
        $('[data-toggle="tooltip"]').tooltip();
    
        $('#quienesomos').click(function(){
            alert("Somos la mejor empresa de viajes")
        });
    
        $('#destacados').click(function(){
            alert("Comparte en los mejores lugares de Chile")
        });
        
        $('#contactos').click(function(){
            alert("Que esperas para ser parte de nosotros?")
        });
    }