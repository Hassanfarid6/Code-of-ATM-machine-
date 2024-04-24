#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
const mypin = 1234;
console.log("\n\tThanks for using National Bank ATM!!\n\t");
let pinAnswer = await inquirer.prompt([
    { name: "pin", message: "Enter your pin", type: "number" },
]);
if (pinAnswer.pin === mypin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: ["withdraw", "Saving Accont", "Current Account", "check balance"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount",
            },
        ]);
        mybalance -= amountAns.amount;
        console.log("your remaining balance is: " + mybalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your currant balance is:" + mybalance);
    }
    ;
}
else {
    console.log("Incorrect pin number");
}
