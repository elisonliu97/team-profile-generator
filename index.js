//DEPENDENCIES
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require('./src/template.js')
const questions = require('./src/questions.js')

// VARIABLES
let addMember = true
let teamLeader
let engineerTeam = []
let internTeam = []

// function for inquirer prompts
async function getInquirer() {
    await inquirer
    // leader portion
        .prompt(questions.leader_questions)
        .then(async (response) => {
            teamLeader = new Manager(response.name, response.id, response.email, response.office)
            // loop to add more members until exit option is chosen
            while (addMember) {
                await inquirer.prompt(questions.add_team_questions)
                    .then(async (response) => {
                        if (response.choices === "N/A") {
                            addMember = false
                            // engineer portion
                        } else if (response.choices === "engineer") {
                            await inquirer.prompt(questions.engineer_questions)
                            .then(async(response) => {
                                let engineer = new Engineer(response.name, response.id, response.email, response.github)
                                engineerTeam.push(engineer)
                            })
                            // intern portion
                        } else if (response.choices === "intern") {
                            await inquirer.prompt(questions.intern_questions)
                            .then(async(response) => {
                                let intern = new Intern(response.name, response.id, response.email, response.school)
                                internTeam.push(intern)
                            })
                        }
                    })
            }
        })
}

// function to write the html file
function createHTMLFile(htmlStr) {
    fs.writeFile("./dist/index.html",htmlStr, (err) => err ? console.error(err) : console.log("File Generated"))
}

// function to run the program
async function init() {
    await getInquirer();
    const htmlStr = generateHTML(teamLeader, engineerTeam, internTeam);
    createHTMLFile(htmlStr);

}

init();
