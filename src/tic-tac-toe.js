class TicTacToe {
    constructor() {
        this.x_player = 'x';
        this.o_player = 'o';
        this.row = 0;
        this.col = 0;

        this.matrix = new Array(3);
        var i;
        var j;
        for(i = 0; i < 3; i++){
            this.matrix[i] = new Array(3);
        }
        for(i = 0; i < 3; i++){
            for(j = 0; j < 3; j++){
                this.matrix[i][j] = null;
            }
        }

        this.turn = 0;
    }

    getCurrentPlayerSymbol() {
        if(this.turn%2 === 0){
            return 'x';
        }else{
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.getFieldValue(rowIndex, columnIndex) !== null){
        }else{
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.turn++;
        }
    }

    isFinished() {
        if( this.noMoreTurns() === false && this.getWinner() === null){
            return false;
        }else{
            return true;
        }
    }

    getWinner() {
        //horisontal
        if(this.getFieldValue(0, 0) === this.getFieldValue(0, 1) && this.getFieldValue(0, 0) === this.getFieldValue(0, 2)){return this.matrix[0][0];}
        else if(this.getFieldValue(1, 0) === this.getFieldValue(1, 1) && this.getFieldValue(1, 0) === this.getFieldValue(1, 2)){return this.matrix[1][0];}
        else if(this.getFieldValue(2, 0) === this.getFieldValue(2, 1) && this.getFieldValue(2, 0) === this.getFieldValue(2, 2)){return this.matrix[2][0];}
        //vertical
        else if(this.getFieldValue(0, 0) === this.getFieldValue(1, 0) && this.getFieldValue(0, 0) === this.getFieldValue(2, 0)){return this.matrix[0][0];}
        else if(this.getFieldValue(0, 1) === this.getFieldValue(1, 1) && this.getFieldValue(0, 1) === this.getFieldValue(2, 1)){return this.matrix[0][1];}
        else if(this.getFieldValue(0, 2) === this.getFieldValue(1, 2) && this.getFieldValue(0, 2) === this.getFieldValue(2, 2)){return this.matrix[0][2];}
        //diagonal
        else if(this.getFieldValue(0, 0) === this.getFieldValue(1, 1) && this.getFieldValue(0, 0) === this.getFieldValue(2, 2)){return this.matrix[0][0];}
        else if(this.getFieldValue(2, 0) === this.getFieldValue(1, 1) && this.getFieldValue(2, 0) === this.getFieldValue(0, 2)){return this.matrix[2][0];}

        else{return null;}
    }

    noMoreTurns() {
        var flag = 0;
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                if(this.getFieldValue(i, j) === null){
                    flag++;
                }
            }
        }
        if(flag != 0){
            return false;
        }else return true;
    }

    isDraw() {
        if(this.isFinished() === true && this.getWinner() === null){
            return true;
        }else{
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
