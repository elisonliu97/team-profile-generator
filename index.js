const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

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

async function getInquirer() {
    await inquirer
        .prompt(leader_questions)
        .then(async (response) => {
            teamLeader = new Manager(response.name, response.id, response.email, response.office)
            while (addMember) {
                await inquirer.prompt(add_team_questions)
                    .then(async (response) => {
                        if (response.choices === "N/A") {
                            addMember = false
                        } else if (response.choices === "engineer") {
                            await inquirer.prompt(engineer_questions)
                            .then(async(response) => {
                                let engineer = new Engineer(response.name, response.id, response.email, response.github)
                                engineerTeam.push(engineer)
                            })
                        } else if (response.choices === "intern") {
                            await inquirer.prompt(intern_questions)
                            .then(async(response) => {
                                let intern = new Intern(response.name, response.id, response.email, response.school)
                                internTeam.push(intern)
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

getInquirer();



// HAVE DONE
// write file command
// inquirer prompts
// classes
// tests

// TO DO
// basic layout of html file
// figure out a way to dynamicaally add cards