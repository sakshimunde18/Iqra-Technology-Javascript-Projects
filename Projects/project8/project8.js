function generateTable() {
    var number = parseInt(document.getElementById("number").value);
    var limit = parseInt(document.getElementById("limit").value);
    document.getElementById("table-container").innerHTML = "";
    var table = document.createElement("table");
    for (var i = 1; i <= limit; i++) {
      var row = document.createElement("tr");
      var rowHeader = document.createElement("th");
      rowHeader.textContent = i;
      row.appendChild(rowHeader);
      var cell = document.createElement("td");
      cell.textContent = number + " x " + i + " = " + number * i;
      row.appendChild(cell);
      table.appendChild(row);
    }
    document.getElementById("table-container").appendChild(table);
  }
  