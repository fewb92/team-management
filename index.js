const inquirer = require('inquirer');
const managerQuestions = require('./src/manager-questions');
const employeeOptionQuestions = require('./src/employee-option-questions');
const engineerQuestions = require('./src/engineer-questions');
const internQuestions = require('./src/intern-questions');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { generateHTML } = require('./page-template');

const team = [];

function init() {

    function createManager() {
        inquirer.prompt(managerQuestions).then(response => {
            let manager = new Manager(
                response.nameOfManager,
                response.idOfManager,
                response.emailOfManager,
                response.officeNumberOfManager
            );
            team.push(manager);
            employeeOption();
        });
    }

    function employeeOption() {
        inquirer.prompt(employeeOptionQuestions).then(response => {
            if (response.teamMember === 'Add an Engineer') {
                addEngineer();
            }
            else if (response.teamMember === 'Add an Intern') {
                addIntern();
            }
            else {
                generateHTML(team);
            }
        });
    }

    function addEngineer() {
        inquirer.prompt(engineerQuestions).then(response => {
            let engineer = new Engineer(
                response.nameOfEngineer,
                response.idOfEngineer,
                response.emailOfEngineer,
                response.githubOfEngineer
            );
            team.push(engineer);
            employeeOption();
        });
    }

    function addIntern() {
        inquirer.prompt(internQuestions).then(response => {
            let intern = new Intern(
                response.nameOfIntern,
                response.idOfIntern,
                response.emailOfIntern,
                response.schoolOfIntern
            );
            team.push(intern);
            employeeOption();
        });
    }

    createManager();
}

init();
