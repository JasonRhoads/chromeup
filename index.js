// test user
const testUser = new User("Jason", "Rhoads", "jason_email");

testUser.characters["El'Mo"] = new Character("El'Mo", "Tech");
testUser.characters["Kobra Kai"] = new Character("Kobra Kai", "Solo");
testUser.characters["Buggsy"] =new Character("Buggsy", "NetRunner");
testUser.characters["Hound Dog"] =new Character("Hound Dog", "RockerBoy");

testUser.characters["El'Mo"].cyberware.cyberoptics.leftEye.installed = true;
testUser.characters["El'Mo"].cyberware.cyberoptics.leftEye.options.push("Anti-Dazzle");
testUser.characters["El'Mo"].cyberware.cyberoptics.rightEye.installed = true;
testUser.characters["El'Mo"].cyberware.cyberoptics.rightEye.options.push("Anti-Dazzle");
testUser.characters["El'Mo"].cyberware.cyberoptics.rightEye.options.push("Chyron");
testUser.characters["El'Mo"].cyberware.cyberArms.rightArm.installed = true;
testUser.characters["El'Mo"].cyberware.cyberArms.rightArm.options.push("Techscanner");
testUser.characters["El'Mo"].cyberware.cyberaudio.cyberaudioSuite.installed = true;
testUser.characters["El'Mo"].cyberware.cyberaudio.cyberaudioSuite.options.push("Internal Agent");
testUser.characters["El'Mo"].cyberware.cyberaudio.cyberaudioSuite.options.push("Level Damper");
testUser.characters["El'Mo"].cyberware.neuralware.neuralLink.installed = true;
testUser.characters["El'Mo"].cyberware.neuralware.neuralLink.options.push("Chipware Socket");
testUser.characters["El'Mo"].cyberware.fashionware.base.options.push("Biomonitor");
testUser.characters["El'Mo"].cyberware.fashionware.base.options.push("Chemskin");
testUser.characters["El'Mo"].cyberware.fashionware.base.options.push("EMP Threading");
testUser.characters["El'Mo"].cyberware.fashionware.base.options.push("EMP Threading");
testUser.characters["El'Mo"].cyberware.fashionware.base.options.push("Shift Tacts");
testUser.characters["El'Mo"].cyberware.fashionware.base.options.push("Skinwatch");
testUser.characters["El'Mo"].cyberware.fashionware.base.options.push("Techhair");
testUser.characters["El'Mo"].cyberware.internalCyberware.base.options.push("Nasal Filters");

const currentUser = testUser;
let currentCharacter;

setHead("Home");
setHeader();
setCyberware();
setUserAttributes();
setUserCharacter();

// const currentUser = new User("Jason", "Rhoads", "jasrhoads@gmail.com");

$(document).ready(function(){
    if (currentUser.email) {
        logIn(currentUser.email);
        console.log("welcome back");
    } else {
        // registerNewUser();
        console.log("new user")
    };

    
//slick function to allow the cards to scorll horizontally    
    $('.cyberware-card-container').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});


//helper functions

function setHead(title) {
    $("head").html(`
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chrome Up | ${title}</title>
    <link rel="stylesheet" type="text/css" href="./slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="./slick/slick-theme.css"/>
    <link rel="stylesheet" href="./main.css">
    `)
}

