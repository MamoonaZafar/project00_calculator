import inquirer, { QuestionCollection } from 'inquirer';

interface CalculatorInput {
  num1: number;
  num2: number;
  operator: '+' | '-' | '*' | '/';
}

const questions: QuestionCollection<CalculatorInput> = [
  {
    type: 'input',
    name: 'num1',
    message: 'Enter the first number:',
    validate: function (value: any) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'input',
    name: 'num2',
    message: 'Enter the second number:',
    validate: function (value: any) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'list',
    name: 'operator',
    message: 'Select the operator:',
    choices: ['+', '-', '*', '/'],
  },
];

inquirer.prompt<CalculatorInput>(questions).then((answers) => {
  const { num1, num2, operator } = answers;

  let result: number;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = NaN;
  }

  console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);
});
