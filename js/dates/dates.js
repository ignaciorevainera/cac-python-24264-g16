fetchData("http://localhost:5000/appointments/", "GET", (data) => {
	const container = document.querySelector(".container-appointments");

	data.map((appointment) => {
		const cardAppointment = document.createElement("div");
		cardAppointment.classList.add("card-appointment");
		cardAppointment.innerHTML = `
            <div class="card-appointment-body">
                <span class="card-appointment-name"> Cliente:
                    ${appointment.reserved_by}</span
                >
                <span class="card-appointment-service">
                    <i class="bx bxs-wrench"></i>
                    ${appointment.service}</span
                >
            </div>
            <div class="card-appointment-date">
                <time datetime=""
                    >${appointment.date}</time
                >
                <span>
                    <i class="bx bxs-time"></i>
                </span>
            </div>
        `;
		container.appendChild(cardAppointment);
	});
});
