var intervalId;
function scrollScreen(section) {
    if (section.getBoundingClientRect().top <= 0) {
        clearInterval(intervalId);
    }
    window.scrollBy(0, 10);
}

var educationLink = document.querySelectorAll('.education-link');

for (var i of educationLink) {
    i.addEventListener('click', function (event) {
        event.preventDefault();
        intervalId = setInterval(scrollScreen, 5, document.getElementById('education'));
    });
}

var experienceLink = document.querySelectorAll('.experience-link');

for (var i of experienceLink) {
    i.addEventListener('click', function (event) {
        event.preventDefault();
        intervalId = setInterval(scrollScreen, 5, document.getElementById('experience'));
    });
}

var aboutLink = document.querySelectorAll('.about-link');

for (var i of aboutLink) {
    i.addEventListener('click', function (event) {
        event.preventDefault();
        intervalId = setInterval(scrollScreen, 5, document.getElementById('about-section'));
    });
}

var portfolioLink = document.querySelectorAll('.portfolio-link');

for (var i of portfolioLink) {
    i.addEventListener('click', function (event) {
        event.preventDefault();
        intervalId = setInterval(scrollScreen, 5, document.getElementById('portfolio'));
    });
}

var contactLink = document.querySelectorAll('.contact-link');

for (var i of contactLink) {
    i.addEventListener('click', function (event) {
        event.preventDefault();
        intervalId = setInterval(scrollScreen, 5, document.getElementById('contact'));
    });
}


// skill bars :

var skillIndicators = document.querySelectorAll('#Skills #skill-items .skill-indicators div');
console.log(skillIndicators);

var skillContainer = document.querySelector('#skill-items');

window.addEventListener('scroll', checkScroll);


function intialiseBars() {
    for (let bar of skillIndicators) {
        bar.style.padding = 0 + '%';
    }
}
intialiseBars();
var flag = false;
function fillBars() {
    for (let bar of skillIndicators) {
        let targetWidth = bar.offsetWidth;
        let currentWidth = 0;
        let intervalId = setInterval(function () {
            if (currentWidth >= targetWidth) {
                clearInterval(intervalId);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + 'px';
        }, 5);
    }
}

function checkScroll() {
    if (!flag && window.innerHeight > skillContainer.getBoundingClientRect().top) {
        fillBars();
        flag = true;
    }
    else if (window.innerHeight < skillContainer.getBoundingClientRect().top) {
        flag = false;
        intialiseBars();
    }
}
