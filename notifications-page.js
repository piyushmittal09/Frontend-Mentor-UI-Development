	
	
	const box1 = document.querySelector(".box1");
	const box2 = document.querySelector(".box2");
	const box3 = document.querySelector(".box3");
	const span1 = document.querySelector(".dot1");
	const span2 = document.querySelector(".dot2");
	const span3 = document.querySelector(".dot3");
	const notifyBox = document.querySelector(".head-p");
	
	function unread() {
		
		box1.classList.add("hide");
		box2.classList.add("hide");
		box3.classList.add("hide");
		span1.classList.add("gayab");
		span2.classList.add("gayab");
		span3.classList.add("gayab");
		notifyBox.textContent = "0";
	
	}