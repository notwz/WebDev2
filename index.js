function handleClick() {
    document.getElementsByTagName("body")[0].classList.toggle("lightMode");

    for ( var i = 0; i < document.querySelectorAll("a").length; i++){
        document.getElementsByTagName("a")[i].classList.toggle("lightMode");
    
    }
}


document.getElementById("mode").addEventListener("click", handleClick);

