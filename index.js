const inquirer = require("inquirer");
const fs = require("fs");

let addMember = true


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

inquirer
    .prompt(leader_questions)
    .then(async (response) =>  {
        console.log(response)
        while (addMember){
            await inquirer.prompt(add_team_questions)
            .then(async(response) => {
                if (response.choices === "N/A"){
                    console.log('Done')
                    addMember = false
                } else if (response.choices === "engineer"){
                    await inquirer.prompt(engineer_questions)
                } else if (response.choices === "intern") {
                    await inquirer.prompt(intern_questions)
                }
            })
        }
    })