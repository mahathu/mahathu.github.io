/* light/dark mode */
function toggleTheme(){
    let currentTheme = localStorage.getItem('theme');
    let themeSwitchLink = document.getElementById('theme-switch-link');
    switch (currentTheme) {
        case 'dark':
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');
            themeSwitchLink.innerHTML = "dark mode";
            break;

        case 'light':
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
            themeSwitchLink.innerHTML = "light mode";
            break;

        default:
            console.log("Browser apparently does not support localStorage.");
    }
}

function navigateTo(target){
    //underline this button and remove from all others
    let allBtns = document.querySelectorAll('#nav-btns > li > button')
    for (let btn of allBtns){
        if (btn.innerHTML === target){
            btn.blur();
            btn.className = 'current';
            continue;
        }

        btn.className = '';
    }

    if (target !== DEFAULT_SITE_CONTENT){
        window.location.hash = target; //update URL
    } else {
        window.location.hash = '';
    }

    let otherContent = document.getElementsByClassName('pg-content');
    for (let c of otherContent){
        if (c.id === target){ //skip current element
            continue;
        }

        c.style.display='none';
    }

    let contentContainer = document.getElementById(target);
    contentContainer.style.display = 'block';
}

//this will run after the DOM tree has been loaded:
let currentTheme = localStorage.getItem('theme');
if(currentTheme === 'light'){
    let themeSwitchLink = document.getElementById('theme-switch-link');
    themeSwitchLink.innerHTML = "dark mode";
}

DEFAULT_SITE_CONTENT = 'about';
//navigate to the correct site:
siteContent = DEFAULT_SITE_CONTENT; //default value
if(window.location.hash){
    siteContent = window.location.hash.substring(1); 
}
navigateTo(siteContent);