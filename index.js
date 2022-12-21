// Get size submitted by the usr, call makeGrid()

function makeGrid() {

  let clear = document.getElementById("gridCanvas");
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

// // You can add an event listener if you want to get the color when the selection changes. You’d do something like this:
function changeColor() {
  var theInput = document.getElementById("colorPicker");
  var theColor = theInput.value
  document.getElementById("colorPicker").value = changeColor;
  document.body.style.color = theColor;

  // theInput.addEventListener(
  //   "input",
  //   function () {
  //     var theColor = theInput.value;
  //     // Do something with `theColor` here.
  //     document.getElementById("colorPicker").style.color = "red";
  //     console.log(theColor)
  //   },
  //   false
  // );
}

  // function changeColor() {
  //   let x = document.getElementById("colorPicker").value;
  //   document.getElementById("colorPicker").value = changeColor;
  //   document.body.style.color = x;
  //   console.log(x);
  //   return false;
  // }
