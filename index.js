const inquirer = require("inquirer");
const fs = require("fs");

let addMember = true
let teamLeader
let engineerTeam = []
let internTeam = []
let htmlStr

const leader_questions = [
    {
        name: "name",
        type: "input",
        message: "Who is the team leader?: "
    },
    {
        name: "id",
        type: "input",
        message: "What is the ID number?: ",
    },
    {
        name: "email",
        type: "input",
        message: "What is email?: "
    },
    {
        name: "office",
        type: "input",
        message: "What is the office number?: "
    },
]

const engineer_questions = [
    {
        name: "name",
        message: "What is the team member's name?: "
    },
    {
        name: "id",
        message: "What is the ID number?: "
    },
    {
        name: "email",
        message: "What is the email?: "
    },
    {
        name: "github",
        message: "What is the github?: "
    }
]

const intern_questions = [
    {
        name: "name",
        message: "What is the intern's name?: "
    },
    {
        name: "id",
        message: "What is the ID number?: "
    },
    {
        name: "email",
        message: "What is the email?: "
    },
    {
        name: "school",
        message: "What is the school?: "
    }
]

const add_team_questions = [
    {
        name: "choices",
        type: "list",
        message: "Add a team member: ",
        choices: ["engineer", "intern", "N/A"]
    }
]

async function getData() {
    await inquirer
        .prompt(leader_questions)
        .then(async (response) => {
            teamLeader = response
            while (addMember) {
                await inquirer.prompt(add_team_questions)
                    .then(async (response) => {
                        if (response.choices === "N/A") {
                            addMember = false
                        } else if (response.choices === "engineer") {
                            await inquirer.prompt(engineer_questions)
                            .then(async(response) => {
                                engineerTeam.push(response)
                            })
                        } else if (response.choices === "intern") {
                            await inquirer.prompt(intern_questions)
                            .then(async(response) => {
                                internTeam.push(response)
                            })
                        }
                    })
            }
        })
    
    console.log(teamLeader)
    console.log(engineerTeam)
    console.log(internTeam)
}




function createHTMLFile() {
    fs.writeFile("index.html",htmlStr, (err) => err ? console.error(err) : console.log("File Generated"))
}

getData();



// HAVE DONE
// write file command
// inquirer prompts
// TO DO
// basic layout of html file
// figure out a way to dynamicaally add cards
// classes
// tests