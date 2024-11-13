// navscript.js
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('nav').classList.toggle('open');
});