
//Populate cyberware options into containers

for (const type in cyberware) {
    document.querySelector(`#${type}-container > .container-header > h2`)
            .innerHTML = `<span class="red-arrow">▶</span>` + type.toUpperCase();
    // console.log(cyberware[type]);
    for (const option of cyberware[type].options) {

        document.querySelector(`#${type}-options > .options-container`)
            .innerHTML += `
                <div class="cyberware-option">
                <input type="checkbox" name="${option.name}" id="${option.name}">
                <label class="option option-name" for="${option.name}">${option.name}</label>
                <label class="option option-install" for="${option.name}">${option.install}</label>
                <label class="option option-description" for="${option.name}">${option.description}</label>
                <label class="option option-cost" for="${option.name}">${option.cost}</label>
                <label class="option option-HL" for="${option.name}">${option.humanityLoss}</label>
                </div>
            `
        // console.log(option);
    }
    if (cyberware[type].base.cyberlimb) {
        for (const option of cyberLimbs) {
            document.querySelector(`#${type}-options > .options-container`)
            .innerHTML += `
                <div class="cyberware-option">
                <input type="checkbox" name="${option.name}" id="${option.name}">
                <label class="option option-name" for="${option.name}">${option.name}</label>
                <label class="option option-install" for="${option.name}">${option.install}</label>
                <label class="option option-description" for="${option.name}">${option.description}</label>
                <label class="option option-cost" for="${option.name}">${option.cost}</label>
                <label class="option option-HL" for="${option.name}">${option.humanityLoss}</label>
                </div>
            `
        }
    }
}




