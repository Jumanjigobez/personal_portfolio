//A Function to ease retrieval of DOM elements
elem = (x) => {
  return document.getElementById(x);
};

//For Loading page
var preloader = elem("preloader");
var counter = elem("counter");
var text = elem("text");

loader = () => {
  let count = setInterval(function () {
    var c = parseInt(counter.innerText);
    counter.innerText = `${(++c).toString()}`;

    if (c == 100) {
      clearInterval(count);
      counter.classList.add("hide");
      // $(text).fadeIn(1000);
      text.classList.add("fadeIn");
      // $(text).fadeOut(2000);
      text.classList.add("fadeOut");

      preloader.classList.add("active");
      //Get Visitor's name
      var visitor = document.querySelectorAll("#visitor");

      Swal.fire({
        title: "What name shall I call you?",
        input: "text",
        inputValue: "My Guest",
        allowOutsideClick: false,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "You need to write your Name!";
          }
        },
      }).then((result) => {
        if (result.isConfirmed) {
          var name = result.value;
          if (name === "") {
            for (var i = 0; i < visitor.length; i++) {
              visitor[i].innerText = "My Guest";
            }
          } else {
            for (var i = 0; i < visitor.length; i++) {
              visitor[i].innerText = name;
            }
          }
        } else {
          for (var i = 0; i < visitor.length; i++) {
            visitor[i].innerText = "My Guest";
          }
        }
      });
    }
  }, 40);
};
loader();

//Sticky menu part
var header = elem("header");

window.addEventListener("scroll", function () {
  if (this.scrollY > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

//auto typing texts
var typed = new Typed(".typing", {
  strings: [
    "Software Engineer",
    "Frontend Developer",
    "Technical Supporter",
    "Freelancer",
    "Youtuber",
  ],

  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

//for skills animation
var skill = document.querySelectorAll("#skill");

window.addEventListener("scroll", function () {
  if (this.scrollY >= 1800) {
    for (var i = 0; i < skill.length; i++) {
      skill[i].style.display = "block";
    }
  } else {
    for (var i = 0; i < skill.length; i++) {
      skill[i].style.display = "none";
    }
  }
});

//for more skills
var more_btn = elem("more_btn");
var more_card = elem("more_card");

more_btn.addEventListener("click", function () {
  more_card.style.display = "block";
});

//for menu buttons
var menu = document.querySelector("#menu");

const toggleMenu = (menu_btn) => {
  menu.classList.toggle("active");

  menu_btn.innerHTML =
    menu_btn.innerHTML == `<i class="fa fa-bars"></i>`
      ? (menu_btn.innerHTML = `<i class="fa fa-times"></i>`)
      : (menu_btn.innerHTML = `<i class="fa fa-bars"></i>`);
};

//for move to top button and the sidebar icons
var top_btn = elem("top");
var sidebar = elem("sidebar");
window.addEventListener("scroll", function () {
  if (this.scrollY > 20) {
    top_btn.style.display = "block";
    sidebar.style.display = "block";
  } else {
    top_btn.style.display = "none";
    sidebar.style.display = "none";
  }
});

//Retrieve of Projects from local Data Json
var url = "data.json",
  project_container = document.querySelector("#projects .part_2 .container"),
  loading_screen = document.querySelector("#projects .part_2 .loading_screen");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let sorted_array = data.sort((a, b) => b.id - a.id); //Sorting in Desc Order for Latest projects
    // console.log(sorted_array);
    sorted_array.forEach((project) => {
      project_container.innerHTML += `
		<div class="p_cards">
			<div class="p_image">
				<img src="${project.screenshot}" width="100%" height="100%" alt="${project.name} image">
			</div>
      <div class="info">
        <div class="text_part">
          <h4>${project.title}</h4>
          <p>${project.info}</p>
        </div>
      
        <div class="btn_part">
          <a href="${project.link}" target="_blank" title="${project.title}"><button class="btn">View Live <i class="fa fa-globe"></i></button></a>
        </div>
    </div>
		</div>
		`;
    });
  });

// Handling filter options on my projects

var filter_buttons = document.querySelectorAll(".filter_bar ul li");

const handleFilter = (elem, x) => {
  //Making filter type be color green when clicked
  filter_buttons.forEach((i) => {
    if (i == elem) {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  });

  project_container.innerHTML = "";
  loading_screen.style.display = "flex";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      project_container.innerHTML = "";
      loading_screen.style.display = "flex";
      let filter_array = data.filter((d) => d.type == x);

      let sorted_array = data.sort((a, b) => b.id - a.id); //Sorting in Desc Order for Latest projects

      if (filter_array.length > 0) {
        let filtered_sorted = filter_array.sort((a, b) => b.id - a.id);
        filtered_sorted.forEach((project) => {
          loading_screen.style.display = "none";
          project_container.innerHTML += `
				<div class="p_cards">
					<div class="p_image">
						<img src="${project.screenshot}" width="100%" height="100%" alt="${project.name} image">
					</div>
          <div class="info">
            <div class="text_part">
              <h4>${project.title}</h4>
              <p>${project.info}</p>
            </div>
						
            <div class="btn_part">
              <a href="${project.link}" target="_blank" title="${project.title}"><button class="btn">View Live <i class="fa fa-globe"></i></button></a>
            </div>
          </div>
         
				</div>
				`;
        });
      } else {
        sorted_array.forEach((project) => {
          loading_screen.style.display = "none";
          project_container.innerHTML += `
				<div class="p_cards">
					<div class="p_image">
						<img src="${project.screenshot}" width="100%" height="100%" alt="${project.name} image">
					</div>
          <div class="info">
            <div class="text_part">
              <h4>${project.title}</h4>
              <p>${project.info}</p>
            </div>
          
            <div class="btn_part">
              <a href="${project.link}" target="_blank" title="${project.title}"><button class="btn">View Live <i class="fa fa-globe"></i></button></a>
            </div>
        </div>
				</div>
				`;
        });
      }
    });
};

//Project Counter part
var count_all = document.querySelector("span.count_all"),
  count_landing = document.querySelector("span.count_landing"),
  count_api = document.querySelector("span.count_api"),
  count_personal = document.querySelector("span.count_personal"),
  count_formal = document.querySelector("span.count_formal"),
  options = document.querySelectorAll(".custom_select option");

const count_projects = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let all_projects = data.length,
        landing_projects = data.filter(
          (project) => project.type == "landing_page"
        ).length,
        api_projects = data.filter((project) => project.type == "api").length,
        personal_projects = data.filter(
          (project) => project.type == "personal_project"
        ).length,
        formal_projects = data.filter(
          (project) => project.type == "formal_project"
        ).length;

      // var counter = setInterval(() => {
      //   let c_all = parseInt(count_all.innerText),
      //     c_landing = parseInt(count_landing.innerText),
      //     c_api = parseInt(count_api.innerText),
      //     c_personal = parseInt(count_personal.innerText),
      //     c_formalg = parseInt(count_formal.innerText);
      // }, 40);

      count_all.innerText = `${all_projects}+`;
      count_landing.innerText = `${landing_projects}+`;
      count_api.innerText = `${api_projects}+`;
      count_personal.innerText = `${personal_projects}+`;
      count_formal.innerText = `${formal_projects}+`;

      options[0].textContent = `All (${all_projects}+)`;
      options[1].textContent = `Landing Pages (${landing_projects}+)`;
      options[2].textContent = `API's (${api_projects}+)`;
      options[3].textContent = `Personal Projects (${personal_projects}+)`;
      options[4].textContent = `Formal Projects (${formal_projects}+)`;
    });
};
count_projects();
