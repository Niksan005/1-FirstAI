import * as Game from "./GameFruidGathering/GameMain.js";

let net = new Game.Lib.IBrain.AI([8, 4]);

net.Train([0, 0, 1], [2]);

net.ToSvg("diagram");

//console.log(net.Run([1, 0, 0, 1]));

//let theMap = new Game.Map(0, 5);
//theMap.GenerateFruid();
//theMap.GenerateFruid();
//theMap.GenerateFruid();

//console.log(theMap.Map);

//console.log(Game.Lib.ItoXY(12, 5));