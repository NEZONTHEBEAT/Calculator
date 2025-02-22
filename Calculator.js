let outputScreen = document.getElementById("outputscreen");

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Invalid");
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

function Calculate() 
{
    try 
        {
            outputScreen.value = eval(outputScreen.value); // Evaluates power (**) too
        }  
    catch (err) 
        {
            alert("Invalid Expression");
        }
}
