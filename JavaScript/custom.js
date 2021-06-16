/*
**** 1 => Show / Hide Settings Bar
**** 2 => Change Site Colors
**** 3 => Change Background Image
**** 4 => Bullets
**** 5 => Adjust landing page Links
**** 6 => Adjust landing page Toggle Menu
**** 7 => Reset Settings Default
**** 8 => Skills
**** 9 => Gallery
**** 10 => ScrollToTop
*/

/*================( 1 )=======================*/
/*======== Show / Hide Settings Bar ==========*/
/* Start Side Settings */
// Adjust Gear
let myGear = document.querySelector(".gear"),
    mySettings = document.querySelector(".settings"),
    myWrapper = document.querySelector(".inner-wrapper");
myGear.onclick = function () {
    "use strict";
    mySettings.classList.toggle("open");
    myWrapper.classList.toggle("is-open-left");

};
//--- Hide Settings Bar When Press on Escape Key 
window.addEventListener("keydown", function (e) {
    "use strict";
    const settingsBox = document.querySelector(".settings");
    const wrapperBox = document.querySelector(".inner-wrapper");
    const index = settingsBox.className.indexOf("open");
    if (index !== -1 && e.which === 27) {
        settingsBox.classList.remove("open");
        wrapperBox.classList.remove("is-open-left");
    }
});

/*================( 2 )=======================*/

/*=========== Change Site Colors ============*/
// Check if there's local storage color option 
let mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
    //console.log("local storage is not empty");
    //console.log(localStorage.getItem("color-option"));
    document.documentElement.style.setProperty("--main-color", mainColor);
    //Remove class active from all colors list item
    document.querySelectorAll(".colors-list li").forEach(function (element) {
        "use strict";
        element.classList.remove("active");
        //Add Class Active on element with data-color === local storage item
        if (element.dataset.color === mainColor) {
            //Add class Active
            element.classList.add("active");
        }
    });
}
// Start Theme Color
let colorList = document.querySelectorAll(".colors-list li");
//Loop in all list items
colorList.forEach(function (list) {
    "use strict";
    //Click on all list item
    list.addEventListener("click",  function (e) {
        //Set color on Root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        //Set color on local storage 
        localStorage.setItem("color-option", e.target.dataset.color);
        //Remove class active
        e.target.parentElement.querySelectorAll(".active").forEach(function (element) {
            element.classList.remove("active");
        });
        //Add class active
        e.target.classList.add("active");
    });
});
/*================( 3 )=======================*/

/*======= Change Background Image ===========*/
//Random Background Option
let randomBackOption = true;
//to be able to control the Background interval
let backgroundInterval;
// Check if there's local storage Random Background option 
let backgroundLocalItem = localStorage.getItem("background-option");
//check local storage is not empty 
if (backgroundLocalItem !== null) {
    //console.log("local storage is not empty");
    //console.log(localStorage.getItem("background-option"));

     //Remove class active from all Span item
    document.querySelectorAll(".random-background span").forEach(function (element) {
        "use strict";
        element.classList.remove("active");
    });

    if (backgroundLocalItem === "true") {
        randomBackOption = true;
        document.querySelector(".random-background .yes").classList.add("active");
    } else {
        randomBackOption = false;
        document.querySelector(".random-background .no").classList.add("active");
    }
}
/* Start Random Background */
let randomBackground = document.querySelectorAll(".random-background span");
//Loop in all Sppan items
randomBackground.forEach(function (span) {
    "use strict";
    //Click on all Span item
    span.addEventListener("click", function (e) {
        
        //Remove class active
        e.target.parentElement.querySelectorAll(".active").forEach(function (element) {
            element.classList.remove("active");
        });
        //Add class active
        e.target.classList.add("active");
        if (e.target.dataset.background === "yes") {
            randomBackOption = true;
            randomImg();
            localStorage.setItem("background-option", true);
        } else {
            randomBackOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background-option", false);
        }
    });
});

/* Start Landing Page*/
// Select The Landing Page
let LandingPage = document.querySelector(".landing-page");
// Set Array Of Images
let  myImages = ["cam01.jpg", "cam02.jpg", "cam03.jpg", "cam04.jpg", "cam05.jpg"];
// using Function to Auto change the Image
function randomImg() {
    "use strict";
    if (randomBackOption === true) {
        backgroundInterval = setInterval(function () {
            //Get random number
            let myNumber = Math.floor(Math.random() * myImages.length);
            LandingPage.style.backgroundImage = 'url("Images/background/' + myImages[myNumber] + '")';
        }, 3000);
    }
}
randomImg();

