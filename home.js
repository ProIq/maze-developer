let k = 0;
document.querySelector("#butt").addEventListener("click", show);
function show() {
  if (k) {
    return;
  }
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  for (let i = 1; i <= 10; i++) {
    let row = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
      let element = document.createElement("td");
      element.setAttribute("id", "c_" + i + "_" + j);
      row.appendChild(element);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  k = 1;
  document.querySelector("#maze").appendChild(table);
  for(let i=1;i<=10;i++){
    document.querySelector(`#c_${i}_${1}`).style["border-left"]="1px solid black";
  }
  for(let i=1;i<=10;i++){
    document.querySelector(`#c_${1}_${i}`).style["border-top"]="1px solid black";
  }
  for(let i=1;i<=10;i++){
    document.querySelector(`#c_${i}_${10}`).style["border-right"]="1px solid black";
  }
  for(let i=1;i<=10;i++){
    document.querySelector(`#c_${10}_${i}`).style["border-bottom"]="1px solid black";
  }
  for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
      document.querySelector(`#c_${i}_${j}`).style["border-bottom"]="1px solid black";
      document.querySelector(`#c_${i}_${j}`).style["border-right"]="1px solid black";
    }
  }
  createPath();
  return;
}
function RemoveWall(row, col) {
	var cell = '#c_'+row+'_'+col;
	if (row === 1) {
		if (col === 10)
			return;
		$(cell).css("border-right-style", "hidden");
	}
	else if (col === 10) {
		$(cell).css("border-top-style", "hidden");
	}
	else {
		if (Math.random() >= 0.5) {
			$(cell).css("border-top-style", "hidden");
		} else {
			$(cell).css("border-right-style", "hidden");
		}
	}
}
function createPath() {
  for(let row=1;row<=10;row++){
    for(let  col=1;col<=10;col++){
      RemoveWall(row,col);
    }    
  }
}
