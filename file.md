<header class="top-container" id="header">
      <div class="row">
          <div class="col-2">
             <img src="#" alt="logo">
          </div>
          <div class="col-4">
            <nav class="main-nav">
              <a href="Home">Home</a>
              <div class="dropdown">
                <button onclick="myFunction()" class="dropbtn">dropdown</button>
                <div id="Dropdown" class="dropdown-content">
                  <div id="Dropdown" class="dropdown-content">
                    <a href="#">LINK</a>
                    <a href="#">LINK</a>
                    <a href="#">LINK</a>
                    <a href="#">LINK</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
      </div>
  </header>
  //dropdown buttons

function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
    window.onclick = function(event) {
        if(!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i< dropdowns.length; i++) {
                var (openDopdown.classList.remove('show')); [
                    openDopdown.classList.remove('show');
                ]
            }
        }
    }
}