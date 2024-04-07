#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// tsc --init
// npm init -y
// npm i @types/node -D
// gitignore
// npm i inquirer
// npm i --save-dev @types/inquirer
// npm i chalk
// 1- inquirer
// 2- array
// 3- function
// 4- operation
console.log(chalk.yellow.italic.bold("\t WELCOME TO MY SHOPPING LIST \t"));
let shoppingTodo = [];
async function myShoppingTodo(shopping) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: chalk.bgRed("Select an option"),
            choices: ["Add Item", "Update List", "View Item", "Delete Item"],
        });
        if (ans.select == "Add Item") {
            let addItemTodo = await inquirer.prompt({
                type: "input",
                name: "shoppingTodo",
                message: chalk.green.italic.bold("Add item to the list"),
            });
            shoppingTodo.push(addItemTodo.shoppingTodo);
            shoppingTodo.forEach((shopping) => console.log(chalk.green.italic.bold(shopping)));
        }
        if (ans.select == "Update List") {
            let updateItemTodo = await inquirer.prompt({
                type: "list",
                name: "shoppingTodo",
                message: chalk.blue.italic.bold("Update item in the list"),
                choices: shoppingTodo.map((item) => item),
            });
            let addItemTodo = await inquirer.prompt({
                type: "input",
                name: "shoppingTodo",
                message: chalk.green.italic.bold("Add item to the list"),
            });
            let newTodo = shoppingTodo.filter((val) => val !== updateItemTodo.shoppingTodo);
            shoppingTodo = [...newTodo, addItemTodo.shoppingTodo];
            shoppingTodo.forEach((shoppingTodo) => console.log(chalk.blue.italic.bold(shoppingTodo)));
        }
        if (ans.select == "View Item") {
            console.log(chalk.blue.italic.bold("\t *** MY SHOPPING LIST *** \t"));
            shoppingTodo.forEach((shoppingTodo, index) => console.log(chalk.green.italic.bold(`${index + 1}.${shoppingTodo}`)));
            console.log(chalk.yellow.italic.bold("\t *** THANK YOU *** \t"));
        }
        if (ans.select == "Delete Item") {
            let deleteItemTodo = await inquirer.prompt({
                type: "list",
                name: "shoppingTodo",
                message: chalk.red.italic.bold("delete item in this list"),
                choices: shoppingTodo.map((item) => item),
            });
            let newTodo = shoppingTodo.filter((val) => val !== deleteItemTodo.shoppingTodo);
            shoppingTodo = [...newTodo];
            shoppingTodo.forEach((shoppingTodo) => console.log(chalk.green.italic.bold(shoppingTodo)));
        }
    } while (true);
}
myShoppingTodo(shoppingTodo);
