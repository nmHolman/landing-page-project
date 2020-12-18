/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sectionList = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(sections) {
    const nav = document.getElementById('navbar__list');
    const frag = document.createDocumentFragment();

    for (i = 0; i < sectionList.length; i++) {
        const classAtt = document.createAttribute('class');
        classAtt.value = 'menu__link';
        let newItem = document.createElement('li');
        
        newItem.setAttributeNode(classAtt);
        newItem.innerText = sectionList[i].getAttribute('data-nav');

        frag.appendChild(newItem);
    }

    nav.appendChild(frag);
};

// Add class 'active' to section when near top of viewport
function activeSection(sections) {
    let navItem = document.querySelectorAll('li');
    
    for (i = 0; i < sectionList.length; i++) {
        let sectTop = sectionList[i].getBoundingClientRect().top;
        let sectBot = sectionList[i].getBoundingClientRect().bottom;        

        if (sectTop <= 200 && sectBot > 200) {
            navItem[i].classList.add('active');
        } else {
            navItem[i].classList.remove('active');
        }
    }
};

document.addEventListener('scroll', (sectionList)=> {
    activeSection(sectionList);
});


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNav(sectionList);

// Scroll to section on link click

// Set sections as active