function setHeader() {
    $("header").html(`
    <nav>
        <ul>
            <li><a href="./"><svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,2.938l-256,256v48.427h62.061v201.697h155.152V384.941h77.576v124.121h155.151V307.365H512v-48.427L256,2.938z M403.394,260.82v201.697h-62.061V338.396H170.667v124.121h-62.061V260.82H63.943L256,68.762L448.057,260.82H403.394z"></path> </g> </g> </g></svg></a></li>
            <li id="#user-container-tab" class="container-tab"><svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></li>
            <li id="#cyberware-container-tab" class="container-tab"><svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 485.18 485.18" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M483.94,338.09l-15.4-33.2c-2.2-4.8-7-7.8-12.2-7.8h-73.4v-19.6h36.1c7.4,0,13.5-6,13.5-13.5c0-7.4-6-13.5-13.5-13.5 h-36.1v-21h73.4c5.3,0,10-3.1,12.2-7.8l15.3-33.3c3.1-6.8,0.2-14.8-6.6-17.9c-6.8-3.1-14.8-0.1-17.9,6.6l-11.7,25.5h-64.7v-22.3 h36.1c7.4,0,13.5-6,13.5-13.5c0-7.4-6-13.5-13.5-13.5h-36.1v-12.1c0-21.4-17.4-38.8-38.8-38.8h-14.4v-36.3c0-7.4-6-13.5-13.5-13.5 s-13.5,6-13.5,13.5v36.3h-22.3v-64.9l25.4-11.7c6.8-3.1,9.7-11.1,6.6-17.9c-3.1-6.8-11.1-9.7-17.9-6.6l-33.2,15.3 c-4.8,2.2-7.8,7-7.8,12.2v73.5h-21v-36.2c0-7.4-6-13.5-13.5-13.5c-7.4,0-13.5,6-13.5,13.5v36.3h-19.6v-73.5c0-5.3-3.1-10-7.8-12.2 l-33.3-15.3c-6.8-3.1-14.8-0.1-17.9,6.6c-3.1,6.8-0.2,14.8,6.6,17.9l25.4,11.7v64.9h-17.7c-19.6,0-38.1,15.5-39.1,27.8 c0,0.3,0,0.7,0,1v22.1h-36.1c-7.4,0-13.5,6-13.5,13.5c0,7.4,6,13.5,13.5,13.5h36.1v22.2h-64.7l-11.7-25.4 c-3.1-6.8-11.1-9.7-17.9-6.6s-9.7,11.1-6.6,17.9l15.3,33.2c2.2,4.8,7,7.8,12.2,7.8h73.4v21h-36.1c-7.4,0-13.5,6-13.5,13.5 c0,7.4,6,13.5,13.5,13.5h36.1v19.6h-73.3c-5.3,0-10,3.1-12.2,7.8l-15.3,33.3c-3.1,6.8-0.2,14.8,6.6,17.9 c6.8,3.1,14.8,0.1,17.9-6.6l11.7-25.4h64.7v10.2c0.5,35.9,21.4,48.6,39.1,48.6h17.7v64.9l-25.5,11.6c-6.8,3.1-9.7,11.1-6.6,17.9 c3.1,6.8,11.1,9.7,17.9,6.6l33.3-15.3c4.8-2.2,7.8-7,7.8-12.2v-73.5h19.6v36.3c0,7.4,6,13.5,13.5,13.5c7.4,0,13.5-6,13.5-13.5 v-36.3h21v73.5c0,5.3,3.1,10,7.8,12.2l33.3,15.3c6.8,3.1,14.8,0.1,17.9-6.6c3.1-6.8,0.2-14.8-6.6-17.9l-25.4-11.7v-64.9h22.3v36.3 c0,7.4,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-36.3h14.4c21.4,0,38.8-17.4,38.8-38.8v-20h64.7l11.7,25.4c3.1,6.8,11.1,9.7,17.9,6.6 C484.14,352.89,487.04,344.89,483.94,338.09z M356.04,343.99h-0.1c0,6.5-5.3,11.9-11.9,11.9h-202.7c-10.7,0-12.1-15.4-12.2-21.9 v-199.3c2.1-2,6.8-5.4,12.2-5.4h202.8c6.5,0,11.9,5.3,11.9,11.9V343.99z"></path> </g> </g> </g></svg></li>
            <li id="#settings-container-tab" class="container-tab"><svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="1.5"></circle> <path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="#000000" stroke-width="1.5"></path> </g></svg></li>
        </ul>
    </nav>`)
}

function setUserCharacter() {
    for (const character in currentUser.characters) {
        $("#user-caracters").append(`
        <label class="character" for="${currentUser.characters[character].handle}">
            <input type="radio" name="character" id="${currentUser.characters[character].handle}">
            <img src="./images/${currentUser.characters[character].role}.png" alt="${currentUser.characters[character].role}">
            <p>${currentUser.characters[character].handle}</p>
            <p>${currentUser.characters[character].role}</p>
        </label>
        `);
    }
}

