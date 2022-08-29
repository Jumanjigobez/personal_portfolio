//A Function to get elements id
elem = (x) =>{
	return document.getElementById(x);
}

//For Loading page
var preloader = elem("preloader");
var counter = elem("counter");
var text = elem("text");

loader = () =>{
	let count = setInterval(function(){
		var c = parseInt($(".counter").text());
        $(".counter").text((++c).toString());
        

		if(c == 100){
			clearInterval(count);
			counter.classList.add("hide");
			$(text).fadeIn(1000);

            $(text).fadeOut(2000);

            preloader.classList.add("active");
            //Get Visitor's name
			var visitor = document.querySelectorAll("#visitor");

			var name = prompt("What name shall I call you?", "My Guest");

			if (name === "") {
				for (var i = 0; i < visitor.length; i++) {
					visitor[i].innerText="My Guest";
				}
			}else if (name) {
				for (var i = 0; i < visitor.length; i++) {
					visitor[i].innerText=name;
				}
			}else {
				for (var i = 0; i < visitor.length; i++) {
					visitor[i].innerText="My Guest";
				}
			}
		}

	},50);
}
loader();


//Sticky menu part
var header = elem("header");

window.addEventListener("scroll",function(){

	if(this.scrollY > 20){
	    header.classList.add("sticky");
	}else{
	    header.classList.remove("sticky");
	}

});

//auto typing texts
var typed = new Typed(".typing", {

       strings: ["Software Engineer", "Frontend Developer", "Freelancer", "Youtuber"],
       
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


//for skills animation
var skill = document.querySelectorAll("#skill");

window.addEventListener("scroll",function(){

	if(this.scrollY >= 1800){
		for (var i = 0; i < skill.length; i++) {
			skill[i].style.display = "block";
		}
	    
	}else{
	    for (var i = 0; i < skill.length; i++) {
			skill[i].style.display = "none";
		}
	   
	}

});

//for more skills
var more_btn = elem("more_btn");
var more_card = elem("more_card");

more_btn.addEventListener("click", function(){
	more_card.style.display = "block";
});


//for menu buttons
var menu_btn = elem("menu_btn");
var styleElem = document.head.appendChild(document.createElement("style"));

openMenu = () =>{
	menu_btn.innerHTML = `<p onclick="closeMenu();"><i class="fa fa-times"></i></p>`;

	styleElem.innerHTML = `
			@media (max-width: 375px){
				#menu{
					display: block;
					width: 100%;
					height: 100vh;
					position: fixed;
					top: 10%;
					left: 0;
					transition: all 0.5s linear;
					text-align: center;
					background-color: #121212;
					z-index: 20000;
				}
			}
					`;
}

closeMenu = () =>{
	menu_btn.innerHTML = `<p onclick="openMenu();"><i class="fa fa-bars"></i></p>`;

	styleElem.innerHTML = `
			@media (max-width: 375px){
				#menu{
					display: none;
					width: 100%;
					height: 100vh;
					position: fixed;
					top: 10%;
					left: 0;
					transition: all 0.5s linear;
					text-align: center;
					background-color: #121212;
					z-index: 20000;
				}
			}
					`;
}

//for move to top button and the sidebar icons
var top_btn = elem("top");
var sidebar = elem("sidebar")
window.addEventListener("scroll", function(){
	if (this.scrollY > 20) {
		top_btn.style.display = "block";
		sidebar.style.display = "block";
	}else{
		top_btn.style.display = "none";
		sidebar.style.display = "none";
	}
});