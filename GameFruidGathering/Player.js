import * as lib from "./IndexMapping.js"

class Player {

    X = 0;
    Y = 0;
    Points = 0;
    Net = null;

    constructor(x, y, hiddens) {
        this.X = x;
        this.Y = y;
        Net = new lib.IBrain.AI(hiddens);
    }
}

export { Player, lib };