$("#user-caracters").on("click", function() {
    $(`input[type="checkbox"]`).prop("checked", false)
    currentCharacter = currentUser.characters[$('input[name="character"]:checked').attr('id')];

    for (const cyberType in currentCharacter.cyberware) {
        for (const option in currentCharacter.cyberware[cyberType]) {
            //Shows how many option slots are left
            $(`#${cyberType}-optionSlotsAvailable`).html(`${cyberware[cyberType].base[0].optionSlotsAvailable - currentCharacter.cyberware[cyberType][option].options.length}`)
            if (currentCharacter.cyberware[cyberType][option].installed) {
                $(`input[name="${currentCharacter.cyberware[cyberType][option].name}"]`).prop("checked", true);
                
                for (const installedOption of currentCharacter.cyberware[cyberType][option].options) {
                    $(`input[name="${installedOption}"]`).prop("checked", true);
                }
                // console.log(currentCharacter.cyberware[cyberType][option].options);
            }
        }
    }

    console.log(currentCharacter);
})


function setCyberware() {
    for (const type in cyberware) {
        $(`#${type}-container > .container-header`).html(`<h2><span class="arrow-container"><svg class="arrow" fill="#ff0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,21H3L12,3Z"></path></g></svg></span>` 
                        + type.toUpperCase() 
                        + `</h2><p>(<span id="${type}-optionSlotsAvailable">${cyberware[type].base[0].optionSlotsAvailable}</span> Options Slots Avaliable)</p>`);
        
        for (const option of cyberware[type].base) {
            if (option.required) {
                $(`#${type}-options > .options-container`).append(`
                    <label class="cyberware-option cyberware-base-option" for="${option.name}">
                        <input type="checkbox" name="${option.name}" id="${option.name}">
                        <label class="option option-name" for="${option.name}">${option.name}</label><div class="red-vertical-line"></div>
                        <label class="option option-install" for="${option.name}">${option.install}</label><div class="red-vertical-line"></div>
                        <label class="option option-description" for="${option.name}">${option.description}</label><div class="red-vertical-line"></div>
                        <label class="option option-cost" for="${option.name}">${option.cost}</label><div class="red-vertical-line"></div>
                        <label class="option option-HL" for="${option.name}">${option.humanityLoss}</label>
                    </label>
                `);
            }
        }
        for (const option of cyberware[type].options) {
            $(`#${type}-options > .options-container`).append(`
                <label class="cyberware-option">
                    <input type="checkbox" name="${option.name}" id="${option.name}">
                    <label class="option option-name" for="${option.name}">${option.name}</label><div class="red-vertical-line"></div>
                    <label class="option option-install" for="${option.name}">${option.install}</label><div class="red-vertical-line"></div>
                    <label class="option option-description" for="${option.name}">${option.description}</label><div class="red-vertical-line"></div>
                    <label class="option option-cost" for="${option.name}">${option.cost}</label><div class="red-vertical-line"></div>
                    <label class="option option-HL" for="${option.name}">${option.humanityLoss}</label>
                </label>
            `);
        }
        if (cyberware[type].base.cyberlimb) {
            for (const option of cyberLimbs) {
                $(`#${type}-options > .options-container`).append(`
                    <label class="cyberware-option">
                        <input type="checkbox" name="${type} ${option.name}" id="${type} ${option.name}">
                        <label class="option option-name" for="${type} ${option.name}">${option.name}</label><div class="red-vertical-line"></div>
                        <label class="option option-install" for="${type} ${option.name}">${option.install}</label><div class="red-vertical-line"></div>
                        <label class="option option-description" for="${type} ${option.name}">${option.description}</label><div class="red-vertical-line"></div>
                        <label class="option option-cost" for="${type} ${option.name}">${option.cost}</label><div class="red-vertical-line"></div>
                        <label class="option option-HL" for="${type} ${option.name}">${option.humanityLoss}</label>
                    </label>
                `);
            }
        }
    }
}

