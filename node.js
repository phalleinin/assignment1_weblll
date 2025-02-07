const prompt = require("prompt-sync")()  //import prompt for user input

function shoppingList() {
    let itemsList = []  //list to store user input
    let addingItem = true   

    while (addingItem) {
        try {  //This handles successful running
            let itemInput = prompt(" Enter an item name (type'done' to finish): ")

            // This if-else condition is used for checking the user input 
            if (itemInput.toLowerCase() === 'done') {  //The user want to stop using the word 'done'
                addingItem = false
                console.log("You are exited the system. See you later!")
                break   //stop input as soon as the user input the word 'done'
            } else if (itemInput === '') {  //The user does not input anything
                console.log("Please enter an item!")
            } else {itemsList.push(itemInput)}   //The input of the user is pushed to the defined list above 

        } catch (error) {  //This handle error 
            console.log ("There is an error: ", error)  //Display if any error occurs
        }


        //Display all item in the list
        console.log("\n <-----Here is Your Shopping List------>")
        if (itemsList.length === 0) {  //This represents empty list
            console.log("Your list is empty."); 
          } else {
            for (let i = 0; i < itemsList.length; i++) {  //Arrange the input items in number order
              console.log(`${i + 1}. ${itemsList[i]}`);  //Display the item list with ordered number
            }
        
        }
    }
}
shoppingList()


