

// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

const colorsLi = document.querySelectorAll(".main-color-list li");

if (mainColors !== null){

    document.documentElement.style.setProperty("--main-color", mainColors);

    // Remove Active-color Class From All Color List Item  
    colorsLi.forEach( (element) =>{

        element.classList.remove("active-color");

        // Add Active Class On Element with Data-color === local Storage Item
        if (element.dataset.color === mainColors) {

            // Add Active Class 
            element.classList.add("active-color");

        }
    });
}


// Switch Colors 


// Loop On Color List Items
colorsLi.forEach( (colorLi) => {

    // Click on Every List Items
    colorLi.addEventListener("click", (ele) =>{

        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', ele.target.dataset.color);

        // Set Color On Local Storge
        localStorage.setItem("color_option", ele.target.dataset.color);

        // Remove Active-color Class From All Childrens
        ele.target.parentElement.querySelectorAll(".active-color").forEach( (element) =>{
            element.classList.remove("active-color");
        });

        // Add Active-color Class On Self 
        ele.target.classList.add("active-color");

    })

});

const gearIcon = document.querySelector(".gear-icon");

gearIcon.onclick = function () {
    // Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");

    // Toggle Class Settings-open For Rotation on Self
    const settingsBox = document.querySelector(".settings-box");
    settingsBox.classList.toggle("settings-open");
    // settingsBox.style.left = "20px";

    const personalImge = document.querySelector(".personal-img");
    const introductionText = document.querySelector(".text");
    if (settingsBox.classList.contains("settings-open")) {
        personalImge.style.display = "none";
        introductionText.style.float = "right";
    }else {
        personalImge.style.display = "";
        introductionText.style.float = "left";
    }
};



/**
 * Select Landing Page Element
*/
const landingPage = document.querySelector(".landing-page");

/**
 *  Get Array Of Imgs 
*/
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg"];


/**
 * Randon background Key
 */
const mySwitchKey1 = document.querySelector(" .switch input");

let backgroundRandomOption = true;

// Variable To Control The Interval 
let backgroundInterval;

// Check If There's local Storage Random Background Item 
let backgroundLocalItem = localStorage.getItem("background_option");



const randomizeImgs = () =>{
    backgroundInterval= setInterval(() => {
        /**
        * Get Random Number
        */
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
        /**
        * Change Background Image Url
        */
        // landingPage.style.backgroundImage = `url("imges/${imgsArray[randomNumber]}")`;
    
        document.body.style.backgroundImage = `url("imges/${imgsArray[randomNumber]}")`;
    
    }, 3000);
}





const clearIntervalOfRandomBackground =  () => {
    if (mySwitchKey1.hasAttribute("data-backgroundRandom")){
        backgroundRandomOption = true;
        randomizeImgs();

        localStorage.setItem("background_option", true);
    }else{
        backgroundRandomOption = false;
        clearInterval(backgroundInterval);

        localStorage.setItem("background_option", false);
    }
    
    
};

if(mySwitchKey1.dataset.backgroundRandomOption = "active"){
    backgroundRandomOption = true;
    randomizeImgs();
}
mySwitchKey1.addEventListener("click", () => {
    mySwitchKey1.toggleAttribute("data-backgroundRandom");
    clearIntervalOfRandomBackground();
});

// Check If Random Background local Storage Is Not Empty
if (backgroundLocalItem !== null){
    if (backgroundLocalItem === 'true') {
        backgroundRandomOption = true;
        
    }else{
        backgroundRandomOption = false;
        mySwitchKey1.removeAttribute("checked");
        mySwitchKey1.removeAttribute("data-backgroundRandom");
        clearInterval(backgroundInterval);
    }
}

// Show or Hide Bullets
const mySwitchKey2 = document.getElementById("hideBullets");

const bulletsConteiner =  document.querySelector(".nav-bullets");

const bulletsLocalStorage = localStorage.getItem("bullet_option");

