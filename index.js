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
                <div class="cyberware-option">
                    <input type="checkbox" name="${option.name}" id="${option.name}">
                    <label class="option option-name" for="${option.name}">${option.name}</label><div class="red-vertical-line"></div>
                    <label class="option option-install" for="${option.name}">${option.install}</label><div class="red-vertical-line"></div>
                    <label class="option option-description" for="${option.name}">${option.description}</label><div class="red-vertical-line"></div>
                    <label class="option option-cost" for="${option.name}">${option.cost}</label><div class="red-vertical-line"></div>
                    <label class="option option-HL" for="${option.name}">${option.humanityLoss}</label>
                </div>
            `
    }
    if (cyberware[type].base.cyberlimb) {
        for (const option of cyberLimbs) {
            document.querySelector(`#${type}-options > .options-container`)
            .innerHTML += `
                <div class="cyberware-option">
                <input type="checkbox" name="${type} ${option.name}" id="${type} ${option.name}">
                <label class="option option-name" for="${type} ${option.name}">${option.name}</label><div class="red-vertical-line"></div>
                <label class="option option-install" for="${type} ${option.name}">${option.install}</label><div class="red-vertical-line"></div>
                <label class="option option-description" for="${type} ${option.name}">${option.description}</label><div class="red-vertical-line"></div>
                <label class="option option-cost" for="${type} ${option.name}">${option.cost}</label><div class="red-vertical-line"></div>
                <label class="option option-HL" for="${type} ${option.name}">${option.humanityLoss}</label>
                </div>
            `
        }
    }
}
