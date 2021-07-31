.dropbtn {
    background-color: honeydew;
    color: indigo;
    padding: 15px;
    font-size: 20px;
    border: none;
    cursor: pointer;
}
.dropbtn:hover, .dropbtn:focus{
    background-color: lawngreen;
}
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: lightblue;
    min-width: 50px;
    box-shadow: lightcyan;
    z-index: 1;
}

.dropdown-content a{
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
} 
.dropdown-content a:hover {background-color: blue;}

.show {display: block;}