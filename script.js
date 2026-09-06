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
            if (Gameboard.gameboard[index] !== undefined ) {
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
                
                if(firstPos !== undefined && firstPos === secondPos && secondPos === thirdPos){
                    return true;
                }
            }
        return false
    }  
}

const player1 =  createPlayer('me','x');
player1.fillarr(0);
player1.fillarr(1);
player1.fillarr(2);

const player2 = createPlayer('opponenet','o');
player2.fillarr(5);

console.log(Gameboard.gameboard);
console.log(flow.checkwin());