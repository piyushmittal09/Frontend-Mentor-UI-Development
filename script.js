

	gsap.to(".image-container", {
		
		width: "100%",
		ease: Expo.easeInOut,
		duration: 3,
		stagger: 3
	})
	
	gsap.to(".text h1", {
		
		ease: Expo.easeInOut,
		duration:3,
		stagger: 3,
		top: 0,
		
	})
	
	gsap.to(".text h1", {
		
		ease: Expo.easeInOut,
		delay: 3,
		stagger: 3,
		top: "-100%",
	})
	