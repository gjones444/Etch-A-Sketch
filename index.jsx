// Get size submitted by the usr, call makeGrid()

function makeGrid(){
    let tbl = document.getElementsById("pixelCanvas");

    for (i = 0; i < 11; i++) {
        let myRow = document.createElement("tr");
        myRow.id = "row" + i;

        tbl.appendChild(myRow);
    }



}