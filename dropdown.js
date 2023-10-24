
const dropDown = document.querySelector(".adj");
const dropDown2 = document.querySelector(".adj-2");
const subMenuWrap2 = document.querySelector(".sub-menu-wrap2")
const subMenuWrap = document.querySelector(".sub-menu-wrap");
const dropIcon = document.querySelector(".icon");
const dropIcon2 = document.querySelector(".icon2");

	dropDown.addEventListener("click", () => {
		subMenuWrap.classList.toggle("hide");
		subMenuWrap2.classList.add("hide");
		dropIcon.classList.toggle("drop-icon");
	});


	dropDown2.addEventListener("click", () => {
		subMenuWrap2.classList.toggle("hide");
		subMenuWrap.classList.add("hide");
		dropIcon2.classList.toggle("drop-icon2");
	});
	