// function to create cards for manager
function generateManagerCard(manager) {
    return `<div class="column is-one-quarter-desktop">
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <i class="fas fa-mug-hot fa-3x"></i>
                </div>
                <div class="media-content">
                    <p class="title is-4">${manager.getName()}</p>
                    <p class="subtitle is-6">${manager.getRole()}</p>
                </div>
            </div>
    
            <div class="content">
                <p><span class="has-text-weight-bold">ID:</span> ${manager.getID()}</p>
                <p><span class="has-text-weight-bold">Email:</span><a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></p>
                <p><span class="has-text-weight-bold">Office Number:</span> ${manager.getOfficeNumber()}</p>
            </div>
        </div>
    </div>
    </div>`
}

// function to create cards for engineers
function generateEngineerCard(engineer) {
    return `<div class="column is-one-quarter-desktop">
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <i class="fas fa-glasses fa-3x"></i>
                </div>
                <div class="media-content">
                    <p class="title is-4">${engineer.getName()}</p>
                    <p class="subtitle is-6">${engineer.getRole()}</p>
                </div>
            </div>
    
            <div class="content">
                <p><span class="has-text-weight-bold">ID:</span> ${engineer.getID()}</p>
                <p><span class="has-text-weight-bold">Email:</span><a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></p>
                <p><span class="has-text-weight-bold">GitHub:</span><a href="https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()}</a></p>
            </div>
        </div>
    </div>
    </div>`
}

// function to create cards for interns
function generateInternCard(intern) {
    return `<div class="column is-one-quarter-desktop">
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <i class="fas fa-graduation-cap fa-3x"></i>
                </div>
                <div class="media-content">
                    <p class="title is-4">${intern.getName()}</p>
                    <p class="subtitle is-6">${intern.getRole()}</p>
                </div>
            </div>
    
            <div class="content">
                <p><span class="has-text-weight-bold">ID:</span> ${intern.getID()}</p>
                <p><span class="has-text-weight-bold">Email:</span><a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></p>
                <p><span class="has-text-weight-bold">School:</span> ${intern.getSchool()}</p>
            </div>
        </div>
    </div>
    </div>`

}

// function to generate block of code for cards for all team members
function generateTeam(manager, listofEngineers, listofInterns) {
    allCards = '';
    allCards += generateManagerCard(manager);
    listofEngineers.forEach((engineer) => {
        allCards += generateEngineerCard(engineer);
    })
    listofInterns.forEach((intern) => {
        allCards += generateInternCard(intern);
    })
    return allCards
}

// function to generate rest of the html file
function generateHTML(manager, listofEngineers, listofInterns) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.min.css" />
</head>
<body>
    <section class="hero is-link">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">My Team</h1>
            </div>
        </div>
    </section>
    <main class="m-6">
        <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
            ${generateTeam(manager, listofEngineers, listofInterns)}
        </div>
    </main>
</body>
</html>
`;
}

module.exports = generateHTML