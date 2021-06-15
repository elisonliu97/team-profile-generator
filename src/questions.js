// INQUIRER LEADER QUESTIONS
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

// INQUIRER ENGINEER QUESTIONS
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

//  INQUIRER INTERN QUESTIONS
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

//  INQUIRER ADD NEW MEMBERS QUESTIONS
const add_team_questions = [
    {
        name: "choices",
        type: "list",
        message: "Add a team member: ",
        choices: ["engineer", "intern", "N/A"]
    }
]

module.exports = {leader_questions,engineer_questions,intern_questions,add_team_questions}