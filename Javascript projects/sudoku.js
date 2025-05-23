var errors = null;
var numSelected = null;
var tileSelected = null;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763",
]

window.onload = function() {
    setGame();
}

function setGame() {
    // number-pad
    for (let i = 1; i <= 9; i++) {
        /* the below code creates div tags in the following format:
        <div id="1" class="number">1</div>
        */
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("number-pad").appendChild(number);
    }

    // board
    for (let r = 0; r < 9; r++){
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            //populate the board with the starting numbers
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);

        }
    }
function selectNumber() {
    if(numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    //if a number has been selected from the number pad
    if(numSelected) {
        //if the tile already has a number, do nothing
        if(this.innerText != ""){
            return;
        }
        

        // get the coordinates of the tile so that you can compare it with the solution
        let coordinates = this.id.split("-"); //gets coordinates as a string
        // need to change string to integers
        let r = parseInt(coordinates[0]);
        let c = parseInt(coordinates[1]);

        if (solution[r][c] == numSelected.id) {
             //display the selected number in the tile
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
    
}
}