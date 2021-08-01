//header

window.onscroll = function() { myFunction() };
var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction()
{
    if (window.pageYOffset >sticky) {
        header. classList.add("sticky");
    }
    else  {
        header.classList.remove("sticky");
    }
}


//dropdown buttons

function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
    window.onclick = function(event) {
        if(!event.target.matches('.dropbtn')) {
            var dropdown = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i< dropdown.length; i++) {
                var openDopdown = dropdowns[i]; 
                if (openDropdown.classList.contains('show')){
                    openDopdown.classList.remove('show');
                }
            }
        }
    }
}