
const dropDown = document.querySelector(".adj");
const dropDown2 = document.querySelector(".adj-2");
const subMenuWrap2 = document.querySelector(".sub-menu-wrap2")
const subMenuWrap = document.querySelector(".sub-menu-wrap");
const dropIcon = document.querySelector(".icon");
const dropIcon2 = document.querySelector(".icon2");

	dropDown.addEventListener("click", () => {
		subMenuWrap.classList.remove("hide");
		subMenuWrap2.classList.add("hide");
		dropIcon.classList.add("drop-icon");
	});
	dropDown2.addEventListener("click", () => {
		subMenuWrap2.classList.remove("hide");
		subMenuWrap.classList.add("hide");
		dropIcon2.classList.add("drop-icon2");
	});
	