document.getElementById('flame').addEventListener('click', flameToggle);

function flameToggle() {
    this.classList.toggle('lit');
    this.classList.toggle('out');
}

