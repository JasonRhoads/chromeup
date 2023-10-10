// test user
const testUser = new User("Jason", "Rhoads", "jason_email");

testUser.characters.push(new Character("El'Mo", "Tech"));
testUser.characters.push(new Character("Kobra Kai", "Solo"));
testUser.characters.push(new Character("Buggsy", "NetRunner"));
testUser.characters.push(new Character("Hound Dog", "RockerBoy"));

const currentUser = testUser;


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
            <li><a href="./">Home</a></li>
            <li><a href="#user-container" class="container-tab">User</a></li>
            <li><a href="#cyberware-container" class="container-tab">Cyberware</a></li>
            <li><a href="#settings-container" class="container-tab">Settings</a></li>
        </ul>
    </nav>`)
}

function setUserCharacter() {
    for (const character of currentUser.characters) {
        $("#user-caracters").append(character.handle);
    }
}

function setCyberware() {
    for (const type in cyberware) {
        $(`#${type}-container > .container-header`).html(`<h2><span class="red-arrow">▶</span>` 
                        + type.toUpperCase() 
                        + `</h2><p>(${cyberware[type].base.optionSlotsAvailable} Options Slots Avaliable)</p>`);

        for (const option of cyberware[type].options) {

            document.querySelector(`#${type}-options > .options-container`)
                .innerHTML += `
                    <label class="cyberware-option">
                        <input type="checkbox" name="${option.name}" id="${option.name}">
                        <label class="option option-name" for="${option.name}">${option.name}</label><div class="red-vertical-line"></div>
                        <label class="option option-install" for="${option.name}">${option.install}</label><div class="red-vertical-line"></div>
                        <label class="option option-description" for="${option.name}">${option.description}</label><div class="red-vertical-line"></div>
                        <label class="option option-cost" for="${option.name}">${option.cost}</label><div class="red-vertical-line"></div>
                        <label class="option option-HL" for="${option.name}">${option.humanityLoss}</label>
                    </label>
                `
        }
        if (cyberware[type].base.cyberlimb) {
            for (const option of cyberLimbs) {
                document.querySelector(`#${type}-options > .options-container`)
                .innerHTML += `
                    <label class="cyberware-option">
                        <input type="checkbox" name="${type} ${option.name}" id="${type} ${option.name}">
                        <label class="option option-name" for="${type} ${option.name}">${option.name}</label><div class="red-vertical-line"></div>
                        <label class="option option-install" for="${type} ${option.name}">${option.install}</label><div class="red-vertical-line"></div>
                        <label class="option option-description" for="${type} ${option.name}">${option.description}</label><div class="red-vertical-line"></div>
                        <label class="option option-cost" for="${type} ${option.name}">${option.cost}</label><div class="red-vertical-line"></div>
                        <label class="option option-HL" for="${type} ${option.name}">${option.humanityLoss}</label>
                    </label>
                `
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
        $("#" + $( this ).text().toLowerCase() + "-container").addClass("show").removeClass("hide");
        $("head title").html(`Chrome Up | ${$( this ).text()}`);
        // console.log( $( this ).text().toLowerCase() + "-container" );
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
    this.characters = [];
};

function Character(handle, role) {
    this.handle = handle;
    this.role = role;
    this.cyberware = {
        "fashionware": {

        },
        "neuralware" : {
            
        },
        "cyberoptics" : {
            "leftEye" : {

            },
            "rightEye" : {

            }
        },
        "cyberaudio" : {

        },
        "internalCyberware" : {

        },
        "externalCyberware" : {

        },
        "cyberArms" : {
            "leftArm" : {

            },
            "rightArm" : {

            }
        },
        "cyberLegs" : {
            "leftLeg" : {

            },
            "rightLeg" : {

            }
        },
        "borgware" : {

        }
    };
};