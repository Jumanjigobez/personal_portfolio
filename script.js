$(document).ready(function(){

    //loading part

    function counter() {
      var count = setInterval(function(){
        var c = parseInt($(".counter").text());
        $(".counter").text((++c).toString());
        

        if(c == 100){
          clearInterval(count);
          $(".counter").addClass("hide");

          $(".text").fadeIn(1000);

          $(".text").fadeOut(2000);

          $(".preloader").addClass("active");

          var name = prompt("What is your name my Guest? ", "My Guest");

          var visitor = document.getElementById('visitor');
          var visitor2 = document.getElementById('visitor2');
          var visitor3 = document.getElementById('visitor3');
          if (name!=null) {
            visitor.innerHTML=name;
            visitor2.innerHTML=name;
            visitor3.innerHTML = name;
          }else if (name==null){
            alert("Please provide your name :-(");
          }else{
            alert("Error you are not a human");
          }
        }


      },60)
    }

    counter()


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



var mytop = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mytop.style.display = "block";
  } else {
    mytop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//For social arrow appear amd dissappear:
var dissappearArrow = document.getElementById("socialarrowDissappear");
var appearArrow = document.getElementById("socialarrowAppear");


function socialarrowDissappear(){
  document.getElementById("socialarrowDissappear").style ="display:none;";
  document.getElementById("socialarrowAppear").style = "display: inline-block;";
}

function socialarrowAppear(){

  document.getElementById("socialarrowDissappear").style ="display:inline-block;";

  document.getElementById("socialarrowAppear").style = "display: none;";
}
