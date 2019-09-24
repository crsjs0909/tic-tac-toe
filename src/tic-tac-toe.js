class TicTacToe {
    constructor() {
        this.field=[null, null, null, null, null, null, null, null, null];
        this.length=0;
    }

    getCurrentPlayerSymbol() {
        return this.length%2===0?"x":"o";
    }

    nextTurn(rowIndex, columnIndex) {
        let ch=this.getCurrentPlayerSymbol();
        let idx=rowIndex*3 + columnIndex;
        if (this.field[idx]!==null){
            return;
        }
        this.field[idx]=ch;
        this.length++;
    }

    isFinished() {
        return this.noMoreTurns() || this.getWinner()!==null;
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.field[i]!==null && this.field[i]===this.field[i+3] && this.field[i]===this.field[i+6]) {
                return this.field[i];
            }
            if (this.field[3*i]!==null && this.field[3*i]===this.field[3*i+1] && this.field[3*i]===this.field[3*i+2]) {
                return this.field[3*i];
            }
        }
        if (this.field[0]!==null && this.field[0]===this.field[4] && this.field[0]===this.field[8]) {
            return this.field[0];
        }
        if (this.field[2]!==null && this.field[2]===this.field[4] && this.field[2]===this.field[6]) {
            return this.field[2];
        }
        return null;
    }

    noMoreTurns() {
        return this.length===9;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner()===null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex*3 + colIndex];
    }
}

module.exports = TicTacToe;
