let theme = localStorage.getItem('theme');

if (theme == null || theme === 'dark'){
    //Set default style
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
}
else {
    document.documentElement.setAttribute('data-theme', 'light');
}