const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav= document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');

// Dark Mode Styles
function darkMode() {
   nav.style.backgroundColor = 'rbg( 0 0 0 / 50%)';
   textBox.style.backgroundColor = 'rbg(225 225 225 / 50)';
   toggleIcon.children[0].textContent = 'Dark Mode';
   toggleIcon.children[1].classList.remove('fa-sun');
   toggleIcon.children[1].classList.add('fa-moon');
}

// Light Mode Styles
function lightMode() {
   nav.style.backgroundColor = 'rbg(225 225 225 / 50%)';
   textBox.style.backgroundColor = 'rbg(0 0 0 / 50%)';
   toggleIcon.children[0].textContent = 'Light Mode';
   toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
}

// Switch Theme Dynamically 
function switchTheme(event) {
 if (event.target.checked){
    document.documentElement.setAttribute('data-theme','dark');
    darkMode();
 } else{
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
 }
}


// Event Listener 
toggleSwitch.addEventListener('change', switchTheme);
