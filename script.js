let Gameboard = (function(){
    let board = [];

    return {
        gameboard : board
    };
})();

let createPlayer = (name,marker) => {

    return{

        name : name,
        marker : marker,

        fillarr (index) {
            Gameboard.gameboard[index] = this.marker;
        }
    };

};

let flow = {
      
}

const player1 =  createPlayer('me','x');
player1.fillarr(2);

const player2 = createPlayer('opponenet','o');
player2.fillarr(1);

console.log(Gameboard.gameboard);