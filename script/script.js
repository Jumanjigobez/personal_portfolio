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

	},40);
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
					height: 100%;
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
					height: 100%;
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

//Retrieve of Projects from local Data Json
var url = "data.json",
	project_container = document.querySelector("#projects .part_2 .container"),
	loading_screen = document.querySelector("#projects .part_2 .loading_screen");

fetch(url).then(res => res.json())
.then(data => {
	
	data.forEach((project)=>{
		project_container.innerHTML += `
		<div class="p_cards">
			<div class="p_image">
				<img src="${project.screenshot}" width="100%" height="100%" alt="${project.name} image">
			</div>
			<div class="info">
				<h4>${project.title}</h4>
				<p>${project.info}</p>
				<a href="${project.link}" target="_blank" title="${project.title}"><button class="btn">View Live <i class="fa fa-globe"></i></button></a>
			</div>
		</div>
		`

	})
});

// Handling filter options on my projects

var filter_buttons = document.querySelectorAll(".filter_bar ul li");

const handleFilter = (elem,x) =>{

	//Making filter type be color green when clicked
	filter_buttons.forEach((i)=>{
		if(i==elem){
			i.classList.add("active")
		}else{
			i.classList.remove("active")
		}
	});

	loading_screen.style.display = 'flex';
	
	fetch(url).then(res => res.json())
	.then(data => {
		
		project_container.innerHTML = '';
		loading_screen.style.display = 'flex';
		let filter_array = data.filter( d => d.type == x);

		filter_array.forEach((project)=>{
			loading_screen.style.display = 'none';
			project_container.innerHTML += `
			<div class="p_cards">
				<div class="p_image">
					<img src="${project.screenshot}" width="100%" height="100%" alt="${project.name} image">
				</div>
				<div class="info">
					<h4>${project.title}</h4>
					<p>${project.info}</p>
					<a href="${project.link}" target="_blank" title="${project.title}"><button class="btn">View Live <i class="fa fa-globe"></i></button></a>
				</div>
			</div>
			`

		})
});

}

