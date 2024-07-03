document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("form");
	const password = document.getElementById("password");
	const confirmPassword = document.getElementById("confirmPassword");
	const errorMessage = document.getElementById("errorMessage");

	form.addEventListener("submit", (event) => {
		if (password.value !== confirmPassword.value) {
			event.preventDefault();
			errorMessage.classList.remove("hidden");
		} else {
			errorMessage.classList.add("hidden");
		}
	});
});
