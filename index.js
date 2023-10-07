setHead("Home");
setHeader();


//slick function to allow the cards to scorll horizontally
$(document).ready(function(){
    $('.cyberware-card-container').slick({
        // arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


//Populate cyberware options into containers

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
            <li><a href="#cyberware-container">Cyberware</a></li>
            <li><a href="#settings-container">Settings</a></li>
        </ul>
    </nav>`)
}

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
}