if (bulletsLocalStorage !== null ) {

    if (bulletsLocalStorage === 'true') {
        bulletsConteiner.style.right = "1px";
        
    } else {
        mySwitchKey2.removeAttribute("checked");
        mySwitchKey2.removeAttribute("data-display");
        bulletsConteiner.style.right = "-1000px";
    }

}

const showOrHideBullets = () => {
    if (mySwitchKey2.hasAttribute('data-display')) {
        bulletsConteiner.style.right = "1px";
    }else {
        bulletsConteiner.style.right = "-1000px";       
    }
}

mySwitchKey2.addEventListener("click", () => {
    mySwitchKey2.toggleAttribute("data-display");
    showOrHideBullets();
});


// Select Skills Selector 
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(mySkill => {
            mySkill.style.width = mySkill.dataset.progress;
        });

    }else if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight + 20 ) ) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(mySkill => {
            mySkill.style.width = mySkill.dataset.progress;
        });
    }else if (ourSkills.classList.contains("active")) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(mySkill => {
            mySkill.style.width = mySkill.dataset.progress;
        });
    }else{
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(mySkill => {
            mySkill.style.width = "0";
        });
    }
};



// Create Popup With The Image
const myGallery = document.querySelectorAll("img");

// Create button to close Popup 

myGallery.forEach(imge => {

    imge.addEventListener("click", (e) => {

        // Create Overlay Element
        let Overlay = document.createElement("div");

        // Add Class To Overlay
        Overlay.className = 'popup-overlay';

        // Append Overlay To The Body
        document.body.appendChild(Overlay);

        // Create The Poup Box
        let popupBox = document.createElement('div');

        // Add Class To The Popup Box
        popupBox.className = 'popup-box';
        

        if (imge.alt !== null) {

            // Create Heading
            let imgeHeading = document.createElement("h3");

            //Create Text For Heading
            let imgText = document.createTextNode(imge.alt);

            // Append The Text To The Heading
            imgeHeading.appendChild(imgText);

            // Append The Heading To The Popup Box
            popupBox.appendChild(imgeHeading);
        }

        // Add Close Button to Overlay
        const closeButton = document.createElement("i");
        closeButton.setAttribute("class", "fa fa-times");
        closeButton.setAttribute("aria-hidden", "fa fa-times");
        popupBox.appendChild(closeButton);
    

        // Create The Imge
        let popupImge = document.createElement("img");

        // Set Image Sourse
        popupImge.src = imge.src;



        // Add Image To Popup Box
        popupBox.appendChild(popupImge);

        // Append The Popup Box To Bady
        document.body.appendChild(popupBox);

        // Blur The Background 
        document.querySelector(".main").style.filter = "blur(8px)";

        // make bottom = 1900px to introduction becouse the blur 
        document.querySelector(".introduction").style.cssText = "position: absolute;left: 40%;right: 0%;top: 25%;transform: translate(-50%, -50%);z-index: 2;color: var(--other-color);bottom: 1900px;";
        document.querySelector(".settings-box").style.cssText = "left:-320px;position:fixed";

    });    
});

// Close Popup
document.addEventListener("click", (e) => {

    if (e.target.className == 'fa fa-times'){

        // Remove The Current Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector('.popup-overlay').remove();

        document.querySelector(".introduction").removeAttribute("style");
        document.querySelector(".settings-box").removeAttribute('style');
        document.querySelector('.main').removeAttribute("style");

    }
});


// Moving To Active Testimonial 
// Get Dots Lists
const dotsList = document.querySelectorAll(".dot");

// Get Active Dot 
const activeDot = document.querySelectorAll(".active-dot");

