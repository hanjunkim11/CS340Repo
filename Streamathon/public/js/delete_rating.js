/* Hanjun Kim and Christian McKinnon CS 340 Portfolio Project
App.js, 3/15/2024
Professor Curry
Citation: Code adapted from OSU 340 Github: Node Start App - Step 7: Dynamically Deleting Data
https://github.com/osu-cs340-ecampus/nodejs-starter-app/tree/main/Step%207%20-%20Dynamically%20Deleting%20Data */


// Modify the below code to match movieID with the row in order to delete the item
function deleteRating(ratingID) {
    // Put our data we want to send in a javascript object
    let data = {
        ratingID: ratingID
    };

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "/delete-rating-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 204) {

            // Add the new data to the table
            deleteRow(ratingID);

        }
        else if (xhttp.readyState == 4 && xhttp.status != 204) {
            console.log("There was an error with the input.")
        }
    }
    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
}


function deleteRow(ratingID){
    let table = document.getElementById("ratings-table");
    for (let i = 0, row; row = table.rows[i]; i++) {
       // rows would be accessed using the "row" variable assigned in the for loop
       if (table.rows[i].getAttribute("data-value") == ratingID) {
            table.deleteRow(i);
            break;
       }
    }
}