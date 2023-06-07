	
	let form = document.querySelector("form");
	let card_1 = document.querySelector(".card1");
	let card_2 = document.querySelector(".card2");
	
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		card_1.classList.add("hide");
		card_2.classList.remove("hide");
	})