function logIn(email) {
    connectToDataBase(email);
    
}
//Shows and Hides the containers

$(".container-tab").on( "click", function() {
        $("#user-container").addClass("hide").removeClass("show");
        $("#cyberware-container").addClass("hide").removeClass("show");
        $("#settings-container").addClass("hide").removeClass("show");
        $("#" + $( this ).attr('id').substring(1).slice(0, -4)).addClass("show").removeClass("hide");
        $("head title").html(`Chrome Up | ${$( this ).text()}`);
        // console.log( $( this ).attr('id').substring(1).slice(0, -4));
    }
);


function registerNewUser() {  
    $(`<div class="log-in-container" id="log-in-container"></div>`).insertBefore("header");
    $("#log-in-container").html(`
        <form class="log-in-form" id="log-in-form" onsubmit="closeLogin();return false">
            <div class="log-in-header">
                <h2>Welcome Choomba!</h2>
                <h3>Ready to Chrome Up!</h3>
                <p>Got to collect your deets</p>
            </div>
            <label for="first-name">First Name</label>
            <input id="first-name" type="text" placeholder="First Name">
            <label for="last-name">Last Name</label>
            <input id="last-name" type="text" placeholder="Last Name">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="Email Address">
            <input id="sign-up" type="submit" value="Sign Up">
            <input id="close" onclick="closeLogin()" type="submit" value="Close">
        </form>
    `);

    currentUser = new User("Jason", "Rhoads", "jasrhoads@gmail.com");

};


// var form = document.getElementById("log-in-form");
// function submitForm(event) {
//     event.preventDefault();
//     form.style.display = "none";
//  }

//  form.addEventListener('submit', submitForm);


function connectToDataBase(email) {
    console.log(`${email} database connection goes here`);
    return true;
};


function closeLogin() {
    event.preventDefault();
    currentUser.email = false;
    $(".log-in-container").addClass("hide");
}

// Settings
function setUserAttributes() {
    $('#settings-user-first-name').attr('value', currentUser.firstName);
    $('#settings-user-last-name').attr('value', currentUser.lastName);
    $('#settings-user-email').attr('value', currentUser.email);
}
$("#settings-update-button").on('click', function() {
    currentUser.firstName = $("#settings-user-first-name").val()
    currentUser.lastName = $("#settings-user-last-name").val();
    currentUser.email = $("#settings-user-email").val();
    setUserAttributes()
})
// User object

function User(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.characters = {};
};

function Character(handle, role) {
    this.handle = handle;
    this.role = role;
    this.cyberware = {
        "fashionware": {
            "base" : {
                "installed" : true,
                "options" : []
            }
        },
        "neuralware" : {
            "neuralLink" : {
                "name" : "Neural Link",
                "installed": false,
                "options" : []
            }            
        },
        "cyberoptics" : {
            "leftEye" : {
                "name" : "Left Cybereye",
                "installed": false,
                "options" : []
            },
            "rightEye" : {
                "name" : "Right Cybereye",
                "installed": false,
                "options" : []
            }
        },
        "cyberaudio" : {
            "cyberaudioSuite" : {
                "name" : "Cyberaudio Suite",
                "installed" : false,
                "options" : []
            }            
        },
        "internalCyberware" : {
            "base" : {
                "installed" : true,
                "options" : []
            }
        },
        "externalCyberware" : {
            "base" : {
                "installed" : true,
                "options" : []
            }
        },
        "cyberArms" : {
            "leftArm" : {
                "name" : "Left Cyberarm",
                "installed": false,
                "options" : []
            },
            "rightArm" : {
                "name" : "Right Cyberarm",
                "installed": false,
                "options" : []
            }
        },
        "cyberLegs" : {
            "leftLeg" : {
                "name" : "Left Cyberleg",
                "installed": false,
                "options" : []
            },
            "rightLeg" : {
                "name" : "Right Cyberleg",
                "installed": false,
                "options" : []
            }
        },
        "borgware" : {
            "base" : {
                "installed" : true,
                "options" : []
            }
        }
    };
};