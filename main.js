const connectFour = document.querySelector(".connect-four");

function makeBoard(height, width) {
  for (let i = 1; i <= height; i++) {
    const row = document.createElement("div");
    row.id = i;

    for (let j = 1; j <= width; j++) {
      const square = document.createElement("div");
      square.className = j;
      square.innerText = " ";
      square.classList.add("empty");
      square.classList.add("square");
      row.append(square);
    }
    connectFour.append(row);
  }
}

makeBoard(7, 6);

const modal = document.getElementById("myModal");

const span = document.getElementById("everybody");

const squares = document.querySelectorAll(".square");

const msg = document.querySelector("p");

for (let square of squares) {
  square.addEventListener("click", function makeMove(e) {
    const emptySquares = document.querySelectorAll(".empty");
    let color;
    if (emptySquares.length % 2 === 0) {
      color = "yellow";
    } else {
      color = "red";
    }
    if (color === "yellow") {
      msg.innerText = "It Is Red's Turn";
      modal.style.display = "block";
      modal.style.color = "red";
    }
    if (color === "red") {
      msg.innerText = "It Is Yellow's Turn";
      modal.style.display = "block";
      modal.style.color = "yellow";
    }

    const sqr = e.target;
    const colNumber = sqr.parentNode.id;
    const column = document.getElementById(`${colNumber}`);
    for (let i = column.childNodes.length - 1; i >= 0; i--) {
      if (column.childNodes[i].style.background === "") {
        const attribute = column.childNodes[i].getAttribute("class");
        if (attribute.includes("empty")) {
          column.childNodes[i].style.background = color;
          column.childNodes[i].style.color = color;
          column.childNodes[i].innerText = color[0];
          column.childNodes[i].classList.remove("empty");
        }
        break;
      }
    }

    let colOne =
      squares[0].textContent +
      squares[1].textContent +
      squares[2].textContent +
      squares[3].textContent +
      squares[4].textContent +
      squares[5].textContent;
    let colTwo =
      squares[6].textContent +
      squares[7].textContent +
      squares[8].textContent +
      squares[9].textContent +
      squares[10].textContent +
      squares[11].textContent;
    let colThree =
      squares[12].textContent +
      squares[13].textContent +
      squares[14].textContent +
      squares[15].textContent +
      squares[16].textContent +
      squares[17].textContent;
    let colFour =
      squares[18].textContent +
      squares[19].textContent +
      squares[20].textContent +
      squares[21].textContent +
      squares[22].textContent +
      squares[23].textContent;
    let colFive =
      squares[24].textContent +
      squares[25].textContent +
      squares[26].textContent +
      squares[27].textContent +
      squares[28].textContent +
      squares[29].textContent;
    let colSix =
      squares[30].textContent +
      squares[31].textContent +
      squares[32].textContent +
      squares[33].textContent +
      squares[34].textContent +
      squares[35].textContent;
    let colSeven =
      squares[36].textContent +
      squares[37].textContent +
      squares[38].textContent +
      squares[39].textContent +
      squares[40].textContent +
      squares[41].textContent;
    let rowOne =
      squares[0].textContent +
      squares[6].textContent +
      squares[12].textContent +
      squares[18].textContent +
      squares[24].textContent +
      squares[30].textContent +
      squares[36].textContent;
    let rowTwo =
      squares[1].textContent +
      squares[7].textContent +
      squares[13].textContent +
      squares[19].textContent +
      squares[25].textContent +
      squares[31].textContent +
      squares[37].textContent;
    let rowThree =
      squares[2].textContent +
      squares[8].textContent +
      squares[14].textContent +
      squares[20].textContent +
      squares[26].textContent +
      squares[32].textContent +
      squares[38].textContent;
    let rowFour =
      squares[3].textContent +
      squares[9].textContent +
      squares[15].textContent +
      squares[21].textContent +
      squares[27].textContent +
      squares[33].textContent +
      squares[39].textContent;
    let rowFive =
      squares[4].textContent +
      squares[10].textContent +
      squares[16].textContent +
      squares[22].textContent +
      squares[28].textContent +
      squares[34].textContent +
      squares[40].textContent;
    let rowSix =
      squares[5].textContent +
      squares[11].textContent +
      squares[17].textContent +
      squares[23].textContent +
      squares[29].textContent +
      squares[35].textContent +
      squares[41].textContent;
    let leftDiaOne =
      squares[18].textContent +
      squares[25].textContent +
      squares[32].textContent +
      squares[39].textContent;
    let leftDiaTwo =
      squares[12].textContent +
      squares[19].textContent +
      squares[26].textContent +
      squares[33].textContent +
      squares[40].textContent;
    let leftDiaThree =
      squares[6].textContent +
      squares[13].textContent +
      squares[20].textContent +
      squares[27].textContent +
      squares[34].textContent +
      squares[41].textContent;
    let leftDiaFour =
      squares[0].textContent +
      squares[7].textContent +
      squares[14].textContent +
      squares[21].textContent +
      squares[28].textContent +
      squares[35].textContent;
    let leftDiaFive =
      squares[1].textContent +
      squares[8].textContent +
      squares[15].textContent +
      squares[22].textContent +
      squares[29].textContent;
    let leftDiaSix =
      squares[2].textContent +
      squares[9].textContent +
      squares[16].textContent +
      squares[23].textContent;
    let rightDiaOne =
      squares[18].textContent +
      squares[13].textContent +
      squares[8].textContent +
      squares[3].textContent;
    let rightDiaTwo =
      squares[24].textContent +
      squares[19].textContent +
      squares[14].textContent +
      squares[9].textContent +
      squares[4].textContent;
    let rightColDiaThree =
      squares[30].textContent +
      squares[25].textContent +
      squares[20].textContent +
      squares[15].textContent +
      squares[10].textContent +
      squares[5].textContent;
    let rightDiaFour =
      squares[36].textContent +
      squares[31].textContent +
      squares[26].textContent +
      squares[21].textContent +
      squares[16].textContent +
      squares[11].textContent;
    let rightDiaFive =
      squares[37].textContent +
      squares[32].textContent +
      squares[27].textContent +
      squares[22].textContent +
      squares[17].textContent;
    let rightDiaSix =
      squares[38].textContent +
      squares[33].textContent +
      squares[28].textContent +
      squares[23].textContent;

    const winCon = [
      colOne,
      colTwo,
      colThree,
      colFour,
      colFive,
      colSix,
      colSeven,
      rowOne,
      rowTwo,
      rowThree,
      rowFour,
      rowFive,
      rowSix,
      leftDiaOne,
      leftDiaTwo,
      leftDiaThree,
      leftDiaFour,
      leftDiaFive,
      leftDiaSix,
      rightDiaOne,
      rightDiaTwo,
      rightColDiaThree,
      rightDiaFour,
      rightDiaFive,
      rightDiaSix,
    ];
    let win = false;

    for (let wins of winCon) {
      if (wins.includes("rrrr")) {
        win = true;
        msg.innerText = "Yellow is the loser!!!";
        modal.style.display = "block";
        for (let square of squares) {
          square.inert = true;
        }
      }
      if (wins.includes("yyyy")) {
        win = true;
        msg.innerText = "Red is the loser!!!";
        modal.style.display = "block";
        for (let square of squares) {
          square.inert = true;
        }
      }
    }

    if (emptySquares.length === 1 && win === false) {
      msg.innerText = "Everybody loses!!!";
      modal.style.display = "block";
    }
  });
}

span.onclick = function () {
  modal.style.display = "none";
};

const reset = document.querySelector("button");

reset.addEventListener("click", () => {
  for (let square of squares) {
    square.style.background = "";
    square.innerText = " ";
    square.classList.add("empty", "square");
    modal.style.display = "none";
    square.inert = false;
  }
});
