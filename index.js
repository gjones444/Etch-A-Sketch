// Get size submitted by the usr, call makeGrid()

function makeGrid() {
  var clear = document.getElementById("gridCanvas");
  clear.innerHTML = "";

  let height = document.getElementById("gridHeight").value;
  let width = document.getElementById("gridWidth").value;

  let tbl = document.getElementById("gridCanvas");

  for (i = 0; i < height; i++) {
    let myRow = document.createElement("tr");
    myRow.id = "row" + i;

    tbl.appendChild(myRow);
    let rowW = document.getElementById("row" + i);

    for (j = 0; j < width; j++) {
      let myCell = document.createElement("td");
      rowW.appendChild(myCell);
    }
  }
}
