//responsive nav-bar using bar icon and close icon
function myFunction(){
    var x = document.getElementById("myTopNav");
    if (x.className === "headerClass"){
      x.className += " responsive";
    } else {
      x.className = "headerClass";
    }
}