dotsList.forEach((dotList) => {
    dotList.addEventListener("click", (ele) =>{
        // Remove Active-dot Class From All Childrens
        ele.target.parentElement.querySelectorAll(".active-dot").forEach( (element) =>{
            element.classList.remove("active-dot");
        });

        // Add Active-dot Class On Self 
        ele.target.classList.add("active-dot");

        // Get Ts Box 
        const tsBoxs = document.querySelectorAll(".ts-box");

        tsBoxs.forEach((tsBox) => {
            if (document.querySelector(".active-dot").dataset.dot !== tsBox.dataset.testimonil) {
                tsBox.classList.remove("active-box");
                tsBox.setAttribute("data-activebox", "no");
                tsBox.classList.add("not-active-box");
            }else {
                tsBox.classList.add("active-box");
                tsBox.classList.remove("not-active-box");
            }
        });
    });
});

const activeBox = document.querySelector(".active-box");
const tsBoxs = document.querySelectorAll(".ts-box");


// Select All Bullets
const allBullets = document.querySelectorAll('.nav-bullets .bullet');
const allLinks = document.querySelectorAll(".links a")
function scrollToTheSection (elements){
    elements.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(`#${e.target.dataset.section}`).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

scrollToTheSection(allBullets);
scrollToTheSection(allLinks);

// Reset Options
document.querySelector(".reset-options").onclick =  () => {

    localStorage.removeItem("bullet_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("color_option");

    // Relode Window
    window.location.reload();


};

/*
 *NOTE :- 
 * // localStorage.clear(); ====>> this methode make clear ALL  localStorage  Items
 */


// const myContactButton = document.getElementById("contact-button");


// myContactButton.onclick = () => {

//     const myContactMassage = document.getElementById("contact-massage");
//     const myContactSubject = document.getElementById("contact-subject");
//     const myContactEmail = document.getElementById("contact-email");
//     const myContactPhone = document.getElementById("contact-phone");
//     const myContactUsername = document.getElementById("contact-username");

//     if (myContactEmail.value == "" ) {
//         alert("Pleace, Enter Your Email");
//     }else if (myContactMassage.value == "") {
//         alert("Pleace, Enter Your Massage");
//     }else if (myContactPhone.value = "" || myContactPhone.value = )
// };


// Toggle Menu 
let toggleMenuButtom = document.querySelector(".toggle-menu");
let theLinks = document.querySelector(".links");


toggleMenuButtom.onclick = function (e) {

    // Stop Propagation
    e.stopPropagation();

    this.classList.toggle("menu-active");

    theLinks.classList.toggle("open");

    const personalImge = document.querySelector(".personal-img");

    personalImge.classList.toggle("display-none");

};

// Stop propagation On Menu 
theLinks.onclick = function (e) {
    e.stopPropagation();
};

document.addEventListener("click", (e) => {

    if (e.target !== toggleMenuButtom && e.target !== theLinks) {

        // Check If Menu Is Open 
        if (theLinks.classList.contains("open") ) {
            toggleMenuButtom.classList.toggle("menu-active");

            theLinks.classList.toggle("open");

            const personalImge = document.querySelector(".personal-img");

            personalImge.classList.toggle("display-none");
        }

    }
    
});


// Select Section 

const mySections = document.querySelectorAll("section");

const myActiveSection = (element) => {
    let activeSection = element.getBoundingClientRect();
    return ( activeSection.top );
};

const addMyActiveClassToSection = () => {
    for (mySection of mySections) {
        const addMyActiveSection = (section) => {
            if (myActiveSection(section) < 150 && myActiveSection(section) >= -150) {
                section.classList.add("active");
            }else {
                section.classList.remove("active");
            }
        };
        addMyActiveSection(mySection);
    };
};


document.addEventListener("scroll", addMyActiveClassToSection);

// select active bullet
const myActiveBulet = document.querySelectorAll(".bullet .tooltip");
const myBullets = document.querySelectorAll(".bullet");
document.addEventListener("scroll", () => {
    for (let i = 0; i < myActiveBulet.length; i++) {
        if (mySections[i].classList.contains("active")) {
            myActiveBulet[i].style.display = "block"; 
        } else {
            myActiveBulet[i].removeAttribute("style");
        }
    }
});