/*-------------- Favorite Background --------------*/

let choosenImage = document.querySelectorAll(".settings .background-box img");
choosenImage.forEach(function (img) {
    "use strict";
    img.onclick = function (e) {
        
        LandingPage.style.backgroundImage = 'url("Images/background/' + e.target.dataset.image + '")';
        localStorage.setItem("background-image", e.target.dataset.image);
    };
});

let choosenImageLocalItem = localStorage.getItem("background-image");

if (choosenImageLocalItem !== null) {
    LandingPage.style.backgroundImage = 'url("Images/background/' + choosenImageLocalItem + '")';
}

/*-------------- Hide Background Option Box --------------*/

window.onresize = function () {
    "use strict";
    if (window.innerHeight < 605) {
        let favoriteImage = document.querySelector(".settings .background-box");
        favoriteImage.style.display = "none";
    } else {
        let favoriteImage = document.querySelector(".settings .background-box");
        favoriteImage.style.display = "block";
    }
};
if (window.innerHeight < 605) {
    let favoriteImage = document.querySelector(".settings .background-box");
    favoriteImage.style.display = "none";
} else {
    let favoriteImage = document.querySelector(".settings .background-box");
    favoriteImage.style.display = "block";
}

/*================( 4 )=======================*/

/*================ Bullets ==================*/
/* (Method 1)
 //Select all bullets
let myBullets = document.querySelectorAll(".nav-bullets .bullet");
myBullets.forEach( function (bullet) {
    bullet.addEventListener("click", function (e) {
        document.querySelector(e.target.dataset.section).scrollIntoView({behavior: "smooth"});
    });
});*/

/*  (Method 2) 

let myBullets = document.querySelectorAll(".nav-bullets .bullet");
 
for (const link of myBullets) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("data-section");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
} */
// (Method 3)
function scrollTo(element) {
    "use strict";
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
}
  
let myBullets = document.querySelectorAll(".nav-bullets .bullet");
myBullets.forEach(function (bullet) {
    "use strict";
    bullet.addEventListener("click", function (e) {
        scrollTo(document.querySelector(e.target.dataset.section));
    });
});


//console.log(myBullets);

// Show / Hide Bullets
let myBulletsContainer = document.querySelector(".nav-bullets");
let switchBullets = document.querySelectorAll(".bullets-option span");
let bulletLocalStorage = localStorage.getItem("bullets-option");

if (bulletLocalStorage !== null) {
    //Remove class active
    switchBullets.forEach(function (span) {
        
        "use strict";
        span.classList.remove("active");
    });

    if (bulletLocalStorage === "block") {
        myBulletsContainer.style.display = "block";
        document.querySelector(".bullets-option .yes").classList.add("active");
    } else {
        myBulletsContainer.style.display = "none";
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}

switchBullets.forEach(function (span) {
    "use strict";
    span.addEventListener("click", function (e) {
        
        if (e.target.dataset.display === "block") {
            myBulletsContainer.style.display = "block";
            localStorage.setItem("bullets-option", "block");
        } else {
            myBulletsContainer.style.display = "none";
            localStorage.setItem("bullets-option", "none");
        }

        //Remove class active
        switchBullets.forEach(function (span) {
            span.classList.remove("active");
        });
        //Add class active
        e.target.classList.add("active");

    });
});

/*================( 5 )=======================*/

/*======== Adjust landing page Links =======*/

//Adjustments for navigation links
let myLinks = document.querySelectorAll(".landing-page .links li a");

myLinks.forEach(function (link) {
    "use strict";
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Just for links (tag(a))
        scrollTo(document.querySelector(e.target.dataset.section));

        //Remove class active
        e.target.parentElement.parentElement.querySelectorAll(".active").forEach(function (element) {
            element.classList.remove("active");
        });
        //Add class active
        e.target.classList.add("active");
    });
});

/*================( 6 )=======================*/

/*===== Adjust landing page Toggle Menu =====*/
// Toggle Menu
let toggleButton = document.querySelector(".landing-page .toggle-menu");
let toggleLinks = document.querySelector(".landing-page .nav-bar .links");

toggleButton.addEventListener("click", function (e) {
    "use strict";
    // Stop Propagation (if you clicked at any span in the button it will be considered as the button itself)
    e.stopPropagation();
    this.classList.toggle("menu-active");
    toggleLinks.classList.toggle("open");
});

