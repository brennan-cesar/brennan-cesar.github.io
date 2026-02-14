function theme() {
    if(localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
    }
}

function toggleTheme() {
    var toggle = document.getElementById('toggle-theme');
    if(localStorage.getItem('theme') === 'dark') {
        toggle.checked = true;
    }
    toggle.addEventListener('change', function() {
        var dark = this.checked;
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', dark);
    });
}