let countEl = document.getElementById("count-el")//store the count-el element in countEl variable
let count = 0//initialise the count as 0

//create function , increment(), which logs out the count when its called
function increment() {
    count = count + 1
    countEl.textContent = count//render the count using .innerText
 
    
}


let saveEl = document.getElementById("save-el")//Grab the save-el paragraph and store it in variable, saveEl

//create function , save(), which logs out the count when its called
function save() {

    let countStr = count + " - "      //create a variable that contains both the count and dash separator i.e. "11 - "
    saveEl.textContent += countStr    // the += will help print out all new entries from the count
    console.log(count)
    countEl.textContent = 0
    count = 0

}



