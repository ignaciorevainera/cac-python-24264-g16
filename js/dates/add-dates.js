const form = document.getElementById("form");
const submitButton = document.getElementById("submit");
const inputReservedBy = document.getElementById("reserved_by");

submitButton.addEventListener("click", (e) => {
	const errorMessage = document.querySelector(".error-message");

	if (inputReservedBy.value !== "") {
		errorMessage.classList.add("hidden");

		const appointmentData = {
			reserved_by: document.getElementById("reserved_by").value,
			service: document.getElementById("service").value,
		};

		console.log(appointmentData);

		fetchData(
			"http://localhost:5000/appointments/create/",
			"POST",
			() => {
				form.reset();
				window.location.href = "dates.html";
			},
			appointmentData
		);
	} else {
		e.preventDefault();

		errorMessage.classList.remove("hidden");
	}
});
