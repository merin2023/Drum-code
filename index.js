var a = document.querySelectorAll(".drum");
for (i=0;i<a.length; i++)
{
    a[i].addEventListener("click",handleClick);
}
function handleClick(){
    
    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
    buttonAnime(buttonClicked);
}
    document.addEventListener("keydown",function(event){
        makeSound(event.key);
        buttonAnime(event.key);
    });
    function makeSound(key){
        switch(key) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "k":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "l":
                    var kick = new Audio('sounds/kick-bass.mp3');
                    kick.play();
                    break;
            default:
                break;
        }
    }
    function buttonAnime(currentKey){
        var animeButton = document.querySelector("." + currentKey);
        animeButton.classList.add("pressed");
        setTimeout(function() {
            animeButton.classList.remove("pressed")
        }, 200);
    }
