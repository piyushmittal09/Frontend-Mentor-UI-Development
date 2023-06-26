	
	let countEl = document.querySelector("#count-el");
	let count = 0;
	let hasCompleted = false;
	let isAlive = true;
	let message = "";
	let messageEl = document.querySelector(".message-el");
	
	function increment() {
		count = count + 1;
		countEl.innerText = count;
	}
	
	function decrement() {
		count = count - 1;
		countEl.innerText = count;
	}
	
	function save() {
		
		if (count <= 6) {
			message = "You're out of the game!"
		} 
		else if (count === 7) {
			message = "You've completed the challenge!"
			hasCompleted = true
		}
		else {
			message = "You're out of the game!"
			isAlive = false
		}
		messageEl.textContent = message;
		console.log(count);
	}
	
	let adjustment = document.querySelector("h1").style;
	let adjustment2 = document.querySelector("h2").style;
	let banana1 = document.querySelector(".banana1").style;
	let banana2 = document.querySelector(".banana2").style;
	let banana3 = document.querySelector(".banana3").style;
	let banana4 = document.querySelector(".banana4").style;
	let banana5 = document.querySelector(".banana5").style;
	let banana6 = document.querySelector(".banana6").style;
	let banana7 = document.querySelector(".banana7").style;
	
	function newGame() {
	
		document.body.style.backgroundImage = "url('banana-background2.jpg')";
		adjustment.marginTop = "70px";
		adjustment.color = "yellowgreen";
		adjustment2.color = "yellowgreen";
		banana1.left = "200px";
		banana1.top = "0";
		banana2.top = "200px";
		banana2.left = "350px";
		banana4.top = "200px"
		banana5.top = "200px";
		banana6.top = "100px";
		banana7.bottom = "170px";
	}
	