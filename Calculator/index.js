
// constantents
const calculatorButtons = [
  "CA",
  "DEL",
  "%",
  "/",
  "1",
  "2",
  "3",
  "*",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "+",
  "0",
  "00",
  ".",
  "=",
];
const operators = ["%", "/", "*", "-", "+"];
const buttonArea = document.getElementById("buttonArea");
const highlightingIndex = [0, 1, 2, 3, 7, 11, 15, 19];

// hidrate the dom
for (let index = 0; index < calculatorButtons.length; index++) {
  let specialColor;
  let buttonNumber;
  if (highlightingIndex.includes(index)) {
    buttonNumber = calculatorButtons[index];
    specialColor = "text-cyan-500";
    const buttonComponent =
      "<div class=" +
      `"border p-1 text-center font-medium text-lg rounded-sm bg-gray-200 hover:bg-gray-500 select-none ${specialColor}"` +
      `onClick="clickHandler(event)">${buttonNumber}</div>`;
    buttonArea.innerHTML += buttonComponent;
  } else {
    buttonNumber = calculatorButtons[index];
    specialColor = "";
    const buttonComponent =
      "<div class=" +
      `"border p-1 text-center font-medium text-lg rounded-sm bg-gray-200  hover:bg-gray-300 select-none ${specialColor}"` +
      `onClick="clickHandler(event)">${buttonNumber}</div>`;
    buttonArea.innerHTML += buttonComponent;
  }
}
let allUserInputs = ""
let previousUserInput = ""
let prepreviousUserInput = ""
outputBox = document.getElementById("output")
let result = null

function clickHandler(event) {
  const element = event.target;
  userInput = element.innerHTML;
  const outPutBar = document.getElementById("output");
  const allInputBox = document.getElementById("allInputBox");
  if (userInput === "CA") {
    userInput, prepreviousUserInput, previousUserInput, allUserInputs = ""
    allInputBox.innerText = allUserInputs
    outPutBar.value = null
    return 0;
  }
  if (userInput === "DEL") {
    allUserInputs.slice(0, -1)
    return 0;
  }

  allUserInputs += userInput
  prepreviousUserInput = previousUserInput
  previousUserInput = userInput
  allInputBox.innerText = allUserInputs + "=", result

  console.log("userInput", userInput, "prepre ", prepreviousUserInput, "pre", previousUserInput, "alluser", allUserInputs);
}

