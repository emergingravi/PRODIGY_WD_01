function iconClicking(){
    var data = document.getElementById("nav");
    if(data.className === "navigator"){
        data.className += " responsive";
    }
    else{
        data.className = "navigator";
    }
}
