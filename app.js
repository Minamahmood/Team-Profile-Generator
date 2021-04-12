const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputpath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const team = [];
addToTeam();

function addToTeam() {
    inquirer
        .prompt([{
            type: "list",
            name: "addEmployee",
            message: "Add an employee, or select  'finish'.",
            choices: ["Manager", "Engineer", "Intern", "Finish"],
        }, ])
        .then((data) => {
            switch (data.addEmployee) {
                case "ENGENEER":
                    engineerInfo();
                    break;
                case "Intern":
                    internInfo();
                    break;
                case "Manager":
                    managerInfo();
                    break;
                default:
                    creatTeam();
            }
        });
}

function managerInfo() {
    inquirer
        .prompt([{
                type: "input",
                name: "managerName",
                message: "Manager Name:",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Manager Email:",
            },
            {
                type: "input",
                name: "managerNumber",
                message: "Manager office Number:",
            },
        ])
        .then(function(data) {
            const manager = new Manager(
                data.managerName,
                data.managerId,
                data.managerEmail,
                data.managerOfficeNumber
            );
            team.push(manager);
            addToTeam();
        });
}

function engineerInfo() {
    inquirer
        .prompt([{
                type: "input",
                name: "engineerName",
                message: "Engineer Name:",
            },
            {
                type: "input",
                name: "engineerId",
                message: "Engineer ID:",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Engineer Email:",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Engineer GITHUB:",
            },
        ])
        .then(function(data) {
            const engineer = new Engineer(
                data.engineerName,
                data.engineerId,
                data.engineerEmail,
                data.managerGithub
            );
            team.push(engineer);
            addToTeam();
        });
}

function internInfo() {
    inquirer
        .prompt([{
                type: "input",
                name: "engineerName",
                message: "Engineer Name:",
            },
            {
                type: "input",
                name: "internId",
                message: "Intern ID:",
            },
            {
                type: "input",
                name: "internEmail",
                message: "Intern Email:",
            },
            {
                type: "input",
                name: "internSchool",
                message: "Intern School:",
            },
        ])
        .then(function(data) {
            const intern = new Intern(
                data.internName,
                data.internId,
                data.internEmail,
                data.internSchool
            );
            team.push(intern);
            addToTeam();
        });
}

function creatTeam() {
    if (fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputpath, render(team), "utf-8");
}