toggleLinks.addEventListener("click", function (e) {
    "use strict";
    // Stop Propagation (if you clicked at any tag in the ul it will be considered as the ul itself)
    e.stopPropagation();
});

document.addEventListener("click", function (e) {
    "use strict";
    // Stop Propagation
    if (e.target !== toggleButton && e.target !== toggleLinks) {
        if (toggleButton.classList.contains("menu-active")) {
            toggleButton.classList.toggle("menu-active");
            toggleLinks.classList.toggle("open");
        }
    }
});

/*================( 7 )=======================*/
/*========= Reset Settings Default ==========*/

let resetOption = document.querySelector(".settings .reset");
resetOption.onclick = function () {
    "use strict";
    // localStorage.clear(); use this method if every thing in local storage is belongs to setting box only
    localStorage.removeItem("color-option");
    localStorage.removeItem("background-option");
    localStorage.removeItem("background-image");
    localStorage.removeItem("bullets-option");
    
    // Reload Window
    window.location.reload();
};

/*================( 8 )=======================*/
/*================ Skills ===================*/

// select Skills Selector
let ourSkills = document.querySelector(".our-skills");
window.onscroll = function () {
    "use strict";
    // Skills offset top
    let skillsOffsetTOP = ourSkills.offsetTop;
    // Skills Outer height
    let skillsOuterHeight = ourSkills.offsetHeight;
    // window height
    let windowHeight = this.innerHeight;
    //Window scrolltop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTOP + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(function (skill) {
            skill.style.width = skill.dataset.progress;
        });
    }
};

/*==================( 9 )=======================*/
/*================ Gallery ==================*/

let myGalleryImage = document.querySelectorAll(".gallery img");
myGalleryImage.forEach(function (img) {
    "use strict";
    img.addEventListener("click", function (e) {
        // Create popup-overlay Div
        let myOverLay = document.createElement("div");
         // Append popup overLay Div into body
        document.body.appendChild(myOverLay);
        // Add class popup-over-lay
        myOverLay.className = "popup-over-lay";
        /* --------------------------------------------------*/
         // Create Popup-Box Div
        let myPopUpBox = document.createElement("div");
        // Add class popup-box
        myPopUpBox.className = "popup-box";
        // Create Heading
        let myHeading = document.createElement("h3");
        // Create Title for the Image
        let headingText = document.createTextNode(img.alt);
        //Append Text to H3
        myHeading.appendChild(headingText);
        //Append heading to Popup Box
        myPopUpBox.appendChild(myHeading);
        /* --------------------------------------------------*/
        // Create Close Sign
        let myExite = document.createElement("span");
        // Create Close Text
        let exiteText = document.createTextNode("X");
        // Append text
        myExite.appendChild(exiteText);
        myExite.className = "close";
        //Append Close to PopUp Box
        myPopUpBox.appendChild(myExite);
        /* --------------------------------------------------*/
        // Create Popup-Image
        let myPopUpImage = document.createElement("img");
        // Insert Image
        myPopUpImage.src = img.src;
         // Append myPopUpImage into Popup-Box Div 
        myPopUpBox.appendChild(myPopUpImage);
          // Append popup overLay Div into body
        document.body.appendChild(myPopUpBox);
    });
});

// Using Close Button
document.addEventListener("click", function (e) {
    "use strict";
    if (e.target.className === "close") {
        // Remove Popup Box
        e.target.parentElement.remove();
        // Remove OverLay
        document.querySelector(".popup-over-lay").remove();
    }
});

//--- Hide Settings Bar When Press on Escape Key 

window.addEventListener("keydown", function (e) {
        const popBox = document.querySelector("div.popup-box");
        const index2 = popBox.className.indexOf("popup-box");
         console.log(index2);
         //console.log(e.which);
        if (index2 !== 0 && e.which === 27) {
            popBox.classList.remove("popup-box");
            document.querySelector(".popup-over-lay").remove();
        }
    
});

/*==================( 10 )====================*/
/*============== ScrollToTop =================*/

let scrollToTop = document.querySelector("span.back-top");

window.addEventListener("scroll", function () { //whenever they scroll
    "use strict";
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)//if scroll is 200px from top //use (pageYOffset) or (scrollY) (window.scrollY) 
    scrollToTop.style.display = "block";//if they scroll down, show
    else
    scrollToTop.style.display = "none";//if they scroll up, hide
});
scrollToTop.onclick = function () {
    "use strict";
    //document.body.scrollTop = document.documentElement.scrollTop = 0;
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
    /*setTimeout(function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, 100);*/
    //window.scrollTo(0, 0);
};


