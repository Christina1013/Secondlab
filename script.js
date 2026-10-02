const changeButton = document.querySelector("#changeButton");

changeButton.addEventListener("click", () => {
	const hue = Math.floor(Math.random() * 360);
	document.body.style.backgroundColor = `hsl(${hue} 75% 85%)`;
});

window.addEventListener("keydown", () => {
	changeButton.animate(
		[
			{ transform: "translateY(0)" },
			{ transform: "translateY(-35px)" },
			{ transform: "translateY(0)" },
		],
		{ duration: 350, easing: "ease-out" },
	);
});
