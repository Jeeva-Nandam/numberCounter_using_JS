let counterElement = document.getElementById("counterValue");
//console.log(counterElement)

function onIncrement() {
    let previousValue = counterElement.textContent;
    let updateValue = parseInt(previousValue) + 1;
    //console.log(updateValue);
    //counterElement.textContent = updateValue;
    if (updateValue > 0) {
        counterElement.style.color = "green";
    } else if (updateValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
    counterElement.textContent = updateValue;
}

function onDecrement() {
    let previousValue = counterElement.textContent;
    let updateValue = parseInt(previousValue) - 1;
    //console.log(updateValue);
    //counterElement.textContent = updateValue;
    if (updateValue > 0) {
        counterElement.style.color = "green";
    } else if (updateValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
    counterElement.textContent = updateValue;
}

function onReset() {
    let previousValue = 0;
    counterElement.style.color = "black";
    counterElement.textContent = previousValue;

}