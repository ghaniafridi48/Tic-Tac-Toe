let player1;
let player2;
let currentplayer;

const playerBtn = document.getElementById('playerBtn');
        playerBtn.addEventListener('click' , () => {
            let userName1 = prompt('Player 1 Name: ');
            let userMarker1 = prompt('Player 1 Marker (X or O): ');
            player1 = createPlayer(userName1, userMarker1);

            let userName2 = prompt('Player 2 Name: ');
            let userMarker2 = prompt('Player 2 Marker (X or O): ');
            player2 = createPlayer(userName2, userMarker2);

            currentplayer = player1;
            message.textContent = `${currentplayer.name}'s turn`; 

        })
        
let Gameboard = (function(){
        let board = ["","","","","","","","",""];

        const getBoard = () => board;

        const resetBoard = () => {
            for (let i = 0; i < board.length; i++) {
                    board[i] = "";            
            }
        };

        const setMarker = (index,marker) =>{
            board[index] = marker;

        };

        
        return {
            getBoard,
            resetBoard,
            setMarker
        };
})();

let createPlayer = (name,marker) => {
    return{
        name,
        marker
    }
};

let flow = {

    winCombos : [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],

    checkwin(){
        for (let i = 0; i < this.winCombos.length; i++) {
                let combo = this.winCombos[i];
                let firstPos = Gameboard.getBoard()[combo[0]]
                let secondPos = Gameboard.getBoard()[combo[1]]
                let thirdPos = Gameboard.getBoard()[combo[2]] 
                
                if(firstPos !== "" && firstPos === secondPos && secondPos === thirdPos){
                    let message = document.getElementById('message');
                    message.textContent  = `\n${currentplayer.name} wins!`;

                }
            }
    }  
}

const display = {

    display(){
        const cell = document.querySelectorAll('.cell');
        cell.forEach((singleCell) => {
            singleCell.addEventListener("click", () =>{
                 if (Gameboard.getBoard()[singleCell.dataset.index] === "" ) {
                     
                     Gameboard.setMarker(singleCell.dataset.index , currentplayer.marker);
                     singleCell.textContent = Gameboard.getBoard()[singleCell.dataset.index];

                     flow.checkwin();
                     
                     (currentplayer === player1) ? currentplayer = player2 : currentplayer = player1;
                     message.textContent = `${currentplayer.name}'s turn`; 

                     
                    }
                    })
                }) 
            }
}
display.display();
