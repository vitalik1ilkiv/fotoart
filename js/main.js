$(window).scroll(function(){
    if($(window).scrollTop() > 220){
        $('.portfolio__button').addClass('active-link');
    } else{
        $('.portfolio__button').removeClass('active-link');
    }
 
});

$(window).scroll(function(){
    if($(window).scrollTop() > 220){
        $('.portfolio__button-comunication').addClass('active-link_comunication');
    } else{
        $('.portfolio__button-comunication').removeClass('active-link_comunication');
    }
 
});

$(".forma__orientation-row").on("click", ".forma__orientation-row-item", function(){
	$(".forma__orientation-row .forma__orientation-row-item").removeClass("active");
   $(this).toggleClass("active");

});


function readMore() {
	console.log('click');
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");
	var dots2 = document.getElementById("dots2");
	var more2 = document.getElementById("more2");
	var dots3 = document.getElementById("dots3");
	var more3 = document.getElementById("more3");
	var dots4 = document.getElementById("dots4");
	var more4 = document.getElementById("more4");

	if(dots.style.display === "none" && dots2.style.display  === "none" && dots3.style.display  === "none" && dots4.style.display  === "none"){
		dots.style.display = "inline";
		dots2.style.display = "inline";
		dots3.style.display = "inline";
		dots4.style.display = "inline";
		dots.style.transition = "all 2s ease 0s";
		dots2.style.transition = "all 2s ease 0s";
		dots3.style.transition = "all 2s ease 0s";
		dots4.style.transition = "all 2s ease 0s";
		btn.innerHTML = "Дивитися більше";
		more.style.display = "none";
		more2.style.display = "none";
		more3.style.display = "none";
		more4.style.display = "none";
	} else {
		dots.style.display = "none";
		dots2.style.display = "none";
		dots3.style.display = "none";
		dots4.style.display = "none";
		btn.innerHTML = "Приховати";
		more.style.display = "inline";
		more2.style.display = "inline";
		more3.style.display = "inline";
		more4.style.display = "inline";

	}
};

$(".link-scroll").on("click","a", function (event) {
	console.log('scroll');
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();



            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);


});


let tab = function(){
	let tabNav = document.querySelectorAll('.tabs-nav__item'),
		 tabContent = document.querySelectorAll('.tab'),
		 tabName;
	tabNav.forEach(item=>{
		console.log(tabNav);
		item.addEventListener('click', selectTabNav);
	});

	function selectTabNav(){
		tabNav.forEach(item=> {
			item.classList.remove('is-active');
		});
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
	}

	function selectTabContent(tabName){
		tabContent.forEach(item =>{
			item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
		})
	}
};

tab();


$(document).ready(function() {
	$('.portfolio__btn-comunication').click(function(event){
		$('.portfolio__btn-comunication,.nav-comunication,.portfolio__btn-comunication-text,.portfolio__btn-comunication-act-non,.portfolio__btn-comunication-act,.portfolio__btn-comunication-img').toggleClass('comunication-active');
	});
});

$(".select___style")
.change(function(){
	
	var n = document.querySelector(".select___style").options.selectedIndex;
	var val = document.querySelector(".select___style").options[n].value;
	if(val === "2"){
		$( ".option__size_one" )
  		.change(function () {
	   	var str =  document.querySelector(".price");
	   	var n = document.querySelector(".option__size_one").options.selectedIndex;
	   	var val = document.querySelector(".option__size_one").options[n].value;
	   	var valNamber = Number(val);
			var priceArt = valNamber + 20;
			str.textContent = priceArt;
  		})
		.change();

		$(".forma__orientation-row-item_one")
		.click(function () {
			var str =  document.querySelector(".price");
			str.textContent = "";
		})

		$( ".option__size_two" )
  		.change(function () {
	   	var str =  document.querySelector(".price");
	   	var n = document.querySelector(".option__size_two").options.selectedIndex;
	   	var val = document.querySelector(".option__size_two").options[n].value;
	  		var valNamber = Number(val);
			var priceArt = valNamber + 20;
			str.textContent = priceArt;
  		})
		.change();

		$(".forma__orientation-row-item_two")
			.click(function () {
			var str =  document.querySelector(".price");
			str.textContent = "";
		})

		$( ".option__size_three" )
  		.change(function () {
	   	var str =  document.querySelector(".price");
	   	var n = document.querySelector(".option__size_three").options.selectedIndex;
	   	var val = document.querySelector(".option__size_three").options[n].value;
	  		var valNamber = Number(val);
			var priceArt = valNamber + 20;
			str.textContent = priceArt;
  		})
		.change();

		$(".forma__orientation-row-item_three")
			.click(function () {
			var str =  document.querySelector(".price");
			str.textContent = "";
		})
		
	} else if(val === "1")
	{
		$( ".option__size_one" )
  			.change(function () {
	   	var str =  document.querySelector(".price");
	   	var n = document.querySelector(".option__size_one").options.selectedIndex;
	   	var val = document.querySelector(".option__size_one").options[n].value;
	   	str.textContent = val;
  		})
		.change();

		$( ".option__size_two" )
  			.change(function () {
	   		var str =  document.querySelector(".price");
	   		var n = document.querySelector(".option__size_two").options.selectedIndex;
	   		var val = document.querySelector(".option__size_two").options[n].value;
	  			str.textContent = val;
  			})
			.change();

		$( ".option__size_three" )
  			.change(function () {
	   		var str =  document.querySelector(".price");
	   		var n = document.querySelector(".option__size_three").options.selectedIndex;
	   		var val = document.querySelector(".option__size_three").options[n].value;
	  			str.textContent = val;
  			})
			.change();


		$(".forma__orientation-row-item_one")
			.click(function () {
			var str =  document.querySelector(".price");
			str.textContent = "";
		})
		$(".forma__orientation-row-item_two")
			.click(function () {
			var str =  document.querySelector(".price");
			str.textContent = "";
		})
		$(".forma__orientation-row-item_three")
			.click(function () {
			var str =  document.querySelector(".price");
			str.textContent = "";
		})
	}
})


	function myFunctionOne() {
  		document.getElementById("opt-size1").selected = "true";
	}

	function myFunctionTwo() {
  		document.getElementById("opt-size2").selected = "true";
	}

	function myFunctionThree() {
  		document.getElementById("opt-size3").selected = "true";
	}



