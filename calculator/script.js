const numbers = document.getElementsByClassName("number");
const actions = document.getElementsByClassName("action");
const screen = document.getElementById("screen");

function insertNumber(number) {
  if (screen.innerText == "0") screen.innerText = number;
  else screen.innerText = screen.innerText.concat(number);
}

function doAction(action)
{
    if(action == "clear")
        screen.innerText = "0"
    else if(action =="result")
        calculate();
}

for (const n of [...numbers])
  n.addEventListener("click", () =>
    insertNumber(n.getAttribute("data-number"))
  );

for (const a of [...actions])
  a.addEventListener("click", () =>
    doAction(a.getAttribute("data-action"))
  );
