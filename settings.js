setHead("Settings");
setHeader();

function User(firstName, lastName, email, characters) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    characters= [];
};

function Character(handle, role, cyberware) {
    this.handle = handle;
    this.role = role;
    cyberware = {
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