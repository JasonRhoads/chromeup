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
            <li><a href="./settings.html">Settings</a></li>
        </ul>
    </nav>`)
}