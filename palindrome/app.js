const input = document.getElementById("input");
input.preventDefault();
function reverseStr(str){
    return str.split("").reverse().join("");
}

function checkPalindrome(){
    const value = input.value;
    const rev = reverseStr(value);
    

    let resultElement = document.getElementById("result");
    if (!resultElement) {
        resultElement = document.createElement("p");
        resultElement.id = "result";
        resultElement.style.marginTop = "20px";
        resultElement.style.fontSize = "18px";
        input.parentNode.insertBefore(resultElement, input.nextSibling);
    }
    
    if(value===rev){
        resultElement.textContent = "IsPalindrome";
        resultElement.style.color = "#4CAF50";
    }else{
        resultElement.textContent = "notPalindrome"; 
        resultElement.style.color = "#f44336";
    }
    input.value="";
}