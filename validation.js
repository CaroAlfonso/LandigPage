

document.addEventListener("DOMContentLoaded", () => {


const email = document.querySelector("#email")
const mensaje = document.querySelector("#mensaje")
const submit = document.querySelector("#submit")

const checkImput = () => {
	if (email.value !== "" && mensaje.value !== "") {
		submit.disabled = ""
}	else {
	submit.disabled = "disabled"
}
}

email.addEventListener("change", checkImput)
mensaje.addEventListener("change", checkImput)
})