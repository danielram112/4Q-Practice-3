function Gather() {
    var shicks = document.getElementById('Six').value;

    switch (shicks) {
        case "C":
            document.getElementById("Seven").innerHTML = "Category: Clothing";
            break;

        case "E":
            document.getElementById("Seven").innerHTML = "Category: Electronics";
            break;

        case "B":
            document.getElementById("Seven").innerHTML = "Category: Books";
            break;

        default: 
        window.alert("Invalid Category")
    }
}


