let player1;

const playerBtn = document.getElementById('playerBtn');
        playerBtn.addEventListener('click' , () => {
           let userName = prompt('Name : ');
           let userMarker = prompt('marker : ');
           player1 = createPlayer(userName,userMarker);
        })
        
let Gameboard = (function(){
    let board = ["","","","","","","","",""];

    return {
        gameboard : board
    };
})();

let createPlayer = (name,marker) => {

    return{

        name : name,
        marker : marker,

        fillarr (index) {
            if (Gameboard.gameboard[index] !== "" ) {
                console.log('this position already has a marker');
            }else{
                Gameboard.gameboard[index] = this.marker;
            }

        }
    };

};

let flow = {

    winCombos : [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],

    checkwin(){
        for (let i = 0; i < this.winCombos.length; i++) {
                let combo = this.winCombos[i];
                let firstPos = Gameboard.gameboard[combo[0]]
                let secondPos = Gameboard.gameboard[combo[1]]
                let thirdPos = Gameboard.gameboard[combo[2]] 
                
                if(firstPos !== "" && firstPos === secondPos && secondPos === thirdPos){
                    return true;
                }
            }
        return false;
    }  
}

const display = {

    display(){
        const cell = document.querySelectorAll('.cell');
        cell.forEach((singleCell) => {
            singleCell.addEventListener("click", () =>{

            player1.fillarr(singleCell.dataset.index);
            flow.checkwin();
            singleCell.textContent = Gameboard.gameboard[singleCell.dataset.index];

        })
    }) 
}
}

display.display();

