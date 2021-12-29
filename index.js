const inputs = document.querySelectorAll("input");
const root = document.documentElement;

function handleUpdate () {
    const sizing = this.dataset.sizing || "";

    root.style.setProperty(`--${this.name}`, this.value + sizing);
}

inputs.forEach(input => input.addEventListener("input", handleUpdate));
