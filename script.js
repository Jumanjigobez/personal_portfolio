

var name = prompt("What is your name my Guest? ", "My Guest");
var visitor = document.getElementById('visitor');
var visitor2 = document.getElementById('visitor2');

if (name!=null) {
  visitor.innerHTML=name;
  visitor2.innerHTML=name;
}else if (name==null){
  alert("Please provide your name :-(");
}else{
  alert("Error you are not a human");
}


$(document).ready(function(){

    $(window).scroll(function(){

        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.main').addClass("sticky");
        }else{
            $('.main').removeClass("sticky");
        }
    }) 
    
    
    var typed = new Typed(".typing", {

       strings: ["Software  Engineer", "Software Designer", "Sofware  Developer", "Talented Youtuber", "Great Freelancer"],
       

        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    

    
    $("#morebtn").click(function(){
        $(".moreskills").slideDown(1000);
    });

    $("#viewbtn").click(function(){
        $(".skill2").fadeIn(1000);
    });

    


});